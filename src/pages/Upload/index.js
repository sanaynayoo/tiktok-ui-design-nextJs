import { useState, useEffect } from "react";

// Components
import Modal from "../../components/Modal/Modal";
import styls from "../../../styles/Home.module.scss";
import Auth from "../../components/Auth/Auth";

const Upload = () => {
  const [showModal, setShowModal] = useState(false);
  const [showItem, setShowItem] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const useQrHandler = () => {
    setShowItem(true);
  };

  return (
    <div className={styls.container}>
      <h3>Upload Page</h3>

      <Modal
        show={showModal}
        closeModal={() => setShowModal(false)}
        Title="Login To TikTok"
        backHandler={() => setShowItem(false)}
        showBackIcon={showItem}
      >
        <Auth useQrHandler={useQrHandler} hideItem={showItem} />
      </Modal>
    </div>
  );
};

export default Upload;
