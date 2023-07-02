import React from "react";
import Question from "./question/Question";

const Quiz = () => {
	const [questions, setQuestions] = React.useState(null);

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

	return questions && <Question data={questions} />;
};

export default Quiz;
