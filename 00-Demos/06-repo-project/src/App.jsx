// Components
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";

import { useState } from "react";
function App() {
  const [isProjectAddedClicked, setIsProjectAddedClicked] = useState(false);

  function handleProjectAdded() {
    setIsProjectAddedClicked(true);
  }

  return (
    <Main>
      <Sidebar clicked={handleProjectAdded} />
      {!isProjectAddedClicked && <NoProjectSelected />}
    </Main>
  );
}

export default App;
