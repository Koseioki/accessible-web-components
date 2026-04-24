import heroImage from "../assets/accessible-components.webp";
import { ComponentList } from "../components/ComponentList";
import { IntroText } from "../components/IntroText";
export function Home() {
  return (
    <div>
      <h1>Accessible Web Components</h1>
      <p>By Kosei Oki</p>
      <img src={heroImage} className="hero" aria-hidden="true" alt="" />

      <IntroText />
      <ComponentList />
    </div>
  );
}
