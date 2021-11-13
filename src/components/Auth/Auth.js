import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

// Components
import styles from "./auth.module.scss";
import UseQR from "../../components/useQr/useQr";

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
    <div className={styles.container}>
      {/* title label */}

      <div className={styles.labelTitle}>
        <label className={styles.phoneLabel}>Phone</label>
        <label>log in with email or username</label>
      </div>

      {/* select phone no */}

      <div className={styles.selectedContainer}>
        <div className={styles.labelCountry}>
          <label>US +1</label>

          <Image
            src="/static/icons/downArrow.svg"
            alt="Dwon Arrow"
            width={25}
            height={25}
          />
        </div>

        <div className={styles.lineContent}>
          <p></p>
        </div>

        <input type="text" placeholder="Phone Number" />
      </div>

      {/* enter code */}

      <div className={styles.enterCodeContainer}>
        <input type="text" placeholder="Enter 4-digit Code" />
        <div className={styles.enterCodeLabel}>
          <label>Send code</label>
        </div>
      </div>

      {/* login password */}

      {/* login Btn */}
    </div>
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
