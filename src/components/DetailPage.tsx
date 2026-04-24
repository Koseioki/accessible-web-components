import { useParams } from "react-router";
import { components } from "../data/components";

export function DetailPage() {
  const { slug } = useParams();

  const component = components.find((c) => c.slug === slug);

  if (!component) {
    return <h1>Component not found</h1>;
  }

  return (
    <div>
      <h1>{component.title}</h1>
      <img
        src={component.image}
        alt={`${component.title} demo`}
        className="component-image"
      />
      <p>{component.description}</p>

      <a href={component.demo}>View Demo</a>
      <a href={component.github}>
        {/* <Icon icon="Github" fontSize="p"/> */}
        View GitHub
      </a>

      {component.specifications && component.specifications.length > 0 ? (
        <div>
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
    </div>
  );
}
