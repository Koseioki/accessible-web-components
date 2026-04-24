import { ComponentList } from "../components/ComponentList";
import { IntroText } from "../components/IntroText";
export function Home() {
  return (
    <div>
      <h1>Accessible Web Components</h1>
      <p>By Kosei Oki</p>

      <ComponentList />

      <IntroText />
    </div>
  );
}
