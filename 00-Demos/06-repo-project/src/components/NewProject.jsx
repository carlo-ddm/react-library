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
      return {
        ...prevState,
        [identifier]: id.current.getValue(),
      };
    });

    Object.values(project).map((el) => {
      let isDisabled = true;
      if (el.length > 0) {
        setButtonEnabled(false);
      }
    });

    console.log(project);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button
            content="Cancel"
            variant=""
            clickedFunc={() => clicked(false, undefined)}
          />
        </li>
        <li>
          <Button
            content="Save"
            variant="secondary"
            clickedFunc={() => clicked(false, project)}
            disabled={buttonEnabled}
          />
        </li>
      </menu>
      <div>
        <Input
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
          change={() => manageChange("dueDate")}
          label="due date"
          ref={dueDateRef}
        />
      </div>
    </div>
  );
}
