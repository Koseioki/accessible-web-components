import { useEffect } from "react";
import { ComponentList } from "../components/ComponentList";
import { IntroText } from "../components/IntroText";
import { Note } from "../components/Note";
export function Home() {
  // change the page title
  useEffect(() => {
    document.title = "Accessible Web Components";
  }, []);

  return (
    <main id="main-content">
      <h1>Accessible Web Components</h1>
      <p>By Kosei Oki</p>

      <Note />

      <ComponentList />
      <IntroText />
    </main>
  );
}
