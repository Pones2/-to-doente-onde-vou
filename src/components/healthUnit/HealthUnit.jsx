import styles from "./HealthUnit.module.css";

const HealthUnit = ({ data, distance }) => {
  let horario = "";

  if (data.horarioDuracao == 24) {
    horario = "24 horas";
  } else {
    horario =
      data.horarioAbre.toString() +
      "hrs - " +
      (data.horarioAbre + data.horarioDuracao).toString() +
      "hrs";
  }

  return (
    <div className={styles.unit}>
      <div className={styles.imageContainer}></div>

      <div className={styles.infoContainer}>
        <h3 className={`${styles.name} ${distance && styles["distanceName"]}`}>
          {data.nome}
        </h3>

        {distance && (
          <span className={styles.distance}>{distance} km de distância</span>
        )}

        <ul className={styles.infoList}>
          <li>
            <i className={styles.addressIcon} />
            <p>{data.endereco}</p>
          </li>

          <li>
            <i className={styles.timeIcon} />
            <p>{horario}</p>
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
