import React from "react";
import "./App.css";

function App() {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <span className="terminal-dot red" />
        <span className="terminal-dot yellow" />
        <span className="terminal-dot green" />
        <span className="terminal-title">zeke@swepson:~</span>
      </div>
      <div className="terminal-body">
        <p className="prompt">
          <span className="prompt-user">zeke@swepson</span>
          <span className="prompt-sep">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-dollar">$</span>
          <span className="prompt-cmd"> whoami</span>
        </p>
        <p className="output">
          Software Engineer. 19 years building things that matter.
        </p>
        <p className="prompt">
          <span className="prompt-user">zeke@swepson</span>
          <span className="prompt-sep">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-dollar">$</span>
          <span className="cursor">▋</span>
        </p>
      </div>
    </div>
  );
}

export default App;