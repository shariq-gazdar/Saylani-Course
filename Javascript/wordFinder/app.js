let para = document.querySelector("p").innerHTML;
let counterHtml = document.querySelector("h1");
let findingWord = prompt("Enter the word to find");
let counter = 0;
console.log(para);

let splitStr = para.split(/(\s+)/);
console.log(splitStr);
splitStr.forEach((s) => {
  if (s == findingWord) {
    counter++;
  }
});
counterHtml.innerHTML = counter;
