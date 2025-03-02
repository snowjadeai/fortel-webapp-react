import { useState } from "react";
import ReactMarkdown from "react-markdown";

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
                const response = await fetch("https://vigilant-engine-4jqj9q947jj6fjwqg-3000.app.github.dev")
              
                let partialResponse = ""
                for await (const chunk of response.body.values()) {
                  partialResponse += new TextDecoder().decode(chunk)
                  setFortune(partialResponse)
                }
              }}
              disabled={birthDate === ""}
            >
              Show 2025 Fortune
            </button>
          }
          <ReactMarkdown>
            {fortune}
          </ReactMarkdown>
        </p>
      </header>
    </div>
  );
}

export default App;
