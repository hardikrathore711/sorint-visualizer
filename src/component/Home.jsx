import React, { useEffect, useState } from "react";
import bubbleSort from "../sortings/bubble.js";
import selectionSort from "../sortings/selection.js";
import insertionSort from "../sortings/insertion.js";
import mergeSorting from "../sortings/merge.js";
import quicksort from "../sortings/quick.js";

const Home = () => {

  const [userBars, setUserBars] = useState("");
  const [resetVal, setResetVal] = useState([10, 40, 50, 60, 20, 70, 40, 30, 100]);
  const [isReset, setIsReset] = useState(true);
  const [isSorted, setIsSorted] = useState(false);

  const userArr = userBars.split(",");

  const barValues = isReset ? resetVal : userArr

  const resetBars = () => {
    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar) => {
      const height = Math.floor(Math.random() * 181) + 20;
      bar.style.height = `${height}px`;
    }); 

    setIsReset(true);
    setUserBars("");    
  };

  const setCumtomBars = () => {
    // const bars = document.querySelectorAll(".bar");

    // bars.forEach((bar, index) => {
    //   bar.style.height = `${barValues[index]}0px`;
    // })

    setIsReset(false);
  }

  return (
    <div className="home">
      <h1>Sorting Visualizer</h1>
      <div className="home__bars-container">
        {/* <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div> */}
        {
          barValues.map((bars, idx) => (
            <div className="bar" style={{height: `${bars}px`}}></div>
          ))
        }
      </div>

      <div className="home__custom">
      <span>[</span>
      <input type="text" placeholder="20, 63, 89..." value={userBars} onChange={(e) => setUserBars(e.target.value)}/>
      <span>]</span>
      <button className="custom-button" onClick={() => setCumtomBars()}>Custom Bars</button>
      </div>

      <div className="home__buttons">
        <button className="button" onClick={() => selectionSort()}>Selection Sort</button>
        <button className="button" onClick={() => insertionSort()}>Insertion Sort</button>
        <button className="button" onClick={() => bubbleSort()}>Bubble Sort</button>
        <button className="button" onClick={() => mergeSorting()}>Merge Sort</button>
        <button className="button" onClick={() => quicksort()}>Quick Sort</button>
        <button className="button" onClick={() => resetBars()} disabled={isSorted}>Reset</button>

      </div>  

      
    </div>
  );
};

export default Home;
