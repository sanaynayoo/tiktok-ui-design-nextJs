import Image from "next/image";

// Components
import styles from "./useQr.module.scss";

const useQr = () => {
  return (
    <div className={styles.authQrContainer}>
      <Image
        src="/static/images/qrCode.png"
        alt="qr code"
        width={150}
        height={150}
      />

      <div className={styles.authQrText}>
        <p>1. Open the TikTok app on your mobile device and tap Discover</p>

        <p>
          2. Tap{" "}
          <Image
            src="/static/icons/barCode.svg"
            alt="bar code"
            width={20}
            height={20}
          />
          and scan QR code
        </p>

        <p>3. Confirm your login on your mobile device</p>

        <div className={styles.authQuestion}>
          <Image
            src="/static/icons/question.svg"
            alt="question icon"
            width={15}
            height={15}
          />
          <p>Check the Instruction</p>
        </div>
      </div>
    </div>
  );
};

export default useQr;
