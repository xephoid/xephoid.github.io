import { Hero } from "./sections/Hero";
import { WorkWithMe } from "./sections/WorkWithMe";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Blog } from "./sections/Blog";
import "./App.css";

function App() {
  return (
    <main>
      <Hero />
      <Experience />
      <WorkWithMe />
      <Projects />
      <Blog />
    </main>
  );
}

export default App;