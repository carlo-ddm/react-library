import Button from "./utils/Button";
export default function Sidebar({ arrProj, clicked, indexUp}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        your projects
      </h2>
      <div>
        <Button
          content="+ Add Project"
          variant="primary"
          clickedFunc={() => clicked("add", undefined)}
        />
      </div>
      <div>
        <ul className="mt-8">
          {arrProj.map((proj, index) => (
            <li key={index}>
              <Button
                clickedFunc={() => {clicked("proj"), indexUp(index)}}
                content={proj.title}
                variant="tertiary"
              />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
