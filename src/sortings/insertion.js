

const insertionSort = async () => {
    let bars = document.querySelectorAll('.bar');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
  for (let i = 1; i < bars.length; i++) {
    let key = parseInt(bars[i].style.height);
    let j = i - 1;
    bars[i].classList.add('highlight');
    await sleep(100);
    while (j >= 0 && parseInt(bars[j].style.height) > key) {
      bars[j].classList.add('highlight');
      bars[j + 1].style.height = bars[j].style.height;
      await sleep(100);
      bars[j].classList.remove('highlight');
      j = j - 1;
    }
    bars[j + 1].style.height = key + 'px';
    bars[i].classList.remove('highlight');
    bars[j + 1].classList.add('highlight');
    await sleep(100);
    bars[j + 1].classList.remove('highlight');
  }
}


export default insertionSort
