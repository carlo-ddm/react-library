// NOTA: non viene fatta la dimostrazione dello split dello stile per CoreConcepts. E' superfluo.

export default function CoreConcepts({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
