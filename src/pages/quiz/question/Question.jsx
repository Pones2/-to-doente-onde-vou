import React from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../context/Context";
import Button from "../../../components/button/Button";
import Error from "../../../components/error/Error";
import styles from "./Question.module.css";

const Question = ({ data }) => {
  const { answers, setAnswers } = React.useContext(Context);
  const [current, setCurrent] = React.useState(0);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  function handleChange(question) {
    return ({ target }) => {
      if (target.checked) {
        setAnswers({
          ...answers,
          [question]: [...answers[question], target.value],
        });
      } else {
        setAnswers({
          ...answers,
          [question]: answers[question].filter((r) => r !== target.value),
        });
      }
    };
  }

  function validateQuestion(questionIdx) {
    const arrAnswers = answers[questionIdx];
    const { respostaUnica } = data[questionIdx];

    if (arrAnswers.length === 0) {
      setError("Selecione alguma opção.");
      return false;
    }

    if (respostaUnica && arrAnswers.length > 1) {
      setError("Selecione apenas uma opção.");
      return false;
    } else if (
      arrAnswers.length > 1 &&
      arrAnswers.includes("Nenhum dos anteriores")
    ) {
      setError("Alternativas inválidas.");
      return false;
    }

    setError("");
    return true;
  }

  function nextQuestion(e) {
    e.preventDefault();

    if (!validateQuestion(current)) {
      return;
    }

    if (current + 1 < data.length) {
      setCurrent(current + 1);
    }
  }

  function prevQuestion(e) {
    e.preventDefault();

    if (current > 0) {
      setCurrent(current - 1);
    }
  }

  function finishQuiz(e) {
    e.preventDefault();

    if (!validateQuestion(current)) return;

    let result = 0;
    for (let i = 0; i < data.length - 1; i++) {
      console.log(data[i].pesos[data[i].respostas.indexOf(answers[i][0])]);
      result += data[i].pesos[data[i].respostas.indexOf(answers[i][0])];
    }
    console.log(result);

    navigate("/resultado");
  }

  return (
    <form className={styles.questionContainer}>
      <div className={styles.content}>
        <span className={styles.counter}>
          {current + 1} / {data.length}
        </span>

        <p className={styles.question}>{data[current].pergunta}</p>

        <ul className={styles.options}>
          {data[current].respostas.map((r) => {
            return (
              <li key={`${data[current].numero}-${r}`}>
                <div
                  className={`${styles.option} ${
                    answers[current].includes(r) && styles["active"]
                  }`}
                >
                  <input
                    type="checkbox"
                    id={`${data[current].numero}-${r}`}
                    value={r}
                    onChange={handleChange(current)}
                    checked={answers[current].includes(r)}
                  />
                  <div className={styles.checkBox}>
                    <i className={styles.checkedIcon} />
                  </div>
                  <label
                    className={styles.label}
                    htmlFor={`${data[current].numero}-${r}`}
                  >
                    {r}
                  </label>
                </div>
              </li>
            );
          })}
        </ul>

        {error && (
          <div className={styles.errorContainer}>
            <Error msg={error} />
          </div>
        )}
      </div>

      <div className={styles.controls}>
        <Button text="ANTERIOR" style="secondary" onClick={prevQuestion} />

        {current < data.length - 1 ? (
          <Button text="PRÓXIMA" onClick={nextQuestion} />
        ) : (
          <Button onClick={finishQuiz} text="FINALIZAR" />
        )}
      </div>
    </form>
  );
};

export default Question;
