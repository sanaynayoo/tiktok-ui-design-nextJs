import Image from "next/image";
import styles from "./userEmail.module.scss";

const userEmail = () => {
  return (
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

      <div className={styles.lginPwdContainer}>
        <label>Log in with password</label>
      </div>

      {/* login Btn */}

      <div className={styles.btnLoginContainer}>
        <label>Log in</label>
      </div>
    </div>
  );
};

export default userEmail;
