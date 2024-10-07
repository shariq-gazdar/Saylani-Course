let list = [1, 2, 3, 4, 5, 6, 7, 8, 5, 5, 6, 7, 7, 8, 9, 4, 3, 4];
let result = [];
function sumArr(lis) {
  for (let i = 0; i < lis.length; i++) {
    let a = lis[i];
    for (let j = 0; j < lis.length; j++) {
      // const element = array[j];
      let b = lis[j];
      if (a + b === 10) {
        result.push([a, b]);
      }
    }
  }
}
sumArr(list);
console.log(result);
