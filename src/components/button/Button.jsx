import styles from "./Button.module.css";

const Button = ({ text, type, style, onClick }) => {
	return (
		<button className={`${styles.button} ${style && styles[style]}`} type={type} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
