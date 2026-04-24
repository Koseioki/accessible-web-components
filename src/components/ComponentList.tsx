type ComponentItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

import { components } from "../data/components";
import { Card } from "./Card";
import './Card.css';

const typedComponents = components as ComponentItem[];

export function ComponentList() {
  return (
    <section className="centered">
      <h2 id="components">Components</h2>

      <ul className="card-list">
        {typedComponents.map((component) => (
          <li key={component.slug}>
            {Card(
              component.title,
              component.description,
              component.image,
              component.slug
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
