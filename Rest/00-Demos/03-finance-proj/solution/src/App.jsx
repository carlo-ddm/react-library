import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1500,
    annualInvestment: 20,
    expectedReturn: 15,
    duration: 5,
  });

  const inputIsValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    const value = newValue.target.value;
    setUserInput((prevUserInput) => {
      const newState = {
        ...prevUserInput,
        [inputIdentifier]: +value,
      };
      return newState;
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {inputIsValid && <Results input={userInput}/>}
      {!inputIsValid && <p className="center">Please enter a duration grater than zero!</p>}
      
    </>
  );
}

export default App;
