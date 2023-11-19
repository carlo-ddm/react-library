import Header from "./components/Header/Header";
import Controller from "./components/Controller/Controller";
import ControlsGroup from "./components/Controller/ControlsGroup/ControlsGroup";
import InvestmentSummary from "./components/InvestmentSummary/InvestmentSummary";
import { _INPUT_LABELS } from "./util/labels";
import { _SUMMARY_LABELS } from "./util/labels";
import { useState } from "react";

function App() {
  const [inputs, setInputs] = useState();

  function valueHandler(inputResult) {
    const key = inputResult.control;
    const value = inputResult.value;
    setInputs((prevObjsResult) => {
      return { ...prevObjsResult, key: value };
    });
    console.log(inputs);
  }

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
      <InvestmentSummary summary={_SUMMARY_LABELS} />
    </>
  );
}

export default App;
