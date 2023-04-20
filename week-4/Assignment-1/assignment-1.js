/*   A   */
function delayedResult(n1, n2, delayTime, callback) {
  setTimeout(() => {
    const sum = n1 + n2;
    callback(sum);
  }, delayTime);
}
delayedResult(4, 5, 3000, function (result) {
  console.log(result);
});
delayedResult(-5, 10, 2000, function (result) {
  console.log(result);
});

/*   B   */
function delayedResultPromise(n1, n2, delayTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sum = n1 + n2;
      resolve(sum);
    }, delayTime);
  });
}
delayedResultPromise(4, 5, 3000).then(console.log);

/*   C   */
async function main() {
  const result = await delayedResultPromise(4, 5, 3000);
  console.log(result);
}
main();
