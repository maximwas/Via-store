import { useEffect, useRef, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function App() {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const html = useRef(document.querySelector("html"));

  const toggleDarkMode = (checked: boolean) => {
    html.current?.classList.remove(checked ? "light" : "dark");
    html.current?.classList.add(checked ? "dark" : "light");
    setDarkMode(checked);
  };

  return (
    <div className="App">
      <Header></Header>
      <DarkModeSwitch style={{ marginBottom: "2rem" }} checked={isDarkMode} onChange={toggleDarkMode} size={60} />
    </div>
  );
}

export default App;
