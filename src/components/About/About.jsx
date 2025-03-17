import styles from './About.module.css';
import aboutImage from '../../assets/about/aboutImage.png';
import cursorIcon from '../../assets/about/cursorIcon.png';
import serverIcon from '../../assets/about/serverIcon.png';
import uiIcon from '../../assets/about/uiIcon.png';

const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage} src={aboutImage} alt="About Image" />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="cursor" />
            <div className={styles.aboutItemsText}>
              <h3>Frontend Developer</h3>
              <p>I am a frontend developer with experience in creating responsive and optimized websites.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="server" />
            <div className={styles.aboutItemsText}>
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and optimised back-end systems and APIs.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
            <div className={styles.aboutItemsText}>
              <h3>User Experience (UX)</h3>
              <p>I design pages always keeping in mind the user experience.</p>
            </div>
          </li>
        </ul>
      </div>

    </section>
  )
}

export default About