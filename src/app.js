/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

//window.onload = function() {
//write your code here
//  console.log("Hello Rigo from the console!");
//};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];

function excuseGenerator(array1, array2, array3, array4) {
  sentence = "";

  for (array of [array1, array2, array3, array4]) {
    // I define a big array made of the array inputs. Then, I make a for of that array
    positionTemp = Math.floor(Math.random() * array.length);
    sentence = sentence + " " + array[positionTemp];
    // console.log(positionTemp);
  }
  return sentence;
}

const excuse = excuseGenerator(who, action, what, when);

console.log(excuse);

const test = document.getElementById("excuse");
test.innerHTML = excuse;
