import React from "react";
import PropTypes from "prop-types";
import styles from "./ModalOverlay.module.css";

const ModalOverlay = (props) => (
    <div
      className={styles.modalOverlay}
      onClick={props.toggleModal}
    ></div>
  );
  
  ModalOverlay.propTypes = {
    toggleModal: PropTypes.func.isRequired,
  };
  
  export default ModalOverlay;
