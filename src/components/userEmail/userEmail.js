import Image from "next/image";
import styles from "./userEmail.module.scss";

const userEmail = ({
  loginPwdHander,
  showPassword,
  forgotPwdHandler,
  loginCodeHandler,
}) => {
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

      {showPassword ? (
        <div className={styles.pwdContainer}>
          <input type="text" placeholder="Password" />
          <div className={styles.eyesContainer}>
            <Image
              src="/static/icons/closeEye.svg"
              alt="Close Eye"
              width={18}
              height={18}
            />
          </div>
        </div>
      ) : (
        <div className={styles.enterCodeContainer}>
          <input type="text" placeholder="Enter 4-digit Code" />
          <div className={styles.enterCodeLabel}>
            <label>Send code</label>
          </div>
        </div>
      )}

      {/* login password */}

      {showPassword ? (
        <div className={styles.forgotContainer}>
          <label onClick={forgotPwdHandler}>Forgot password?</label>
          <div className={styles.linePwd}>
            <p></p>
          </div>
          <label className={styles.loginCodeLabel} onClick={loginCodeHandler}>
            Login with code
          </label>
        </div>
      ) : (
        <div className={styles.lginPwdContainer} onClick={loginPwdHander}>
          <label>Log in with password</label>
        </div>
      )}

      {/* login Btn */}

      <div className={styles.btnLoginContainer}>
        <label>Log in</label>
      </div>
    </div>
  );
};

export default userEmail;
