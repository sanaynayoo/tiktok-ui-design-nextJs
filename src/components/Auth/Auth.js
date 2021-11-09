import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

// Components
import styles from "./auth.module.scss";
import UseQR from "../../components/useQr/useQr";

const Auth = ({ authItemHandler, showItem, data }) => {
  const [showContent, setShowContent] = useState(true);

  const instructionHandler = () => {
    console.log(" instruction >>");
    setShowContent(false);
  };

  const onMouseLeaveHandler = () => {
    console.log("onMouse Leave >>");
    setShowContent(true);
  };

  return showItem ? (
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
  ) : (
    <UseQR
      instructionHandler={instructionHandler}
      onMouseLeaveHandler={onMouseLeaveHandler}
      showContent={showContent}
    />
  );
};

export default Auth;
