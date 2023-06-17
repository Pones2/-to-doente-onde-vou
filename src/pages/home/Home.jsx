import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.sectionTitle}>Unidades de Saúde de São Carlos</h1>
      </section>

      <section className={styles.section}>
        <h1 className={styles.sectionTitle}>Quem Procurar?</h1>

        <div className={styles.units}>
          <div className={styles.unit}>
            <div className={styles.unitTitle}>
              <h2>UBS</h2>
              <h3>Unidade Básica de Saúde</h3>
            </div>

            <p>
              Locais onde os usuários recebem vacinas, troca de curativos,
              injeções, atendimento médico para diagnóstico e/ou tratamento
              odontológico.
            </p>
          </div>

          <div className={styles.unit}>
            <div className={styles.unitTitle}>
              <h2>UPA</h2>
              <h3>Unidade de Pronto Atendimento</h3>
            </div>

            <p>
              Locais onde os usuários recebem vacinas, troca de curativos,
              injeções, atendimento médico para diagnóstico e/ou tratamento
              odontológico.
            </p>
          </div>

          <div className={styles.unit}>
            <div className={styles.unitTitle}>
              <h2>SAMU</h2>
              <h3>Unidade Básica de Saúde</h3>
            </div>

            <p>
              Locais onde os usuários recebem vacinas, troca de curativos,
              injeções, atendimento médico para diagnóstico e/ou tratamento
              odontológico.
            </p>
          </div>

          <div className={styles.unit}>
            <div className={styles.unitTitle}>
              <h2>HOSPITAL</h2>
            </div>

            <p>
              Em situações de emergência que necessitam de internação,
              cirurgias, acompanhamento cirúrgico, exames mais elaborados,
              maternidade, exames de imagem e casos mais complexos.
            </p>
          </div>

          <div className={styles.unit}>
            <div className={styles.unitTitle}>
              <h2>AMA</h2>
              <h3>Atendimento Médico Ambulatorial</h3>
            </div>

            <p>
              Suporta as demandas de saúde com média complexidade. Realiza
              também administração de medicamentos, suturas, drenagem de
              abscessos e RX.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h1 className={styles.sectionTitle}>Sobre o Projeto</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempora
          minus quibusdam quos obcaecati impedit, voluptates non placeat in quam
          officiis illum excepturi nemo inventore perferendis minima ullam
          quaerat maxime.
        </p>
      </section>
    </>
  );
};

export default Home;
