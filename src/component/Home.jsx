import React, { useEffect, useState } from "react";
import bubbleSort from "../sortings/bubble.js";
import selectionSort from "../sortings/selection.js";
import insertionSort from "../sortings/insertion.js";
import mergeSorting from "../sortings/merge.js";
import quicksort from "../sortings/quick.js";

const Home = () => {

  const [userBars, setUserBars] = useState("");
  const [resetVal, setResetVal] = useState(() => Array.from({ length: 20 }, () => Math.floor(Math.random() * 250) + 20));

  const [isReset, setIsReset] = useState(true);
  const [isSorted, setIsSorted] = useState(false);

  const userArr = userBars.split(",");

  const barValues = isReset ? resetVal : userArr
  

  // const resetBars = () => {
  //   const barwrapper = document.querySelectorAll(".bar-wrapper")
  //   const bars = document.querySelectorAll(".bar");
  //   const nums = document.querySelectorAll(".bar-label");
  //   barwrapper.forEach((comp) => {
  //    const height = Math.floor(Math.random() * 250) + 20;
  //    comp.style.height = `${height}px`;
  //   })
  //   // bars.forEach((bar) => {
  //   //   const height = Math.floor(Math.random() * 250) + 20;
  //   //   bar.style.height = `${height}px`;
  //   // }); 
  const resetBars = () => {
    setIsReset(true);
    const bars = document.querySelectorAll(".bar");
    const heights = Array.from(bars).map(() => Math.floor(Math.random() * 250) + 20);
    
    bars.forEach((bar, index) => {
      bar.style.height = `${heights[index]}px`;
      // Remove any existing bar labels
      const existingBarLabel = bar.querySelector(".bar-label");
      if (existingBarLabel) {
        existingBarLabel.remove();
      }
      // Create and append the new bar label
      const barLabel = document.createElement("div");
      barLabel.className = "bar-label";
      barLabel.innerText = `${heights[index]}`;
      bar.appendChild(barLabel);
    });
    
    setUserBars("");
    
  };
  
  

  const setCumtomBars = () => {
    // const bars = document.querySelectorAll(".bar");

    // bars.forEach((bar, index) => {
    //   bar.style.height = `${barValues[index]}0px`;
    // })

    setIsReset(false);
  }
  const handleChange = (e) => {
    const { value } = e.target;
    if (value === "") {
      setResetVal([]);
    } else {
      const newBars = [...resetVal];
      const index = parseInt(e.target.name);
      newBars[index] = parseInt(value);
      setResetVal(newBars);
    }
  };
  

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
            <div className="bar-wrapper" key={idx}>
              <div className="bar" style={{ height: `${bars}px` }}></div>
              <div className="bar-label">{bars}</div>
            </div>
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
        <a href={window.location.href} className="button" onClick={() => resetBars()} disabled={isSorted}>Reset</a>
      </div>  

      
    </div>
  );
};

export default Home;
