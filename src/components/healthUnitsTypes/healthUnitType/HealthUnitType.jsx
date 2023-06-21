import styles from "./HealthUnitType.module.css";

const HealthUnitType = ({ title, subtitle, definition }) => {
  return (
    <div className={styles.unit}>
      <div className={styles.titleSubtitle}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
      </div>

      <p className={styles.definition}>{definition}</p>
    </div>
  );
};

export default HealthUnitType;
