import Button from "./utils/Button";
export default function Sidebar({ clicked }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        your projects
      </h2>
      <div>
        <Button
          content="+ Add Project"
          variant="primary"
          clickedFunc={() => clicked(true, undefined)}
        />
      </div>
    </aside>
  );
}