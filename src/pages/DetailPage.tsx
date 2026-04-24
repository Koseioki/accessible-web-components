import { useParams } from "react-router";
import { components } from "../data/components";
import "./DetailPage.css";
import { Note } from "../components/Note";

export function DetailPage() {
  const { slug } = useParams();

  const component = components.find((c) => c.slug === slug);

  if (!component) {
    return <h1>Component not found</h1>;
  }

  return (
    <main id="main-content">
      <section>
        <h1>{component.title}</h1>
        <Note />

        <img src={component.image} alt="" className="component-image" />
        <p>{component.description}</p>
        <div>
          <a href={component.demo}>View Demo</a>
        </div>
        <div>
          <a href={component.github}>View GitHub</a>
        </div>
      </section>

      <section>
        <h2>Specifications</h2>
        {component.specifications && component.specifications.length > 0 ? (
          <div className="specifications">
            <ul>
              {component.specifications.map((spec, index) => (
                <li key={index}>
                  <img src={spec.src} alt={spec.alt} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>More details to follow.</p>
        )}
      </section>
    </main>
  );
}
