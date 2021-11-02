import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "./auth.module.scss";

const Auth = ({ useQrHandler, hideItem }) => {

  return !hideItem ? (
    <>
      {/* qrcode */}

      <div className={styles.iconContent}>
        <div className={styles.iconItem}>
          <Image
            src="/static/icons/qrcode.svg"
            alt="qr icon"
            width={25}
            height={20}
          />
        </div>
        <div className={styles.itemCotnet} onClick={useQrHandler}>
          <a>Use QR code</a>
        </div>
      </div>

      {/* User */}

      <div className={styles.iconContent}>
        <div className={styles.iconItem}>
          <Image
            src="/static/icons/user.svg"
            alt="user icon"
            width={25}
            height={20}
          />
        </div>
        <Link href="/">
          <a>User phone/email / username</a>
        </Link>
      </div>

      {/* facebook */}

      <div className={styles.iconContent}>
        <div className={styles.iconItem}>
          <Image
            src="/static/icons/fb.svg"
            alt="fb icon"
            width={25}
            height={20}
          />
        </div>
        <Link href="/">
          <a>Containue with Facebook</a>
        </Link>
      </div>

      {/* Google */}

      <div className={styles.iconContent}>
        <div className={styles.iconItem}>
          <Image
            src="/static/icons/google.svg"
            alt="google icon"
            width={25}
            height={20}
          />
        </div>
        <Link href="/">
          <a>Containue with Google</a>
        </Link>
      </div>

      {/* Twitter */}

      <div className={styles.iconContent}>
        <div className={styles.iconItem}>
          <Image
            src="/static/icons/twitter.svg"
            alt="twitter icon"
            width={25}
            height={20}
          />
        </div>
        <Link href="/">
          <a>Continue with Twitter</a>
        </Link>
      </div>

      {/* Apple */}

      <div className={styles.iconContent}>
        <div className={styles.iconItem}>
          <Image
            src="/static/icons/apple.svg"
            alt="apple icon"
            width={25}
            height={20}
          />
        </div>
        <Link href="/">
          <a>Continue with Apple</a>
        </Link>
      </div>

      {/* Instragram */}

      <div className={styles.iconContent}>
        <div className={styles.iconItem}>
          <Image
            src="/static/icons/instragram.svg"
            alt="instagram icon"
            width={25}
            height={20}
          />
        </div>
        <Link href="/">
          <a>Continue with Instagram</a>
        </Link>
      </div>
    </>
  ) : (
    <div>
      <h3>Welcome QR Code</h3>
    </div>
  );
};

export default Auth;
