import React from "react";
import styles from "./Options.module.css";

const Options = ({ options }) => {
	const [active, setActive] = React.useState("");
	const activeRef = React.useRef(null);

	function handleClick(option) {
		return (e) => {
			setActive(option);
			activeRef.current?.classList.remove(styles["active"]);
			activeRef.current = e.currentTarget;
			activeRef.current.classList.add(styles["active"]);
		};
	}

	return (
		<div className={styles.options}>
			{options.map((option) => {
				return (
					<div
						key={option}
						className={styles.option}
						onClick={handleClick(option)}
					>
						<span className={styles.checked}>
							{active === option && <i className={styles.checkIcon} />}
						</span>
						<p className={styles.optionText}>{option}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Options;
