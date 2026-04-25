import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import "./Card.css";
export function Card(
  title: string,
  description: string,
  image: string,
  slug: string,
  demo: string,
  specifications: { src: string; alt: string }[]
) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(slug);
  };
  return (
    <article className="card" onClick={handleClick}>
      <img src={image} alt="" />
      <h3>
        <NavLink to={slug}>{title}</NavLink>
      </h3>
      {demo && (
        <div className="card-label"><span aria-hidden="true">💻</span> Demo</div>
      )}
      {specifications  && (
        <div className="card-label"><span aria-hidden="true">📄</span> Specifications</div>
      )}
      <p>{description}</p>
    </article>
  );
}
