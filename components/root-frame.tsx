import type { NextPage } from "next";
import Frame from "./frame";
import styles from "./root-frame.module.css";

const RootFrame: NextPage = () => {
  return (
    <div className={styles.rootFrame}>
      <header className={styles.rootFrameInner}>
        <div className={styles.frameParent}>
          <Frame
            arrow1="/arrow-1@2x.png"
            arrow2="/arrow-2.svg"
            frameDivBackgroundColor="#beffb4"
            propPadding="0px 0px var(--padding-9xs)"
            propPadding1="var(--padding-6xs) var(--padding-mid) var(--padding-mini)"
            propBackgroundColor="#b3b8b2"
          />
          <div className={styles.container}>
            <div className={styles.frame}>
              <div className={styles.valiDomeenWrapper}>
                <b className={styles.valiDomeen}>Vali domeen</b>
              </div>
              <div className={styles.sisestaAndmed}>Sisesta andmed</div>
              <div className={styles.tellimusEdastatud}>Tellimus edastatud</div>
            </div>
          </div>
        </div>
      </header>
      <b className={styles.valiDomeen1}>Vali domeen</b>
      <div className={styles.uRLTextParent}>
        <div className={styles.uRLText}>
          <div className={styles.http}>http://</div>
        </div>
        <div className={styles.domainFrame}>
          <input className={styles.labelText} type="text" />
          <select className={styles.domainFrameChild} />
        </div>
      </div>
    </div>
  );
};

export default RootFrame;
