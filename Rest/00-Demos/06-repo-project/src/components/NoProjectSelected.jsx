import image from "../assets/no-projects.png";
import Button from "./utils/Button";
export default function NoProjectSelected({ clicked }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={image} className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-700 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <Button
        content="Create New Project"
        variant="primary"
        clickedFunc={() => clicked('add', undefined)}
      />
    </div>
  );
}
