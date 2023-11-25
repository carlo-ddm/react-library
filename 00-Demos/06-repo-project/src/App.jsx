// Components
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";

import { useState } from "react";
export default function App() {
  const [isProjectAddedClicked, setIsProjectAddedClicked] = useState(false);
  const [projects, setProjects] = useState([]);

  function handleProjectCreation(value, proj) {
    setIsProjectAddedClicked(value);
    if (proj !== undefined) {
      setProjects((prevState) => [...prevState, proj]);
    }
    console.log(projects);
  }

  return (
    <Main>
      <Sidebar clicked={handleProjectCreation} />
      {!isProjectAddedClicked && (
        <NoProjectSelected clicked={handleProjectCreation} />
      )}
      {isProjectAddedClicked && <NewProject clicked={handleProjectCreation} />}
    </Main>
  );
}
