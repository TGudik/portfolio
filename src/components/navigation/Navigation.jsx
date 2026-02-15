import styles from "./navigation.module.css"
import { Link, useLocation } from "react-router-dom"

export default function Navigation() {
    const page = useLocation()
    console.log(page)
    return (
      <div className={styles.navContainer}>
        <ul className={styles.navList}>
          <Link to="/">
            <li
              className={`${styles.navItem} ${page.pathname === "/" && styles.active}`}
            >
              Hjem
            </li>
          </Link>
          <Link to="/projects">
            <li
              className={`${styles.navItem} ${page.pathname === "/projects" && styles.active}`}
            >
              Projekter
            </li>
          </Link>
          <Link to="/about">
            <li
              className={`${styles.navItem} ${page.pathname === "/about" && styles.active}`}
            >
              Om mig
            </li>
          </Link>
        </ul>
      </div>
    );
}