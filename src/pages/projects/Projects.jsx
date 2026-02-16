import styles from "./projects.module.css"
import ringhjoernetSnapshot from "../../assets/ringhjoernet-snapshot.png"
import glampingSnapshot from "../../assets/glamping-snapshot.png"
import smukSnapshot from "../../assets/smuk-nu-snapshot.png"
import ProjectCard from "../../components/projectCard/ProjectCard";

export default function Projects() {

    return (
      <div className={styles.projectsContainer}>
        <ProjectCard
          img={ringhjoernetSnapshot}
          projectTitle="Ringhjørnet"
          projectSubTitle="Webshop projekt med supabase, zustand, stripe og resend"
          projectDescription="Projektet er bygget i react, og er en fuldt funktionel webshop. Til backend bruges supabase, hvor data gemmes i de forskellige datatables: products, categories, profiles, orders og order_items. Med products og categories henter jeg de tilsvarende data, og udskriver dem på siden. Hvis brugeren er logget ind som en admin kan man tilgå ruterne /admin/products, hvor man kan oprette produkter, og /admin/orders, hvor man kan se en oversigt over ordrerne der har været på siden. Produkter kan gemmes ned i en cart, til det bruges zustand, som også gør at man globalt kan tilgå produkterne i kurven. Betaling foregår med stripe, leveringsoplysninger bliver gemt i orders datatabel, og derefter viderestilles til stripe checkout, som håndterer betalingen, gemmer ordreren i backend, sender en bekræftelsesmail og sender brugeren tilbage til en success-side. Login-oplysninger for at se adminsider er E-mail: testadmin@test.dk Password: admin123.
          "
          projectLink="https://www.ringhjoernet.dk"
          githubLink="https://github.com/TGudik/ringhjoernet"
        />
        <ProjectCard
          img={glampingSnapshot}
          projectTitle="Gittes Glamping"
          projectSubTitle="Skoleprojekt om side med glamping-ophold og aktiviteter"
          projectDescription="Projektet er bygget i react, og henter data fra en api, hvorefter den udskriver dataen på siden. Derudover kan aktiviteterne gemmes ned i et array til 'min liste'-siden, hvor kun de likede aktiviteter udskrives. Dette gemmes også i localstorage, så de likede aktiviteter stadig er der når man besøger siden igen."
          projectLink="https://gudiksentim.github.io/gittes-glamping-tim/"
          githubLink="https://github.com/GudiksenTim/gittes-glamping-tim"
        />
        <ProjectCard
          img={smukSnapshot}
          projectTitle="Smuk Nu"
          projectSubTitle="Skoleprojekt om webshop med skønhedsprodukter"
          projectDescription="Projektet er bygget i react. Siden indeholder data hentet fra et api. Produkterne kan gemmes i kurven, som i navbaren opdatere antal varer i kurven. Forsiden indeholder udvalgte produkter, produkt-siden udskriver alle produkter fra api, QnA siden indeholder spørgsmål med svar der udfoldes når de klikkes og medlemssiden indeholder en form"
          projectLink="https://gudiksentim.github.io/tim-smuk-nu/"
          githubLink="https://github.com/GudiksenTim/tim-smuk-nu"
        />
      </div>
    );
}