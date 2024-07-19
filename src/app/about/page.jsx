import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};


const AboutPage = () => {

  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
        Where every thought sparks a revolution and every idea has potential.
        </h1>
        <p className={styles.desc}>
          At the Inventive Ideas Bureau, 
          we tap into the limitless potential of creativity to fuel innovation. 
          By leveraging unique and imaginative thinking, we convert abstract ideas and visions into tangible, real-world solutions.
          We pride ourselves on our ability to turn dreams into reality, making a significant impact through inventive solutions.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 Yr+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>24 K+</h1>
            <p>People reached</p>
          </div>
          <div className={styles.box}>
            <h1>5 K+</h1>
            <p>Services provided</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about-unscreen.jpg"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
