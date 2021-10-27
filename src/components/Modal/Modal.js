import { useState, useEffect } from "react";
import styles from "./modal.module.scss";

import ReactDOM from "react-dom";

// import {Fragment} from 'react';

const Modal = ({ children, show, closeModal, Title }) => {
  const [isBrowser, setIsBrowse] = useState(false);

  useEffect(() => {
    setIsBrowse(true);
  }, []);

  const modalConent = show ? (
    <div className={styles.modalBody}>
      <div className={styles.modalContent}>
        <div className={styles.closeModalContent}>
          <a href="#" onClick={closeModal}>
            X
          </a>
        </div>
        <div className={styles.modalContentItem}>
          <div className={styles.headerContent}>
            <h3>{Title}</h3>
            <div className={styles.modalContainer}>{children}</div>
          </div>

          <div>
            <h3>Footer</h3>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalConent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
