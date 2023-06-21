import styles from "./HealthUnit.module.css";

const HealthUnit = ({ data }) => {
  return (
    <div className={styles.unit}>
      <div className={styles.imageContainer}></div>

      <div className={styles.infoContainer}>
        <h3 className={styles.name}>{data.nome}</h3>
        <ul className={styles.infoList}>
          <li>
            <i className={styles.addressIcon} />
            <p>{data.endereco}</p>
          </li>

          <li>
            <i className={styles.timeIcon} />
            <p>teste - teste</p>
          </li>

          <li>
            <i className={styles.phoneIcon} />
            <p>{data.telefone}</p>
          </li>

          <li>
            <i className={styles.mapsIcon} />
            <a className={styles.link}>abrir com o Google Maps</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HealthUnit;
