// Mostra all'utente la domanda attualmente attiva.
// Quando l'utente risponde a una domanda, il componente registra le risposte (una serie di risposte preconfigurate)
// Quando l'utente risponde a una domanda, il componente passa alla domanda successvia.

import { useState } from "react";
import QUESTIONS from "../questions";
import quizCompletImg from "../assets/quiz-complete.png";
import { useCallback } from "react";
import Question from "./Question";

export default function Quiz() {
  // console.log(question);
  // Questo stato registra le risposte che l'utente ha selezionato durante il quiz.
  // Da qui, posso ricavare l'indice della domanda attiva osservando il numero di risposte memorizzate.
  // Se nell'array ho due rispsote memorizzate, allora la terza domanda sarà quella presentatsa all'utente, cioè la domanda con indice 2 (perché gli indici di un array partono da 0)
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = QUESTIONS.length === userAnswers.length;

  // il metodo, essendo avvolto da useCallback, deve essere ricreato ogni volta che viene modificato lo stato (derivato) activeQuestionIndex. Per farlo, deve essere inserito lo stato tra le dipendenze di useCallback
  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswers((prevState) => {
        return [...prevState, selectedAnswer];
      });
    },
    []
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompletImg} alt="Trophy Icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
