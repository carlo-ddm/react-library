import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaning, setTimeRemaning] = useState(targetTime * 1000);
  const timerIsActive = timeRemaning > 0 && timeRemaning < targetTime * 1000;

  if (timeRemaning <= 0) {
    clearInterval(timer.current);
    setTimeRemaning(targetTime * 1000);
    dialog.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaning((prevTimeRemaning) => prevTimeRemaning - 10);
      // dialog.current.showModal();
      dialog.current.open();
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    timer.current = clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challange-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challange
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
