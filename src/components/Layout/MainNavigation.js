import Link from "next/link";
import styles from "./mainnav.module.scss";
import Image from "next/image";

const MainNavigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/static/images/logo.png"
          alt="Tiktok"
          width={35}
          height={35}
        />
        <Link href="/">
          <a>TikTok</a>
        </Link>
      </div>

      <div className={styles.inputContainer}>
        <input placeholder="Search accounts and videos" />
        <button>
          <Image
            src="/static/icons/search.svg"
            alt="search icon"
            width={20}
            height={18}
          />
        </button>
      </div>

      <div className={styles.uploadContainer}>
        <div className={styles.uploadContent}>
          <Link href="/Upload">Upload</Link>
        </div>
        <button className={styles.loginContent}>
          <Link href="/Login">Login</Link>
        </button>
        <div className={styles.moreContent}>
          <Image
            src="/static/icons/more.svg"
            alt="search icon"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
