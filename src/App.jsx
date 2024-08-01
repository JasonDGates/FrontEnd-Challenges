import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ContentContainer from "./components/ContentContainer/ContentContainer";

function App() {
  const [menuState, setMenuState] = useState(true);

  return (
    <>
      <Navbar />
      <ContentContainer />
    </>
  );
}

export default App;
