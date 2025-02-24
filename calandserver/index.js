const cal = require("./cal");

let a = 21;
let b = 3;
let operation = "sub";

switch (operation) {
  case "add":
    console.log(`addition: ${cal.add(a, b)}`);
    break;
  case "sub":
    console.log(`subtraction: ${cal.sub(a, b)}`);
    break;
  case "mul":
    console.log(`multiplication: ${cal.mul(a, b)}`);
    break;
  case "div":
    console.log(`division: ${cal.div(a, b)}`);
    break;
  default:
    console.log("calculation invalid");
}