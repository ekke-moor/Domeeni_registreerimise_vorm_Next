import type { NextPage } from "next";
import { useCallback } from "react";
import RootFrame from "../components/root-frame";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const ValiDomeen: NextPage = () => {
  const router = useRouter();

  const onComponent1Click = useCallback(() => {
    router.push("/edastatud");
  }, [router]);

  return (
    <div className={styles.valiDomeen}>
      <RootFrame />
      <div className={styles.componentFrame}>
        <textarea
          className={styles.component1}
          autoFocus={true}
          onClick={onComponent1Click}
        />
      </div>
      <div className={styles.valiDomeenChild} />
    </div>
  );
};

export default ValiDomeen;
