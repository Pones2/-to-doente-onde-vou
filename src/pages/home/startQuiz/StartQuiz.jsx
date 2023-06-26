import AddressBar from "./addressBar/AddressBar";
import styles from "../Home.module.css";

const StartQuiz = () => {
	return (
		<section className={`${styles.start} ${styles.section}`}>
			<div className={`container`}>
				<div className={styles.startContent}>
					<h1>Tô Doente, Onde Vou?</h1>
					<p>
						Preencha nosso questionário de sintomas e te indicaremos a unidade
						de saúde mais adequada para atendê-lo.
					</p>

					<AddressBar />
				</div>
			</div>
		</section>
	);
};

export default StartQuiz;
