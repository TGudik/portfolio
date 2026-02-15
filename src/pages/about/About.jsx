import styles from "./about.module.css"
import portrait from "../../assets/Portrait_Placeholder.png"

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutGrid}>
              <img src={portrait} alt="portræt" />
              <div className={styles.aboutText}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde dolorem aliquam recusandae perferendis iusto nulla excepturi fuga modi facere. Odit ad libero illum doloribus deleniti a ab provident. Exercitationem veritatis cum iusto odit perspiciatis ea voluptatum quisquam fuga expedita!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde dolorem aliquam recusandae perferendis iusto nulla excepturi fuga modi facere. Odit ad libero illum doloribus deleniti a ab provident. Exercitationem veritatis cum iusto odit perspiciatis ea voluptatum quisquam fuga expedita!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde dolorem aliquam recusandae perferendis iusto nulla excepturi fuga modi facere. Odit ad libero illum doloribus deleniti a ab provident. Exercitationem veritatis cum iusto odit perspiciatis ea voluptatum quisquam fuga expedita!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde dolorem aliquam recusandae perferendis iusto nulla excepturi fuga modi facere. Odit ad libero illum doloribus deleniti a ab provident. Exercitationem veritatis cum iusto odit perspiciatis ea voluptatum quisquam fuga expedita!</p>
              </div>
            </div>
        </div> 
    )
}