import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame.module.css";

type FrameType = {
  arrow1?: string;
  arrow2?: string;

  /** Style props */
  frameDivBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const Frame: NextPage<FrameType> = ({
  arrow1,
  arrow2,
  frameDivBackgroundColor,
  propPadding,
  propPadding1,
  propBackgroundColor,
}) => {
  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor,
    };
  }, [frameDivBackgroundColor]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const ellipseDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={styles.frame}>
      <div className={styles.frameWrapper}>
        <div className={styles.frame1}>
          <div className={styles.frameChild} />
          <div className={styles.frame2}>
            <div className={styles.frameParent}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameItem} style={ellipseDivStyle} />
                <div className={styles.div}>1</div>
              </div>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.frameInner}
                  loading="eager"
                  alt=""
                  src={arrow1}
                />
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.frameGroup}>
                  <div className={styles.inputFieldParent}>
                    <div className={styles.inputField} />
                    <div className={styles.div1}>2</div>
                  </div>
                  <img
                    className={styles.arrowIcon}
                    loading="eager"
                    alt=""
                    src={arrow2}
                  />
                </div>
              </div>
              <div className={styles.frameDiv} style={frameDivStyle}>
                <div className={styles.ellipseGroup} style={frameDiv1Style}>
                  <div className={styles.ellipseDiv} style={ellipseDiv1Style} />
                  <div className={styles.div2}>3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
