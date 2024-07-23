function quickSortSort(array) {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[0]; // 1) pivtot = 6
  let left = []; // left = [3, 1, 2]
  let right = []; // right = [7]
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([6, 7, 3, 1, 2]));
