import styles from "./modal.module.scss";

// import {Fragment} from 'react';

const Modal = ({ children, show }) => {
  return (
    <>{show ? <div className={styles.modalContainer}>{children}</div> : null}</>
  );
};

export default Modal;
