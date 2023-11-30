// Mostra all'utente la domanda attualmente attiva.
// Quando l'utente risponde a una domanda, il componente registra le risposte (una serie di risposte preconfigurate)
// Quando l'utente risponde a una domanda, il componente passa alla domanda successvia.

import { useState } from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
  // console.log(question);
  // Questo stato registra le risposte che l'utente ha selezionato durante il quiz.
  // Da qui, posso ricavare l'indice della domanda attiva osservando il numero di risposte memorizzate.
  // Se nell'array ho due rispsote memorizzate, allora la terza domanda sarà quella presentatsa all'utente, cioè la domanda con indice 2 (perché gli indici di un array partono da 0)
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  console.log(userAnswers);

  // QUESTIONS.LENGTH = 6

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevState) => {
      const newState = [...prevState, selectedAnswer];
      return newState;
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <p>{QUESTIONS[activeQuestionIndex].text}</p>

        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => {
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>;
          })}
        </ul>
      </div>
    </div>
  );
}
