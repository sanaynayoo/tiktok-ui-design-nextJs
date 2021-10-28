import Link from "next/link";
import Image from "next/image";

import styles from "./auth.module.scss";

const Auth = () => {
  return (
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
        <Link href="/">
          <a>Use QR code</a>
        </Link>
      </div>

      {/* User */}

      <div className={styles.iconContent}>
        <div className={styles.iconItem}>
          <Image
            src="/static/icons/user.svg"
            alt="qr icon"
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
            alt="qr icon"
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
            alt="qr icon"
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
            alt="qr icon"
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
            alt="qr icon"
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
            alt="qr icon"
            width={25}
            height={20}
          />
        </div>
        <Link href="/">
          <a>Continue with Instragram</a>
        </Link>
      </div>
    </>
  );
};

export default Auth;
