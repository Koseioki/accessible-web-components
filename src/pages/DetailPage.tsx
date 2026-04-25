import { useParams } from "react-router";
// @ts-expect-error -- JS data module has no declaration file
import { components } from "../data/components";
import "./DetailPage.css";
import { Note } from "../components/Note";
import { H1 } from "../components/H1";

export function DetailPage() {
  const { slug } = useParams();

  const component = components.find((c: { slug: string }) => c.slug === slug);


  if (!component) {
    return <H1>Component not found</H1>;
  }

  return (
    <main id="main-content">
      <section>
        <H1>{component.title}</H1>
        <Note />

        <img src={component.image} alt="" className="component-image" />
        <p>{component.description}</p>
        {component.demo && (
          <div>
            <a href={component.demo}>View Demo</a>
          </div>
        )}
        {component.github && (
          <div>
            <a href={component.github}>View GitHub</a>
          </div>
        )}
      </section>

      <section>
        <h2>Specifications</h2>
        {component.specifications && component.specifications.length > 0 ? (
          <div className="specifications">
            <ul>
              {component.specifications.map(
                (spec: { src: string; alt: string }, index: number) => (
                <li key={index}>
                  <img src={spec.src} alt={spec.alt} />
                </li>
                )
              )}
            </ul>
          </div>
        ) : (
          <p>More details to follow.</p>
        )}
      </section>
    </main>
  );
}
