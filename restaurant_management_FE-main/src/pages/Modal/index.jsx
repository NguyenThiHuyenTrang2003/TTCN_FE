import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

function ModalGeneral({ isModalOpen, onClose, configModal, children }) {
  if (!isModalOpen) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3>{configModal.title}</h3>
          <button onClick={onClose}>X</button>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
}

ModalGeneral.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  configModal: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
};

export default ModalGeneral;
