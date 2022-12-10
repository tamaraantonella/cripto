import React from "react";

import "./App.css";
import Banner from "./components/banner";
import Container from "./components/container";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Container />
    </div>
  );
}

export default App;
