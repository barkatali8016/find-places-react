import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [remainingTimer, setRemainingTimer] = useState(3000);
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTimer((prevTimer) => prevTimer - 10);
    }, 10);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);
  const remainingParcentage = (remainingTimer / 3000) * 100;
  return (
    <>
      <progress value={remainingTimer} max={3000} />{" "}
      <span>Deleted in {remainingParcentage.toFixed(0)}%</span>
    </>
  );
}
