import styles from "./home.module.css"

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.heroTextContainer}>
                <div className={styles.iAm}>
                    <p>Jeg er <h2>Tim</h2></p>
                    <h2>Gudiksen</h2>
                </div>
                <p className={styles.subTitle}>Jeg studerer til webudvikler på Media College Denmark, og her finder du både noget om mig, og de projekter jeg har lavet i min skole- og fritid</p>
            </div>
        </div>
    )
}