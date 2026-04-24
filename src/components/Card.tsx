import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import "./Card.css";
export function Card(
  title: string,
  description: string,
  image: string,
  slug: string,
) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${slug}`);
  };
  return (
    <article className="card" onClick={handleClick}>
      <img src={image} alt="" />
      <h3>
        <NavLink to={`/${slug}`} >{title}</NavLink>
      </h3>
      <p>{description}</p>
    </article>
  );
}
