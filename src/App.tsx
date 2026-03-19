import { Hero } from "./sections/Hero";
import { WorkWithMe } from "./sections/WorkWithMe";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import "./App.css";

function App() {
  return (
    <main>
      <Hero />
      <Experience />
      <WorkWithMe />
      <Projects />
    </main>
  );
}

export default App;