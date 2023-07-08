import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/button/Button";
import styles from "./AddressBar.module.css";

const AddressBar = () => {
  const [address, setAddress] = React.useState("");
  const navigate = useNavigate();

  function startQuiz(e) {
    e.preventDefault();

    if (!address) return;

    navigate("/quiz");
  }

  return (
    <form className={styles.bar} onSubmit={startQuiz}>
      <div className={styles.inputContainer}>
        <button className={styles.locationIcon} />
        <input
          className={styles.input}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
        />
      </div>

      <Button onClick={startQuiz} text={"INICIAR"} />
    </form>
  );
};

export default AddressBar;
