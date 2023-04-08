function count(input) {
  const sum = input.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else acc[cur] = 1;
    return acc;
  }, {});
  return sum;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  const sum = input.reduce((acc, cur) => {
    if (!acc[cur.key]) {
      acc[cur.key] = 0;
    }
    acc[cur.key] += cur.value;
    return acc;
  }, {});
  return sum;
}

let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2));
//should print {a:6, b:1, c:7}
