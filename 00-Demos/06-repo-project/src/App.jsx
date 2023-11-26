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
  const [project, setProject] = useState();

  function handleProjectCreation(value, proj) {
    setIsProjectAddedClicked(value);
    if (proj !== undefined) {
      setProjects((prevState) => [...prevState, proj]);
    }
  }

  function handleProjectSetter(title) {
    projects.forEach(project => {
      if (project.title === title) {
        setProject(project)
      }
      // console.log(project);
    });
  }

  let displayer = <NoProjectSelected clicked={handleProjectCreation} />;
  if (isProjectAddedClicked) {
    displayer = <NewProject clicked={handleProjectCreation} />;
  } else if (!isProjectAddedClicked && projects.includes(project)) {
    displayer = <Project />
  }

  return (
    <Main>
      <Sidebar
        arrProj={projects.map((el) => el.title)}
        clicked={handleProjectCreation}
        clickedProj={(title) => {
          handleProjectSetter(title);
        }}
      />
      {displayer}
    </Main>
  );
}
