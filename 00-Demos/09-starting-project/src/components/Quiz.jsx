// Mostra all'utente la domanda attualmente attiva.
// Quando l'utente risponde a una domanda, il componente registra le risposte (una serie di risposte preconfigurate)
// Quando l'utente risponde a una domanda, il componente passa alla domanda successvia.

import { useState } from "react";
import QUESTIONS from "../questions";
import quizCompletImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
import { useCallback } from "react";

export default function Quiz() {
  // console.log(question);
  // Questo stato registra le risposte che l'utente ha selezionato durante il quiz.
  // Da qui, posso ricavare l'indice della domanda attiva osservando il numero di risposte memorizzate.
  // Se nell'array ho due rispsote memorizzate, allora la terza domanda sarà quella presentatsa all'utente, cioè la domanda con indice 2 (perché gli indici di un array partono da 0)
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = QUESTIONS.length === userAnswers.length;


  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevState) => {
      return [...prevState, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompletImg} alt="Trophy Icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }
  // La logica di mescolamento delle domande fallirebbe se fosse spostata sopra la produzione del componente che creo con l'if perché non verrebbe trovata più alcuna domanda.
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            return (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)}>
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
