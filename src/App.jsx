import { useState } from "react";

import './App.css';

function App() {
  const [birthDate, setBirthDate] = useState("");
  const [fortune, setFortune] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter your Birthdate!
        </p>
        <p>
          <input
            type="date"
            min="1900-01-01"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </p>
        <p className="small">
          {
            (fortune === "") &&
            <button
              onClick={async () => {
                setFortune("To do: call API here")
              }}
              disabled={birthDate === ""}
            >
              Show 2025 Fortune
            </button>
          }
          {fortune}
        </p>
      </header>
    </div>
  );
}

export default App;
