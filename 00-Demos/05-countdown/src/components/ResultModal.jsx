import React, { forwardRef } from "react";

const ResultModal = forwardRef(({ timerExpired, targetTime }, ref) => {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>
        The target time was <strong>{targetTime} seconds.</strong>
      </h2>
      <h2>
        You stopped the timer with <strong>X seconds left.</strong>
      </h2>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
