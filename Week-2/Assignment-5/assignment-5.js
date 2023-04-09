// 從中間的數值開始找，如果indexMiddle 大於 target，就往indexMiddle左邊找，
// 如果indexMiddle 小於 target，就往indexMiddle右邊找，
// 跟一般for loop比起來，Binary Search更快，因為for loop是從第一個index開始找

function binarySearchPosition(numbers, target) {
  let indexLeft = 0;
  let indexRight = numbers.length - 1;
  while (indexLeft <= indexRight) {
    let indexMiddle = Math.floor((indexRight + indexLeft) / 2);
    if (numbers[indexMiddle] === target) {
      return indexMiddle;
    }
    if (numbers[indexMiddle] < target) {
      indexLeft = indexMiddle + 1;
    } else indexRight = indexMiddle - 1;
  }
  return -1;
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1));
// should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6));
// should print 3
