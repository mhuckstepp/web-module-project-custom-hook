import React from "react";
import ReactDOM from "react-dom";
import useAppActions from "./hooks/appActions";
import useDarkMode from "./hooks/useDarkMode";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData] = useAppActions();
  const [storedVal, setMode] = useDarkMode();
  console.log(storedVal);
  return (
    <div className={storedVal ? "dark-mode App" : "App"}>
      <Navbar value={storedVal} setMode={setMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
