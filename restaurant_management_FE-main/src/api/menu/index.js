import callApi from "../callApi";
import {
  startRequest,
  requestSuccess,
  requestError,
} from "../../states/modules/app";


export const getList = () => async (dispatch, getState) => {
  return callApi({
    method: "get",
    url: "/starter-pack/whitelist-round-status",
    actionTypes: [startRequest, requestSuccess, requestError],
    variables: {}, 
    dispatch,
    getState,
  });
};


export const getItemDetails = (id) => async (dispatch, getState) => {
  return callApi({
    method: "get",
    url: `/starter-pack/item/${id}`,
    actionTypes: [startRequest, requestSuccess, requestError],
    variables: {}, 
    dispatch,
    getState,
  });
};


export const createItem = (data) => async (dispatch, getState) => {
  return callApi({
    method: "post",
    url: "/starter-pack/item",
    actionTypes: [startRequest, requestSuccess, requestError],
    variables: data, 
    dispatch,
    getState,
  });
};


export const updateItem = (id, data) => async (dispatch, getState) => {
  return callApi({
    method: "put",
    url: `/starter-pack/item/${id}`,
    actionTypes: [startRequest, requestSuccess, requestError],
    variables: data, 
    dispatch,
    getState,
  });
};


export const deleteItem = (id) => async (dispatch, getState) => {
  return callApi({
    method: "delete",
    url: `/starter-pack/item/${id}`,
    actionTypes: [startRequest, requestSuccess, requestError],
    variables: {}, 
    dispatch,
    getState,
  });
};
