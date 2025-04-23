import styles from './ProjectCardWordpress.module.css';


const ProjectCardWordpress = ({project: {title, image, description, skills, demo, source }}) => {
  return (
      <div className={styles.container}>
          <img className={styles.image} src={image} alt={title} />
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <ul className={styles.skills}>{skills.map((skill, id) => {
            return <li className={styles.skill} key={id}>{skill}</li>
          })}
          </ul>
          <div className={styles.links}>
            <a className={styles.link} href={demo} target="_blank">Demo</a>
          </div>
        </div>
  )
}

export default ProjectCardWordpress