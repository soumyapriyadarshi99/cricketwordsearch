import "./App.css";
import React, { useEffect } from "react";
import { useState } from "react";
import cricketWords from "./utils/cricketwords";
import matrix from "./utils/matrix";

function App() {
  const [inputValue, setInputValue] = useState("");
  // const [searchValue, setSearchValue] = useState([]);
  const [cricketWord, setCricketWord] = useState(cricketWords);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    wordFinder();
  },[]);

  const wordFinder = () => {
    // for (let i = 0; i < searchValue.length; i++) {
    //   for (let j = 0; j < cricketWords.length; j++) {
    //     if (
    //       searchValue[i].toUpperCase() ===
    //       cricketWords[j].name.toUpperCase()
    //     ) {

    //       cricketWords[j].displayColor = true;
    //       console.log(cricketWords[j]);
    //       // wordFinder();
    //     }
    //   }
    // }
    console.log(cricketWord.length)
    for (let i = 0; i < cricketWord.length; i++) {
      if (inputValue.toUpperCase() === cricketWord[i].name.toUpperCase()) {
        cricketWord[i].displayColor = true;
        cricketWord.pop(cricketWord[i]);
        setCricketWord([...cricketWord,cricketWord[i]]);
        
        // console.log(cricketWord[i]);
        // console.log(cricketWord);
        break;
      }
      // else {
      //   console.log(cricketWord)
      // }
    }
  };

  const onClickHandler = () => {
    console.log('onclick ')
  wordFinder();
  };

  return (
    <div className="App">
      <h1 className="container-heading">Cricket Word Search</h1>
      <div className="word-matrix-container">
        <div className="word-container">
          <h3 style={{ textAllign: "center" }}>Find The Words</h3>
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
              onChange={handleChange}
            />
            <button type="submit" onClick={onClickHandler}>
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
