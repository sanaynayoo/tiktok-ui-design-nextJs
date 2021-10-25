import React, { useState } from "react";

import styles from "../../styles/Home.module.scss";
import Modal from "../components/Modal/Modal";

const Index = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <h3>TikTok Home Page</h3>

      <button
        className={styles.btnContainer}
        onClick={() => setShowModal(!showModal)}
      >
        {showModal ? "hideModal" : "showModal"}
      </button>

      <Modal show={showModal}>
        <ul>
          <li>React Native Js</li>
          <li>React Js</li>
          <li>Next Js</li>
        </ul>
      </Modal>
    </div>
  );
};

export default Index;
