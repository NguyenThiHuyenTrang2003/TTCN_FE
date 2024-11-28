import { all, fork, put, takeLatest } from "redux-saga/effects";
import { setTitlePage } from "../app";
import _ from "lodash";
import { getListMenu } from "../../../api/menu";
import {
  setErrorCreateOrUpdateMenu,
  setVisibleModalCreateOrUpdateMenu,
  createMenuFail,
  createMenuSuccess,
  updateMenuFail,
  updateMenuSuccess,
} from "./index";
import { getNotification } from "../../../utils/helper";

function* loadRouteData() {
  yield put(setTitlePage("Menu"));
}

function* handleActions() {
  yield takeLatest(createMenuSuccess, function* () {
    getNotification("success", "Create Menu success");
    yield put(setVisibleModalCreateOrUpdateMenu(false)); 
    yield put(getListMenu()); 
  });

  yield takeLatest(createMenuFail, function* (action) {
    let status = action.payload.data.code;

    if (status === 409) {
      let errors = action.payload.data.details;

      yield put(
        setErrorCreateOrUpdateMenu({
          name: _.get(errors, "name", ""),
        })
      );
    }
    getNotification("error", "Create Menu fail");
  });

  yield takeLatest(updateMenuSuccess, function* () {
    getNotification("success", "Update Menu success");
    yield put(setVisibleModalCreateOrUpdateMenu(false)); 
    yield put(getListMenu()); 
  });

  yield takeLatest(updateMenuFail, function* (action) {
    let status = action.payload.data.code;

    if (status === 409) {
      let errors = action.payload.data.details;

      yield put(
        setErrorCreateOrUpdateMenu({
          name: _.get(errors, "name", ""),
        })
      );
    }
    getNotification("error", "Update Menu fail");
  });
}

export default function* loadMenuSaga() {
  yield all([fork(loadRouteData), fork(handleActions)]);
}
