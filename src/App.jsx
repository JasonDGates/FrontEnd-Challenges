import { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [menuState, setMenuState] = useState(true);

  return (
    <>
      <Navbar />
      <LandingPage menuState={menuState} />
    </>
  );
}

export default App;
