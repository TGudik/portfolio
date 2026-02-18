import styles from "./about.module.css"
import portrait from "../../assets/Portrait_Placeholder.png"

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutGrid}>
              <img src={portrait} alt="portræt" />
              <div className={styles.aboutText}>
                <p>Jeg hedder Tim Gudiksen, jeg går på Medieskolerne i Viborg, hvor jeg læser til webudvikler. Jeg startede på uddannelsen i Januar 2025, og der havde jeg ikke nogen erfaring med kodning og webudvikling. Siden da har jeg lært HTML, CSS, JS og React, måden jeg har lært det har været gennem en blanding af tavleundervisning, gruppearbejde, skoleafleveringer og selvstændige projekter <br /> <br />
                Skolen underviser i både frontend og backend arbejde. I mit selvstændige projekt "Ringhjørnet", bygger jeg en webshop i React som kobler til flere backendtjenester for at opfylde funktionaliteterne. <br /> <br />
                
                
                </p>
                
              </div>
            </div>
        </div> 
    )
}