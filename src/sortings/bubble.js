import "../styles/bubble.css";


const bubbleSort = async () => {
  console.log("Hello bubble")
  let bars = document.querySelectorAll(".bar");
  let barLabels = document.querySelectorAll(".bar-label");
  
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  let swapped;
  let sortedIndex = bars.length - 1;
  
  do {
    swapped = false;
    let newSortedIndex = 0;
    
    for (let i = 0; i < sortedIndex; i++) {
      bars[i].classList.add("highlight");
      bars[i + 1].classList.add("highlight");
      await sleep(100);
      
      if (parseInt(bars[i].style.height) > parseInt(bars[i + 1].style.height)) {
        let temp = bars[i].style.height;
        bars[i].style.height = bars[i + 1].style.height;
        bars[i + 1].style.height = temp;
        
        // Update the innerText of the bar-label divs
        let tempLabel = barLabels[i].innerText;
        barLabels[i].innerText = barLabels[i + 1].innerText;
        barLabels[i + 1].innerText = tempLabel;
        
        swapped = true;
        newSortedIndex = i;
      }
      bars[i].classList.remove("highlight");
      bars[i + 1].classList.remove("highlight");
    }
    
    sortedIndex = newSortedIndex;
  } while (swapped);
};


const sort = () => {
  bubbleSort();
};

export default sort;