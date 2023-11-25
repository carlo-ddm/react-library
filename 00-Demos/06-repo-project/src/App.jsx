// Components
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";

import { forwardRef, useRef, useState } from "react";
const App = forwardRef(function App() {
  const [isProjectAddedClicked, setIsProjectAddedClicked] = useState(false);
  // const [project, setProject] = useState({});
  const newProject = useRef();

  function handleProjectCreation(value) {
    setIsProjectAddedClicked(value);
    console.log(newProject.current);
  }

  return (
    <Main>
      <Sidebar clicked={handleProjectCreation} />
      {!isProjectAddedClicked && (
        <NoProjectSelected clicked={handleProjectCreation} />
      )}
      {isProjectAddedClicked && (
        <NewProject clicked={handleProjectCreation} ref={newProject} />
      )}
    </Main>
  );
});

export default App;
