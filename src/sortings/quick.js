const quicksort = async () => {
let bars = document.querySelectorAll(".bar");
let barLabels = document.querySelectorAll(".bar-label");
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

    async function quickSort(l, r) {
        if (l < r) {
          let pivotIndex = await partition(l, r);
          await quickSort(l, pivotIndex - 1);
          await quickSort(pivotIndex + 1, r);
        }
      }
      
      async function partition(l, r) {
        let pivotIndex = r;
        let pivotValue = parseInt(bars[pivotIndex].style.height);
        bars[pivotIndex].classList.add('highlight');
        let i = l - 1;
        for (let j = l; j <= r - 1; j++) {
          bars[j].classList.add('highlight');
          await sleep(100);
          bars[j].classList.remove('highlight');
          if (parseInt(bars[j].style.height) < pivotValue) {
            i++;
            await swap(bars[i], bars[j]);
            await swapLabels(barLabels[i], barLabels[j]);
          }
        }
        await swap(bars[i + 1], bars[pivotIndex]);
        await swapLabels(barLabels[i + 1], barLabels[pivotIndex]);
        bars[pivotIndex].classList.remove('highlight');
        return i + 1;
      }
      async function swap(a, b) {
        const temp = a.style.height;
        a.style.height = b.style.height;
        b.style.height = temp;
      }
      async function swapLabels(a, b) {
        const temp = a.innerText;
        a.innerText = b.innerText;
        b.innerText = temp;
        await sleep(100);
      }
      quickSort(0, bars.length - 1);
      
}
export default quicksort