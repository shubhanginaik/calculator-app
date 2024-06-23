import styles from "./App.module.css";
import ButtonsContainer from "./components/buttonsContainer/ButtonContainer";
import Display from "./components/display/Display";

function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonsContainer />
    </div>
  );
}

export default App;
