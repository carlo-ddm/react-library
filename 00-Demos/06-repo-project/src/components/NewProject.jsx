import Button from "./utils/Button";
export default function NewProject(clicked) {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button content="Cancel" variant="secondary" clickedFunc={clicked} />
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
    </div>
  );
}
