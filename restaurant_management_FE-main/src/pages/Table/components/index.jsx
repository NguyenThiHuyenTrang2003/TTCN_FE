import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import InputRES from "../../../../components/UI/Input";
import ButtonRES from "../../../../components/UI/Button";
import _ from "lodash";
import { isValidate } from "../../../../utils/validate";
import { handleCheckValidateConfirm } from "../../../../utils/helper";
import ModalGeneral from "../../../../components/UI/Modal/ModalGeneral";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  setErrorCreateOrUpdateBooking,
  setVisibleModalCreateOrUpdateBooking,
} from "../../../../states/modules/booking";
import {
  handleCreateBooking,
  handleUpdateBooking,
} from "../../../../api/booking";

CreateOrUpdateBooking.prototype = {
  isModalOpen: PropTypes.bool.isRequired,
  configModal: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
};

CreateOrUpdateBooking.defaultProps = {
  isModalOpen: false,
  textBtnConfirm: "OK",
  configModal: {
    title: "Title",
    type: "CREATE",
  },
};

function CreateOrUpdateBooking(props) {
  let { booking, configModal } = props;
  const [dataCreateOrUpdate, setDataCreateOrUpdate] = useState({
    name: "",
    date: "",
    time: "",
    peopleCount: "",
  });

  const visibleModalCreateOrUpdateBooking = useSelector(
    (state) => state.booking.visibleModalCreateOrUpdateBooking
  );
  const isLoadingBtnCreateOrUpdateBooking = useSelector(
    (state) => state.booking.isLoadingBtnCreateOrUpdateBooking
  );
  const errorCreateOrUpdateBooking = useSelector(
    (state) => state.booking.errorCreateOrUpdateBooking
  );

  const dispatch = useDispatch();

  useEffect(() => {
    handleReloadData();
  }, [visibleModalCreateOrUpdateBooking]);

  useEffect(() => {
    dispatch(
      setErrorCreateOrUpdateBooking({
        name: "",
        date: "",
        time: "",
        peopleCount: "",
      })
    );
  }, [dataCreateOrUpdate, dispatch]);

  useEffect(() => {
    setDataCreateOrUpdate({
      name: booking.name,
      date: booking.date,
      time: booking.time,
      peopleCount: booking.peopleCount,
    });
  }, [booking]);

  const handleReloadData = () => {
    setDataCreateOrUpdate({
      name: "",
      date: "",
      time: "",
      peopleCount: "",
    });
  };

  const handleChangeInput = (valueInput, type) => {
    let value = valueInput.target.value;
    let data = _.cloneDeep(dataCreateOrUpdate);
    data[type] = value;
    setDataCreateOrUpdate(data);
  };

  const validateBlur = (type) => {
    let validate = isValidate(
      dataCreateOrUpdate,
      type,
      errorCreateOrUpdateBooking
    );
    dispatch(setErrorCreateOrUpdateBooking(validate.error));
    return validate.isError;
  };

  const handleConfirmCreateOrUpdateBooking = () => {
    let dataToSend = {
      name: dataCreateOrUpdate.name,
      date: dataCreateOrUpdate.date,
      time: dataCreateOrUpdate.time,
      peopleCount: dataCreateOrUpdate.peopleCount,
    };

    const validate = handleCheckValidateConfirm(
      dataToSend,
      errorCreateOrUpdateBooking
    );
    dispatch(setErrorCreateOrUpdateBooking(validate.dataError));

    if (!validate.isError) {
      if (configModal.type === "CREATE") {
        dispatch(handleCreateBooking(dataToSend)); // Gửi dữ liệu JSON
      } else {
        dispatch(handleUpdateBooking(dataToSend, booking.id)); // Gửi dữ liệu JSON
      }
    }
  };

  return (
    <ModalGeneral
      isModalOpen={visibleModalCreateOrUpdateBooking}
      onClose={() => dispatch(setVisibleModalCreateOrUpdateBooking(false))}
      configModal={configModal}
    >
      <div className={styles.mainModalWrap}>
        {/* Render input username nếu là chế độ CREATE */}
        <div className={styles.inputWrapper}>
          <div className={styles.label}>Name *</div>
          <InputRES
            type={"text"}
            placeholder={"Enter name..."}
            onChange={(e) => handleChangeInput(e, "name")}
            onBlur={() => validateBlur("name")}
            value={dataCreateOrUpdate.name}
            error={errorCreateOrUpdateBooking.name}
          />
        </div>

        <div className={styles.inputWrapper}>
          <div className={styles.label}>Date *</div>
          <InputRES
            type={"date"}
            placeholder={"Enter date..."}
            onChange={(e) => handleChangeInput(e, "date")}
            onBlur={() => validateBlur("date")}
            value={dataCreateOrUpdate.date}
            error={errorCreateOrUpdateBooking.date}
          />
        </div>

        <div className={styles.inputWrapper}>
          <div className={styles.label}>Time *</div>
          <InputRES
            type={"time"}
            placeholder={"Enter time..."}
            onChange={(e) => handleChangeInput(e, "time")}
            onBlur={() => validateBlur("time")}
            value={dataCreateOrUpdate.time}
            error={errorCreateOrUpdateBooking.time}
          />
        </div>

        <div className={styles.inputWrapper}>
          <div className={styles.label}>Number of People *</div>
          <InputRES
            type={"number"}
            placeholder={"Enter number of people..."}
            onChange={(e) => handleChangeInput(e, "peopleCount")}
            onBlur={() => validateBlur("peopleCount")}
            value={dataCreateOrUpdate.peopleCount}
            error={errorCreateOrUpdateBooking.peopleCount}
          />
        </div>

        <div className={styles.btnWrap}>
          <ButtonRES
            textBtn={configModal.type === "CREATE" ? "Create" : "Update"}
            loading={isLoadingBtnCreateOrUpdateBooking}
            onClick={() => handleConfirmCreateOrUpdateBooking()}
            disable={false}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </div>
      </div>
    </ModalGeneral>
  );
}

export default CreateOrUpdateBooking;
