import styles from './Contact.module.css';
import emailIcon from '../../assets/contact/emailIcon.png';
import githubIcon from '../../assets/contact/githubIcon.png';
import linkedinIcon from '../../assets/contact/linkedinIcon.png';


const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to contact me!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="email icon" />
          <a href="mailto:leticia.dimotta@gmail.com" target="_blank">leticia.dimotta@gmail.com</a></li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="linkedin icon" />
          <a href="https://www.linkedin.com/in/leticiadimotta/" target="_blank">https://www.linkedin.com/in/leticiadimotta/</a></li>
        <li className={styles.link}>
          <img src={githubIcon} alt="github icon" />
        <a href="https://github.com/Leti1789" target="_blank">https://github.com/Leti1789</a></li>
      </ul>
    </footer>
  )
}

export default Contact