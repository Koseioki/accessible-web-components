import { NavLink } from "react-router";
import "./Card.css";
export function Card(
  title: string,
  description: string,
  image: string,
  slug: string,
) {

  const handleClick = () => {
    window.location.href = `/${slug}`;
  };
  return (
    <article className="card" onClick={handleClick}>
      <img src={image} alt="" />
      <h3>
        <NavLink to={`/${slug}`}>{title}</NavLink>
      </h3>
      <p>{description}</p>
    </article>
  );
}
