import "../styles/bubble.css";


const bubbleSort = async () => {
  console.log("Hello bubble")
  let bars = document.querySelectorAll(".bar");
  
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < bars.length - 1; i++) {
      bars[i].classList.add("highlight");
      bars[i + 1].classList.add("highlight");
      await sleep(100);
      if (parseInt(bars[i].style.height) > parseInt(bars[i + 1].style.height)) {
        let temp = bars[i].style.height;
        bars[i].style.height = bars[i + 1].style.height;
        bars[i + 1].style.height = temp;
        swapped = true;
      }
      bars[i].classList.remove("highlight");
      bars[i + 1].classList.remove("highlight");
    }
  } while (swapped);
};

const sort = () => {
  bubbleSort();
};

export default sort;