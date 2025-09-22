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
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </Fragment>
  );
}

export default App;
