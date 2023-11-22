import Header from "./components/Header/Header";
import Controller from "./components/Controller/Controller";
import ControlsGroup from "./components/Controller/ControlsGroup/ControlsGroup";
import InvestmentSummary from "./components/InvestmentSummary/InvestmentSummary";
import { _INPUT_LABELS } from "./util/labels";
import { _SUMMARY_LABELS } from "./util/labels";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [inputs, setInputs] = useState({});

  function valueHandler(inputResult) {
    const key = inputResult.control;
    const value = inputResult.value;

    setInputs((prevInputs) => {
      const updatedInputs = { ...prevInputs, [key]: value };
      const desiredOrder = [
        "Initial Investment",
        "Annual Investment",
        "Expected Return",
        "Duration",
      ];
      const orderedInputs = {};
      for (const orderKey of desiredOrder) {
        if (updatedInputs[orderKey] !== undefined) {
          orderedInputs[orderKey] = updatedInputs[orderKey];
        }
      }
      return orderedInputs;
    });
  }

  function calculateResults() {
    if (Object.keys(inputs).length === 4 && "Duration" in inputs) {
      // Assicurati che i valori siano convertiti correttamente in numeri
      const inputValues = {
        initialInvestment: Number(inputs["Initial Investment"]),
        annualInvestment: Number(inputs["Annual Investment"]),
        expectedReturn: Number(inputs["Expected Return"]),
        duration: Number(inputs["Duration"]),
      };

      return calculateInvestmentResults(inputValues);
    }
    return [];
  }

  const results = calculateResults();

  return (
    <>
      <Header />

      <Controller id="user-input">
        {_INPUT_LABELS.map((group, index) => (
          <ControlsGroup
            key={index}
            controls={[...group]}
            className="input-group"
            changeValue={valueHandler}
          />
        ))}
      </Controller>
      <InvestmentSummary summary={_SUMMARY_LABELS} inputResults={results ? results : []} />
    </>
  );
}

export default App;
