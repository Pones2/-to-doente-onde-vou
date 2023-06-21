import styles from "../../styles/Sections.module.css";

const About = () => {
  return (
    <section className={`${styles.section} ${styles.about}`}>
      <div className={`container`}>
        <h1 className={styles.sectionTitle}>Sobre o Projeto</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempora
          minus quibusdam quos obcaecati impedit, voluptates non placeat in quam
          officiis illum excepturi nemo inventore perferendis minima ullam
          quaerat maxime.
        </p>
      </div>
    </section>
  );
};

export default About;
