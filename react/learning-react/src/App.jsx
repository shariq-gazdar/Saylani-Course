import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [click, setClick] = useState("");
  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleClick = () => {
    setClick(data);
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>set the data</button>
      {click}
    </>
  );
}

export default App;
