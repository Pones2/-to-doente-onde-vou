import React from "react";
import About from "./about/About";
import HealthUnits from "./healthUnits/HealthUnits";
import HealthUnitsTypes from "./healthUnitsTypes/HealthUnitsTypes";
import StartQuiz from "./startQuiz/StartQuiz";

const Home = () => {
  const [unidades, setUnidades] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:5173/data/unidadesSaude.json"
      );
      const data = await response.json();

      setUnidades(data);
    }
    fetchData();
  }, []);

  return (
    unidades && (
      <>
        <StartQuiz />
        <HealthUnits data={unidades} />
        <HealthUnitsTypes />
        <About />
      </>
    )
  );
};

export default Home;
