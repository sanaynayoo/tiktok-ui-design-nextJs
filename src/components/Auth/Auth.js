import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

// Components
import styles from "./auth.module.scss";

const Auth = ({ authItemHandler, showItem, data }) => {
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
    <div>
      <h3>Welcome QR Code</h3>
    </div>
  );
};

export default Auth;
