import HealthUnit from "../../../components/healthUnit/HealthUnit";
import styles from "../Home.module.css";

const HealthUnits = ({ data }) => {
	return (
		<section className={styles.section}>
			<div className="container">
				<h1 className={styles.sectionTitle}>Unidades de Saúde de São Carlos</h1>

				<ul className={styles.units}>
					{data.slice(0, 3).map((unidade) => {
						return (
							<li key={unidade.nome}>
								<HealthUnit data={unidade} />
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default HealthUnits;
