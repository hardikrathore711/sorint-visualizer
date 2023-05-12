import "../styles/bubble.css";

const selectionSort = async() => {
    let bars = document.querySelectorAll('.bar');
    
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  for (let i = 0; i < bars.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < bars.length; j++) {
      bars[minIdx].classList.add('highlight');
      bars[j].classList.add('highlight');
      await sleep(100);
      if (parseInt(bars[j].style.height) < parseInt(bars[minIdx].style.height)) {
        bars[minIdx].classList.remove('highlight');
        minIdx = j;
        bars[minIdx].classList.add('highlight');
      }
      bars[j].classList.remove('highlight');
    }
    let temp = bars[minIdx].style.height;
    bars[minIdx].style.height = bars[i].style.height;
    bars[i].style.height = temp;
    bars[minIdx].classList.remove('highlight');
    bars[i].classList.add('highlight');
    await sleep(100);
    bars[i].classList.remove('highlight');
  }
}


export default selectionSort;