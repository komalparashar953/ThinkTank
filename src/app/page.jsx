import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Inventive Ideas Bureau</h1>
        <p className={styles.desc}>
          Where groundbreaking concepts meet creative solutions, 
          transforming ideas into reality.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.heroImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero-unscreen.gif" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;
