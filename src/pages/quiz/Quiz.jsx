import React from "react";
import Button from "../../components/button/Button";
import Options from "./options/Options";
import styles from "./Quiz.module.css";

const Quiz = () => {
	const [questions, setQuestions] = React.useState(null);
	const [current, setCurrent] = React.useState(0);

	React.useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				"http://localhost:5173/data/quizSintomas.json"
			);
			const data = await response.json();

			setQuestions(data);
		}
		fetchData();
	}, []);

	function prevQuestion() {
		if (current > 0) {
			setCurrent(current - 1);
		}
	}

	function nextQuestion() {
		if (current + 1 < questions.length) {
			setCurrent(current + 1);
		}
	}

	return (
		questions && (
			<div className={styles.questionContainer}>
				<div className={styles.content}>
					<span className={styles.counter}>
						PERGUNTA {current + 1} / {questions.length}
					</span>

					<p className={styles.question}>{questions[current].pergunta}</p>

					<Options options={questions[current].respostas} />
				</div>

				<div className={styles.controls}>
					<Button
						text={"ANTERIOR"}
						style={"secondary"}
						onClick={prevQuestion}
					/>

					<Button text={"PRÓXIMA"} onClick={nextQuestion} />
				</div>
			</div>
		)
	);
};

export default Quiz;
