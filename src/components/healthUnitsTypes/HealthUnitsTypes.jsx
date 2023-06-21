import styles from "../../styles/Sections.module.css";
import HealthUnitType from "./healthUnitType/HealthUnitType";

const HealthUnitsTypes = () => {
  return (
    <section className={`${styles.section} ${styles.healthUnitsTypes}`}>
      <div className={"container"}>
        <h1 className={styles.sectionTitle}>Quem Procurar?</h1>

        <div className={styles.units}>
          <HealthUnitType
            title={"UBS"}
            subtitle={"Unidade Básica de Saúde"}
            definition={
              "Locais onde os usuários recebem vacinas, troca de curativos, injeções, atendimento médico para diagnóstico e/ou tratamento odontológico."
            }
          />

          <HealthUnitType
            title={"UPA"}
            subtitle={"Unidade de Pronto Atendimento"}
            definition={
              "Locais onde os usuários recebem vacinas, troca de curativos, injeções, atendimento médico para diagnóstico e/ou tratamento odontológico."
            }
          />

          <HealthUnitType
            title={"SAMU"}
            subtitle={"Unidade Básica de Saúde"}
            definition={
              "Locais onde os usuários recebem vacinas, troca de curativos, injeções, atendimento médico para diagnóstico e/ou tratamento odontológico."
            }
          />

          <HealthUnitType
            title={"HOSPITAL"}
            subtitle={""}
            definition={
              "Em situações de emergência que necessitam de internação, cirurgias, acompanhamento cirúrgico, exames mais elaborados, maternidade, exames de imagem e casos mais complexos."
            }
          />

          <HealthUnitType
            title={"AMA"}
            subtitle={"Atendimento Médico Ambulatorial"}
            definition={
              "Suporta as demandas de saúde com média complexidade. Realiza também administração de medicamentos, suturas, drenagem de abscessos e RX."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default HealthUnitsTypes;
