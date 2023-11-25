import Button from "./utils/Button";
import Input from "./utils/Input";

export default function NewProject({ clicked }) {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button
            content="Cancel"
            variant=""
            clickedFunc={() => clicked(false)}
          />
        </li>
        <li>
          <Button
            content="Save"
            variant="secondary"
            clickedFunc={() => clicked(false)}
          />
        </li>
      </menu>
      <div>
        <Input label="title" />
        <Input label="description" textarea={true} />
        <Input label="due date" />
      </div>
    </div>
  );
}
