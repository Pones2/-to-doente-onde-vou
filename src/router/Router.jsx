import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Quiz from "../pages/quiz/Quiz";
import Results from "../pages/results/Results";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/quiz" element={<Quiz />} />
			<Route path="/resultado" element={<Results />} />
			<Route path="*" element={null} />
		</Routes>
	);
};

export default Router;
