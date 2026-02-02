import styles from "./navigation.module.css"
import { Link } from "react-router-dom"

export default function Navigation() {
    return (
        <div className={styles.navContainer}>
            <ul className={styles.navList}>
                <Link to="/"><li className={styles.navItem}>Hjem</li></Link>
                <Link to="/projects"><li className={styles.navItem}>Projekter</li></Link>
                <Link to="/about"><li className={styles.navItem}>Om mig</li></Link>
            </ul>
        </div>
    )
}