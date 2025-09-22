import componentImg from "./assets/components.png";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { Fragment, useState } from "react";
import Examples from "./components/Examples.jsx";
function App() {
  console.log("App() is running");
  return (
    // alternative to Fragment is <>  ...</>
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        {/* // now only the Exemlpes component is neing rendered not the full app
        // because we split the app into multiple components
        // each component is responsible for rendering a specific part of the UI
        // this makes the code more modular and easier to maintain */}
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </Fragment>
  );
}

export default App;
