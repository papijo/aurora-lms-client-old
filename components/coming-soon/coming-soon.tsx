import React from "react";
import styles from "./page.module.css";

const ComingSoon = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}></h1>
      <div className={styles.gearbox}>
        <div className={styles.overlay}></div>
        <div className={styles.gear + " " + styles.one}>
          <div className={styles["gear-inner"]}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </div>
        <div className={styles.gear + " " + styles.two}>
          <div className={styles["gear-inner"]}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </div>
        <div className={styles.gear + " " + styles.three}>
          <div className={styles["gear-inner"]}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </div>
        <div className={styles.gear + " " + styles.four + " " + styles.large}>
          <div className={styles["gear-inner"]}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
