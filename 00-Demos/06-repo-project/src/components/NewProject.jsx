import { useRef, useState } from "react";
import Button from "./utils/Button";
import Input from "./utils/Input";

export default function NewProject({ clicked }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [project, setProjects] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  function manageChange(identifier) {
    let id;
    if (identifier === "title") {
      id = titleRef;
    } else if (identifier === "description") {
      id = descriptionRef;
    } else {
      id = dueDateRef;
    }
    setProjects((prevState) => {
      const updatedState = {
        ...prevState,
        [identifier]: id.current.getValue(),
      };
      const allFieldsFilled = Object.values(updatedState).every(
        (value) => value.length > 0
      );
      setButtonEnabled(!allFieldsFilled);

      return updatedState;
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button
            content="Cancel"
            variant=""
            clickedFunc={() => clicked("cancel", undefined)}
          />
        </li>
        <li>
          <Button
            content="Save"
            variant="secondary"
            clickedFunc={() => clicked("save", project)}
            disabled={buttonEnabled}
          />
        </li>
      </menu>
      <div>
        <Input
          type="text"
          change={() => manageChange("title")}
          label="title"
          ref={titleRef}
        />
        <Input
          change={() => manageChange("description")}
          label="description"
          ref={descriptionRef}
          textarea={true}
        />
        <Input
          type="date"
          change={() => manageChange("dueDate")}
          label="due date"
          ref={dueDateRef}
        />
      </div>
    </div>
  );
}
