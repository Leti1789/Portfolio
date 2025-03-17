import HeroImage from '../../assets/hero/heroImage.png';
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Leticia</h1>
        <p className={styles.description}>I am a full-stack developer.<br/>
          Specialized in Front-end. Please get in touch if you would like more information!</p>
      
        <a className={styles.contactBtn} href="mailto:leticia.dimotta@gmail.com">
          Contact me
        </a>
      </div>
      <img className={styles.heroImg} src={HeroImage} alt="hero image" />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

    </section>
  )
}

export default Hero