import React from "react";
import { TerminalWindow } from "./components";
import { PromptLine } from "./components";
import { Output } from "./components";
import { useTypewriter } from "./hooks/useTypewriter";
import "./App.css";

function App() {
  const line1 = useTypewriter("whoami", 60, 300);
  const line2 = useTypewriter(
    "Software Engineer. 19 years building things that matter.",
    30,
    1200
  );
  const showCursor = line2.length > 0;

  return (
    <main className="app">
      <TerminalWindow>
        <PromptLine command={line1} />
        {line2 && <Output>{line2}</Output>}
        {showCursor && <PromptLine showCursor />}
      </TerminalWindow>
    </main>
  );
}

export default App;