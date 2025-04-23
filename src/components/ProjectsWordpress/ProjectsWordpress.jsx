import styles from './ProjectsWordpress.module.css';
import {projectsWordpress} from '../../data/projectsWordpress';
import ProjectCardWordpress from './ProjectCardWordpress';

const ProjectsWordpress = () => {
  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>WordPress projects</h2>
      <div className={styles.projects}>{projectsWordpress.map((project, id) => {
        return (
          <ProjectCardWordpress key={id} project={project}/>
      )
      })}
      </div>
    </section>
  )
}

export default ProjectsWordpress