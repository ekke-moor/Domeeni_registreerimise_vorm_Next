import type { NextPage } from "next";
import Frame from "../components/frame";
import styles from "./edastatud.module.css";

const Edastatud: NextPage = () => {
  return (
    <div className={styles.edastatud}>
      <header className={styles.firstFrame}>
        <Frame
          arrow1="/arrow-1@2x.png"
          arrow2="/arrow-2.svg"
          frameDivBackgroundColor="#b3b8b2"
          propPadding="0px 1px var(--padding-9xs) 0px"
          propPadding1="var(--padding-6xs) 18px var(--padding-mini)"
          propBackgroundColor="#beffb4"
        />
        <div className={styles.textInput}>
          <div className={styles.domainLabel}>
            <div className={styles.formField}>
              <div className={styles.submitButton}>
                <div className={styles.validationLabel}>
                  <div className={styles.valiDomeen}>Vali domeen</div>
                </div>
                <div className={styles.sisestaAndmed}>Sisesta andmed</div>
                <b className={styles.tellimusEdastatud}>Tellimus edastatud</b>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.submissionStatus}>
        <b className={styles.tellimusEdastatud1}>Tellimus edastatud!</b>
      </div>
      <footer className={styles.edastatudChild} />
    </div>
  );
};

export default Edastatud;
