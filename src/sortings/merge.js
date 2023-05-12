const mergeSorting = async () => {
  let bars = document.querySelectorAll(".bar");

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function mergeSort(l, r) {
    if (l >= r) {
      return;
    }
    let m = Math.floor((l + r) / 2);
    await mergeSort(l, m);
    await mergeSort(m + 1, r);
    await merge(l, m, r);
  }

  async function merge(l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;
    let L = new Array(n1);
    let R = new Array(n2);
    for (let i = 0; i < n1; i++) {
      L[i] = parseInt(bars[l + i].style.height);
      bars[l + i].classList.add("highlight");
      await sleep(100);
      bars[l + i].classList.remove("highlight");
    }
    for (let j = 0; j < n2; j++) {
      R[j] = parseInt(bars[m + 1 + j].style.height);
      bars[m + 1 + j].classList.add("highlight");
      await sleep(100);
      bars[m + 1 + j].classList.remove("highlight");
    }
    let i = 0;
    let j = 0;
    let k = l;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        bars[k].style.height = L[i] + "px";
        i++;
      } else {
        bars[k].style.height = R[j] + "px";
        j++;
      }
      bars[k].classList.add("highlight");
      await sleep(100);
      bars[k].classList.remove("highlight");
      k++;
    }
    while (i < n1) {
      bars[k].style.height = L[i] + "px";
      bars[k].classList.add("highlight");
      await sleep(100);
      bars[k].classList.remove("highlight");
      i++;
      k++;
    }
    while (j < n2) {
      bars[k].style.height = R[j] + "px";
      bars[k].classList.add("highlight");
      await sleep(100);
      bars[k].classList.remove("highlight");
      j++;
      k++;
    }
  }

  for (let i = 0; i < bars.length; i++) {
    bars[i].classList.remove("highlight");
  }
  await mergeSort(0, bars.length - 1);
};

export default mergeSorting;
