import Button from "../button/Button";
import styles from "./AddressBar.module.css";

const AddressBar = () => {
  return (
    <div className={styles.bar}>
      <form className={styles.inputContainer}>
        <button className={styles.locationIcon} />
        <input className={styles.input} type="text" />
      </form>

      <Button text={"INICIAR"} />
    </div>
  );
};

export default AddressBar;
