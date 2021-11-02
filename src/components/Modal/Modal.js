import { useState, useEffect } from "react";
import styles from "./modal.module.scss";
import Image from "next/image";

import ReactDOM from "react-dom";

// import {Fragment} from 'react';

const Modal = ({
  children,
  show,
  closeModal,
  Title,
  backHandler,
  showBackIcon,
}) => {
  const [isBrowser, setIsBrowse] = useState(false);

  useEffect(() => {
    setIsBrowse(true);
  }, []);

  const modalConent = show ? (
    <div className={styles.modalBody}>
      <div className={styles.modalContent}>
        <div className={styles.closeModalContent}>
          <div className={styles.backContainer} onClick={backHandler}>
            {showBackIcon ? (
              <Image
                src="/static/icons/back.svg"
                alt="back icon"
                width={25}
                height={20}
              />
            ) : null}
          </div>
          <a href="#" onClick={closeModal}>
            X
          </a>
        </div>
        <div className={styles.modalContentItem}>
          <div className={styles.headerContent}>
            <a className={styles.titleText}>{Title}</a>
            <div className={styles.modalContainer}>{children}</div>
          </div>

          <div className={styles.footerContent}>
            <span>Don’t have an account?</span>
            <a href="#">Sign up</a>
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
