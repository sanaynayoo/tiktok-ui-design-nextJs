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
            width={20}
            height={18}
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
            width={20}
            height={18}
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
            width={20}
            height={18}
          />
        </div>
        <Link href="/">
          <a>Facebook</a>
        </Link>
      </div>
    </>
  );
};

export default Auth;
