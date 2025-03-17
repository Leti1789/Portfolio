import styles from './Experience.module.css';
import { imgs } from '../../data/skills';
import { history } from '../../data/history';

const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {imgs.map((skill, id) => {
            return(<div className={styles.skill} key={id}>
              <div className={styles.skillImageConteiner}>
                <img src={skill.img} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>)
          })
          }</div>
        <ul className={styles.history}>{history.map((historyItem, id) => {
          return <li className={styles.historyItem} key={id}>
            <img src={historyItem.image} alt={`${historyItem.organization} Logo`} />
            <div className={styles.historyItemDetails}>
              <h3>{`${historyItem.role} , ${historyItem.organization}`} </h3>
              <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
              <ul>{historyItem.experiences.map((experience, id) => {
                return <li key={id}>{experience }</li>
              }) }</ul>
            
            </div>
          </li>
        })}</ul>
      </div>
    </section>
  )
}

export default Experience