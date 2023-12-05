import { useRef } from "react";
export default function Answers({ answers, selectedAnswers, answerState, onSelect }) {
  const shuffledAnswers = useRef();

  // La logica di mescolamento delle domande fallirebbe se fosse spostata sopra la produzione del componente che creo con l'if perché non verrebbe trovata più alcuna domanda.
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map(
        ...(answer) => {
          const isSelected = selectedAnswers === answer;
          let cssCalsses = "";
          if (answerState === "answered" && isSelected) {
            cssCalsses = "selected";
          }

          if (
            (answerState === "correct" || answerState === "wrong") &&
            isSelected
          ) {
            cssCalsses = answerState;
          }
          return (
            <li key={answer} className="answer">
              <button
                onClick={() => onSelect(answer)}
                className={cssCalsses}
              >
                {answer}
              </button>
            </li>
          );
        }
      )}
    </ul>
  );
}
