import { ComponentList } from "../components/ComponentList";
import { IntroText } from "../components/IntroText";
import { Note } from "../components/Note";
export function Home() {
  return (
    <main id="main-content" className="centered">
      <h1>Accessible Web Components</h1>
      <p>By Kosei Oki</p>

      <Note />

      <ComponentList />
      <IntroText />
    </main>
  );
}
