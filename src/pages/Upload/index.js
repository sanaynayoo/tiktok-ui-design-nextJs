import { useState, useEffect } from "react";

// Components
import Modal from "../../components/Modal/Modal";
import styls from "../../../styles/Home.module.scss";
import Auth from "../../components/Auth/Auth";
import AuthItem from "../../data/auth";

const Upload = () => {
  const [showModal, setShowModal] = useState(false);
  const [showItem, setShowItem] = useState(true);
  const [showBackIcon, setShowBackIcon] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  useEffect(() => {
    setShowModal(true);
    setModalTitle("Login To TikTok");
  }, []);

  const authHandler = (item) => {
    if (item.id === 1) {
      setShowItem(false);
      setShowBackIcon(true);
      setModalTitle("Log in with QR code");
    } else {
      console.log("clicked item -->", item.name);
    }
  };

  const backHandlerAction = () => {
    setShowItem(true);
    setShowBackIcon(false);
    setModalTitle("Login To TikTok");
  };

  return (
    <div className={styls.container}>
      <h3>Upload Page</h3>

      <Modal
        show={showModal}
        closeModal={() => setShowModal(false)}
        Title={modalTitle} // 'Login To TikTok'
        backHandler={backHandlerAction}
        showBackIcon={showBackIcon}
      >
        <Auth
          data={AuthItem}
          authItemHandler={authHandler}
          showItem={showItem}
        />
      </Modal>
    </div>
  );
};

export default Upload;
