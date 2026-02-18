import { useState } from "react"
import styles from "./projectCard.module.css"
import { Link } from "react-router-dom";

export default function ProjectCard({ img, projectTitle, projectSubTitle, projectDescription, projectLink, githubLink}) {
    const [show, setShow] = useState(false)

    return (
      <div className={styles.projectCard}>
        <div className={styles.snapNtext}>
          <img
            className={styles.snapshot}
            src={img}
            alt="projektFoto"
          />
          <div className={styles.projectTexts}>
            <h2 className={styles.projectTitle}>{projectTitle}</h2>
            <h4 className={styles.projectSubTitle}>
              {projectSubTitle}
            </h4>
            {show && (
              <p className={styles.projectDescription}>
                {projectDescription}
              </p>
            )}
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Link target="_blank" to={projectLink}>
            <button className={styles.seeProjectBtn}>Se projektet</button>
          </Link>
          <button className={styles.showMoreBtn} onClick={() => setShow(!show)}>
            {show ? "Læs mindre" : "Læs mere"}
          </button>
          {show && <Link target="_blank" to={githubLink}>
            <button className={styles.seeProjectBtn}>Se Github</button>
          </Link>}
        </div>
      </div>
    );

}