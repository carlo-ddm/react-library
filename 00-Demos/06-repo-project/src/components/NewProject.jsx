import { useRef } from "react";
import Button from "./utils/Button";
import Input from "./utils/Input";

export default function NewProject({ clicked }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button
            content="Cancel"
            variant=""
            clickedFunc={() => clicked(false, null)}
          />
        </li>
        <li>
          <Button
            content="Save"
            variant="secondary"
            clickedFunc={() =>
              clicked(false, {
                title: titleRef.current.getValue(),
                description: descriptionRef.current.getValue(),
                dueDate: dueDateRef.current.getValue()
              })
            }
          />
        </li>
      </menu>
      <div>
        <Input label="title" ref={titleRef} />
        <Input label="description" ref={descriptionRef} textarea={true} />
        <Input label="due date" ref={dueDateRef} />
      </div>
    </div>
  );
}
