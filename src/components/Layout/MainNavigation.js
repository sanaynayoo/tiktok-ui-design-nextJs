import Link from "next/link";
import styles from "./mainnav.module.css";

const MainNavigation = () => {
  return (
    <div className={styles.container}>
      <Link href="/">TikTok</Link>

      <main>
        <ul>
          <li>
            <Link href="/Upload">Upload</Link>
          </li>

          <li>
            <Link href="/Login">Login</Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default MainNavigation;
