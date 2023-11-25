// Components
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";

import { forwardRef, useRef, useState } from "react";
const App = forwardRef(function App() {
  const [isProjectAddedClicked, setIsProjectAddedClicked] = useState(false);

  function handleProjectCreation(value, proj) {
    setIsProjectAddedClicked(value);
    console.log(proj);
  }

  return (
    <Main>
      <Sidebar clicked={handleProjectCreation} />
      {!isProjectAddedClicked && (
        <NoProjectSelected clicked={handleProjectCreation} />
      )}
      {isProjectAddedClicked && (
        <NewProject clicked={handleProjectCreation} />
      )}
    </Main>
  );
});

export default App;
