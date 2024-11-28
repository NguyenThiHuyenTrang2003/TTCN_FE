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
  setErrorCreateOrUpdateMenu,
  setVisibleModalCreateOrUpdateMenu,
} from "../../../../states/modules/menu";
import {
  handleCreateMenu,
  handleUpdateMenu,
} from "../../../../api/menu";

CreateOrUpdateMenu.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  configModal: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
};

CreateOrUpdateMenu.defaultProps = {
  isModalOpen: false,
  textBtnConfirm: "OK",
  configModal: {
    title: "Create or Update Menu",
    type: "CREATE",
  },
};

function CreateOrUpdateMenu(props) {
  const { menu, configModal } = props;
  const [dataCreateOrUpdate, setDataCreateOrUpdate] = useState({
    name: "",
    description: "",
  });
  const visibleModalCreateOrUpdateMenu = useSelector(
    (state) => state.menu.visibleModalCreateOrUpdateMenu
  );
  const isLoadingBtnCreateOrUpdateMenu = useSelector(
    (state) => state.menu.isLoadingBtnCreateOrUpdateMenu
  );
  const errorCreateOrUpdateMenu = useSelector(
    (state) => state.menu.errorCreateOrUpdateMenu
  );
  const dispatch = useDispatch();

  useEffect(() => {
    handleReloadData();
  }, [visibleModalCreateOrUpdateMenu]);

  useEffect(() => {
    dispatch(
      setErrorCreateOrUpdateMenu({
        name: "",
        description: "",
      })
    );
  }, [dataCreateOrUpdate, dispatch]);

  useEffect(() => {
    if (menu) {
      setDataCreateOrUpdate({
        name: menu.name,
        description: menu.description,
      });
    }
  }, [menu]);

  const handleReloadData = () => {
    setDataCreateOrUpdate({
      name: "",
      description: "",
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
      errorCreateOrUpdateMenu
    );
    dispatch(setErrorCreateOrUpdateMenu(validate.error));
    return validate.isError;
  };

  const handleConfirmCreateOrUpdateMenu = () => {
    let dataToSend = {
      name: dataCreateOrUpdate.name,
      description: dataCreateOrUpdate.description,
    };

    const validate = handleCheckValidateConfirm(
      dataToSend,
      errorCreateOrUpdateMenu
    );
    dispatch(setErrorCreateOrUpdateMenu(validate.dataError));

    if (!validate.isError) {
      if (configModal.type === "CREATE") {
        dispatch(handleCreateMenu(dataToSend)); // Gửi dữ liệu tạo menu
      } else {
        dispatch(handleUpdateMenu(dataToSend, menu.id)); // Gửi dữ liệu cập nhật menu
      }
    }
  };

  return (
    <ModalGeneral
      isModalOpen={visibleModalCreateOrUpdateMenu}
      onClose={() => dispatch(setVisibleModalCreateOrUpdateMenu(false))}
      configModal={configModal}
    >
      <div className={styles.mainModalWrap}>
        {/* Render input Name */}
        <div className={styles.inputWrapper}>
          <div className={styles.label}>Name *</div>
          <InputRES
            type={"text"}
            placeholder={"Enter menu name..."}
            onChange={(e) => handleChangeInput(e, "name")}
            onBlur={() => validateBlur("name")}
            value={dataCreateOrUpdate.name}
            error={errorCreateOrUpdateMenu.name}
          />
        </div>

        {/* Render input Description */}
        <div className={styles.inputWrapper}>
          <div className={styles.label}>Description</div>
          <InputRES
            type={"text"}
            placeholder={"Enter menu description..."}
            onChange={(e) => handleChangeInput(e, "description")}
            value={dataCreateOrUpdate.description}
            error={errorCreateOrUpdateMenu.description}
          />
        </div>

        <div className={styles.btnWrap}>
          <ButtonRES
            textBtn={configModal.type === "CREATE" ? "Create" : "Update"}
            loading={isLoadingBtnCreateOrUpdateMenu}
            onClick={() => handleConfirmCreateOrUpdateMenu()}
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

export default CreateOrUpdateMenu;
