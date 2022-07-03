import { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { listCountState } from "./selectors/listCountState";

const Timer = () => {
  const [localTimer, setLocalTimer] = useState(0);
  const [now, setNow] = useState(0);
  const timeRef = useRef<number>(0);
  const [timesList, setTimesList] = useRecoilState(listCountState);

  const handleStart = () => {
    clearInterval(timeRef.current);

    if (now && localTimer) {
      const previousTimePast = (now - localTimer) / 1000;
      const newList = [...timesList, previousTimePast];
      setTimesList(newList);
    }

    setNow(Date.now());
    setLocalTimer(Date.now());

    const interval = setInterval(() => {
      setNow(Date.now());
    }, 10);

    timeRef.current = interval;
  };

  let timePast = 0;

  if (localTimer && now) {
    timePast = (now - localTimer) / 1000;
  }

  const handlePause = () => {
    clearInterval(timeRef.current);
    setTimesList([]);
  };

  return (
    <div className="App">
      <h1>Timer:{timePast.toFixed(2)}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handlePause}>Stop</button>
    </div>
  );
};

export default Timer;
