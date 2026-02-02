import { useState } from "react";

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((prevPending) => prevPending + 1);
    await delay(3000);
    setPending((prevPending) => {
      const newPending = prevPending - 1;
      return newPending >= 0 ? newPending : 0;
    });
    setCompleted((prevCompleted) => prevCompleted + 1);
  }

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
