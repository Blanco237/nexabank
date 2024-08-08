import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.body}>
      <img
        src="../../assets/illustration.png"
        className={styles.image}
        alt="Illustration"
      />
      <div className={styles.content}>
        <h1>Crystal Clear <br /> Business Banking</h1>
        <p>
          Open a checking account today and experience <br /> a solution tailored to
          your business needs.
        </p>
      </div>
      <button className={styles.learn}>Learn more</button>
    </section>
  );
};

export default Hero;
