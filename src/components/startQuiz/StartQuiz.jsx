import styles from "../../styles/Sections.module.css";
import AddressBar from "../addressBar/AddressBar";

const StartQuiz = () => {
  return (
    <section className={`${styles.section} ${styles.start}`}>
      <div className={`container ${styles.startContent}`}>
        <h1>Tô Doente, Onde Vou?</h1>
        <p>
          Preencha nosso questionário de sintomas e te indicaremos a unidade de
          saúde mais adequada para atendê-lo.
        </p>

        <AddressBar />
      </div>
    </section>
  );
};

export default StartQuiz;
