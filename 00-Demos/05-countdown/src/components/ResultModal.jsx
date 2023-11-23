import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  {targetTime, remainigTime },
  ref
) {
  const dialog = useRef();
  const userLost = remainigTime <= 0;
  const formattedRemainingTime = (remainigTime / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You {result}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <h2>
        You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
      </h2>
      <form>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
