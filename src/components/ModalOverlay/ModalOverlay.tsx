import { FC } from "react";
import styles from "./ModalOverlay.module.css";

const ModalOverlay: FC<{handleModalClose: () => void}> = ({handleModalClose}) => {   
  return <div className={styles.modalOverlay} onClick={handleModalClose}></div>;
};

  export default ModalOverlay;
