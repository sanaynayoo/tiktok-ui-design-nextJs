import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

// Components
import styles from "./auth.module.scss";
import UseQR from "../../components/useQr/useQr";
import UserEmail from "../userEmail/userEmail";

const Auth = ({ authItemHandler, showItem, data }) => {
  const [showContent, setShowContent] = useState(true);

  const onMouseOverHandler = () => {
    setShowContent(false);
  };

  const onMouseLeaveHandler = () => {
    setShowContent(true);
  };

  return showItem === 0 ? (
    <>
      {data.map((item) => (
        <div
          className={styles.iconContent}
          onClick={() => authItemHandler(item)}
          key={item.id}
        >
          <div className={styles.iconItem}>
            <Image src={item.image} alt={item.alt} width={25} height={20} />
          </div>
          <Link href="/Upload">
            <a>{item.name}</a>
          </Link>
        </div>
      ))}
    </>
  ) : showItem === 1 ? (
    <UseQR
      onMouseOverHandler={onMouseOverHandler}
      onMouseLeaveHandler={onMouseLeaveHandler}
      showContent={showContent}
    />
  ) : showItem === 2 ? (
    <UserEmail />
  ) : showItem === 3 ? (
    <h5>Facebook Modal</h5>
  ) : showItem === 4 ? (
    <h5>Google Modal</h5>
  ) : showItem === 5 ? (
    <h5>Twitter Modal</h5>
  ) : showItem === 6 ? (
    <h5>Apple Modal</h5>
  ) : (
    <h5>Instagram Modal</h5>
  );
};

export default Auth;
