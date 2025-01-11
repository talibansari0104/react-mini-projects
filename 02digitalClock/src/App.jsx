import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval); // Cleanup on unmount or when `isRunning` changes
  }, [isRunning]);

  // Format time into HH:MM:SS
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const secs = (totalSeconds % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <div style={{ fontSize: "2rem", fontFamily: "monospace", textAlign: "center" }}>
      <h1>Digital Timer</h1>
      <div>{formatTime(seconds)}</div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setIsRunning(true)}
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            margin: "0 10px",
            cursor: "pointer",
          }}
        >
          Start
        </button>
        <button
          onClick={() => setIsRunning(false)}
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            margin: "0 10px",
            cursor: "pointer",
          }}
        >
          Stop
        </button>
        <button
          onClick={() => {
            setSeconds(0);
            setIsRunning(false);
          }}
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            margin: "0 10px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App
