import React from "react";
//import { Context } from "../../context/Context";
import HealthUnit from "../../components/healthUnit/HealthUnit";
import styles from "./Results.module.css";

const Results = () => {
	//const { answers } = React.useContext(Context);
	//const { address } = React.useContext(Context);
	const [result, setResult] = React.useState(null);

	React.useEffect(() => {
		// calcular

		async function fetchData() {
			const response = await fetch(
				"http://localhost:5173/data/unidadesSaude.json"
			);
			const json = await response.json();
			setResult(json[3]);
		}
		fetchData();
	});

	return result ? (
		<div className={styles.resultsContainer}>
			<h1 className={styles.title}>ONDE VOU?</h1>
			<HealthUnit data={result} distance={1.5} />
		</div>
	) : (
		<p>carregando...</p>
	);
};

export default Results;
