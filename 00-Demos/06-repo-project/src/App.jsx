// Components
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import Project from "./components/Project";

import { useState } from "react";
export default function App() {
  const [isProjectAddedClicked, setIsProjectAddedClicked] = useState(false);
  const [projects, setProjects] = useState([]);

  function handleProjectCreation(value, proj) {
    setIsProjectAddedClicked(value);
    if (proj !== undefined) {
      setProjects((prevState) => [...prevState, proj]);
    }
  }

  let displayer = <NoProjectSelected clicked={handleProjectCreation} />;
  if (isProjectAddedClicked) {
    displayer = <NewProject clicked={handleProjectCreation} />;
  }

  return (
    <Main>
      <Sidebar
        clicked={handleProjectCreation}
        arrProj={projects.map((el) => el.title)}
      />
      {/* {!isProjectAddedClicked && (
        <NoProjectSelected clicked={handleProjectCreation} />
      )}
      {isProjectAddedClicked && <NewProject clicked={handleProjectCreation} />} */}
      {displayer}
    </Main>
  );
}
