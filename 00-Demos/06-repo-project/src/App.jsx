// Components
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";

import { useState } from "react";
function App() {
  const [isProjectAddedClicked, setIsProjectAddedClicked] = useState(false);

  function handleProjectAdded() {
    setIsProjectAddedClicked(true);
  }

  return (
    <Main>
      <Sidebar clicked={handleProjectAdded} />
      {!isProjectAddedClicked && (
        <NoProjectSelected clicked={handleProjectAdded} />
      )}
      {isProjectAddedClicked && <NewProject />}
    </Main>
  );
}

export default App;
