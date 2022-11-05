import "./App.css";
import React from "react";
import { useState } from "react";
import cricketWords from "./utils/cricketwords";
import matrix from "./utils/matrix";
import { row } from "./utils/matrix";
import { col } from "./utils/matrix";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import wordCalculator from "./components/wordCalculator";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [cricketWord, setCricketWord] = useState(cricketWords);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const wordFinder = () => {
    for (let i = 0; i < cricketWord.length; i++) {
      if (inputValue.toUpperCase() === cricketWord[i].name.toUpperCase()) {
        cricketWord[i].displayColor = true;
        setCricketWord([...cricketWord, cricketWord[i]]);
        break;
      } 
    }
  };

  const onClickHandler = () => {
    wordFinder();
  };
  console.log(wordCalculator())

  return (
    <div className="App">
      <h1 className="container-heading">Cricket Word Search</h1>
      <div className="word-matrix-container">
        <div className="word-container">
          <h3 style={{ textAlign: "center" }}>Find The Words</h3>
          <ul className="cricketWordlist">
            {cricketWords.map((item, index) => {
              return (
                <li className={item.displayColor ? "bg-color" : ""} key={index}>
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="matrix-container">
          <div className="search-container">
            <input
              type="text"
              name="search-words"
              id="search-words"
              placeholder="search words"
              className="input"
              onChange={handleChange}
            />
            <button className="button" type="submit" onClick={onClickHandler}>
              Submit
            </button>
          </div>
          <div className="matrix">
            {matrix.map((value) =>
              value.map((cellValue, cellIndex) => (
                <li value={cellValue} key={cellIndex}>
                  {cellValue}
                </li>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
