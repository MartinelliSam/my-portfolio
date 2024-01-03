export default function Project({
  id,
  image,
  name,
  stack,
  github,
  source,
  description,
}) {
  return (
    <div className="project-card" id={id}>
      <img src={image} alt={name} className="project-image" />
      <h3 className="project-name">{name}</h3>
      <div className="project-stack">{stack}</div>
      <p className="project-description">{description}</p>
      <div className="project-links">
        <a
          href={github}
          className="project-github"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href={source}
          className="project-source"
          target="_blank"
          rel="noreferrer"
        >
          Démo
        </a>
      </div>
    </div>
  );
}
