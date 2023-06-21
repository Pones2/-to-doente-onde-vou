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
              "Locais onde os usuários recebem vacinas, troca de curativos, injeções, atendimento médico para diagnóstico/tratamento e atendimento odontológico."
            }
          />

          <HealthUnitType
            title={"UPA"}
            subtitle={"Unidade de Pronto Atendimento"}
            definition={
              "Funcionam 24 horas por dia, 7 dias por semana e podem resolver grande parte das urgências e emergências, como pressão e febre alta, fraturas, cortes, infarto e derrame."
            }
          />

          <HealthUnitType
            title={"SAMU"}
            subtitle={"Unidade Básica de Saúde"}
            definition={
              "Central de regulação que conta com profissionais de saúde e médicos treinados para dar orientações de primeiros socorros por telefone. Disque 192."
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
