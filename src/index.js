import React from "react";
import ReactDOM from "react-dom";
import useAppActions from "./hooks/appActions";
import useDarkMode from "./hooks/useDarkMode";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, darkMode, setDarkMode] = useAppActions();

  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
