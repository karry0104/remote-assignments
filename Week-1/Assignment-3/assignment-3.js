function countAandB(input) {
  let num = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a" || input[i] === "b") {
      num++;
    } else continue;
  }
  return num;
}

function toNumber(input) {
  const toN = input.map((el) => {
    return el.charCodeAt() - "a".charCodeAt() + 1;
  });
  return toN;
}

let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(countAandB(input1)); // should print 4
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1,3]

let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
