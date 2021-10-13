import Link from "next/link";
import styles from "./mainnav.module.css";
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

      <div className={styles.searchContainer}>
        <input placeholder="Search accounts and videos" />
        <button>
          <Image
            src="/static/icons/search.svg"
            alt="search icon"
            width={20}
            height={20}
          />
        </button>
      </div>

      <div className={styles.uploadContainer}>
        <Link href="/Upload">
          <a>Upload</a>
        </Link>
        <button className={styles.loginContent}>
          <Link href="/Login">
            <a>Login</a>
          </Link>
        </button>
        {/* <span> */}
        <Image
          src="/static/icons/more.svg"
          alt="search icon"
          width={20}
          height={20}
        />
        {/* </span> */}
      </div>
    </div>
  );
};

export default MainNavigation;
