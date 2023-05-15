

const insertionSort = async () => {
    let bars = document.querySelectorAll('.bar');
    let barLabels = document.querySelectorAll(".bar-label");
    

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
  for (let i = 1; i < bars.length; i++) {
    let key = parseInt(bars[i].style.height);
    let tempLabel = barLabels[i].innerText;
    let j = i - 1;
    bars[i].classList.add('highlight');
    await sleep(100);
    while (j >= 0 && parseInt(bars[j].style.height) > key) {
      bars[j].classList.add('highlight');
      bars[j + 1].style.height = bars[j].style.height;
      barLabels[j+1].innerText = barLabels[j].innerText;
      await sleep(100);
      bars[j].classList.remove('highlight');
      j = j - 1;
    }
    bars[j + 1].style.height = key + 'px';
    barLabels[j + 1].innerText = tempLabel;
    bars[i].classList.remove('highlight');
    bars[j + 1].classList.add('highlight');
    await sleep(100);
    bars[j + 1].classList.remove('highlight');
  }
}
// let tempLabel = barLabels[i].innerText;
// barLabels[i].innerText = barLabels[i + 1].innerText;
// barLabels[i + 1].innerText = tempLabel;

export default insertionSort
