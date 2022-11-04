import React from "react";

import "./App.css";
import Banner from "./components/banner";
import CriptoContainer from "./components/cripto-container";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner />
      <CriptoContainer/>
    </div>
  );
}

export default App;
