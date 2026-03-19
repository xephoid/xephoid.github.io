import { Hero } from "./sections/Hero";
import { WorkWithMe } from "./sections/WorkWithMe";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import "./App.css";

function App() {
  return (
    <main>
      <Hero />
      <WorkWithMe />
      <Experience />
      <Projects />
    </main>
  );
}

export default App;