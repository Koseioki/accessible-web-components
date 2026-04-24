import { NavLink } from "react-router";
import "./Card.css";
export function Card(
  title: string,
  description: string,
  image: string,
  slug: string,
) {
  return (
    <article className="card">
      <img src={image} alt="" />
      <h3>
        <NavLink to={`/components/${slug}`}>{title}</NavLink>
      </h3>
      <p>{description}</p>
    </article>
  );
}
