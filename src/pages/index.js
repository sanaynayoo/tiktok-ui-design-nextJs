import React, { useState } from "react";

// Components
import styles from "../../styles/Home.module.scss";
import Modal from "../components/Modal/Modal";
import Auth from "../components/Auth/Auth";

const Index = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <h3>TikTok Home Page</h3>

      <button
        className={styles.btnContainer}
        onClick={() => setShowModal(true)}
      >
        Show Modal
      </button>

      <Modal
        show={showModal}
        closeModal={() => setShowModal(false)}
        Title="Login To TikTok"
      >
        <Auth />
      </Modal>
    </div>
  );
};

export default Index;
