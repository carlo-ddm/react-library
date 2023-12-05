// Components
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import Project from "./components/Project";

import { useState } from "react";

export default function App() {
  const [isProjectAddedClicked, setIsProjectAddedClicked] = useState({
    clickType: "",
    projects: [],
  });
  const [index, setIndex] = useState(null);

  // Funzioni Helper
  function getIndex(index) {
    console.log(index);
    setIndex(index);
  }

  function handleProjectCreation(val, proj) {
    setIsProjectAddedClicked((prevState) => {
      let projects;
      if (proj !== undefined && !prevState.projects.includes(proj)) {
        projects = [...prevState.projects, proj];
      } else {
        projects = [...prevState.projects];
      }
      return {
        clickType: val,
        projects: projects,
      };
    });
  }

  // Logica di Rendering Condizionale
  const { clickType } = isProjectAddedClicked;
  const displayer =
    clickType === "add" ? (
      <NewProject clicked={handleProjectCreation} />
    ) : clickType === "save" ? (
      <NoProjectSelected clicked={handleProjectCreation} />
    ) : clickType === "proj" ? (
      <Project project={isProjectAddedClicked.projects[index]} />
    ) : (
      <NoProjectSelected clicked={handleProjectCreation} />
    );

  // Render del Componente
  return (
    <Main>
      <Sidebar
        arrProj={[...isProjectAddedClicked.projects]}
        clicked={handleProjectCreation}
        indexUp={getIndex}
      />
      {displayer}
    </Main>
  );
}
