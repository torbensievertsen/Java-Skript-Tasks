function welcomeMsg(Name) {
  return "Welcome " + Name;
}
function calcGrossPrice(netPrice, taxRate) {
  return netPrice + netPrice * taxRate;
}
function addPositive(a, b) {
  if (a > 0 && b > 0) {
    return a + b;
  } else if (a < 0 && b > 0) {
    return a * -1 + b;
  } else if (a > 0 && b < 0) {
    return a + b * -1;
  } else if (a < 0 && b < 0) {
    return a * -1 + b * -1;
  }
}

// TODO: implement welcomeMsg function

console.log(welcomeMsg("Jane"));
// Welcome Jane!

console.log(welcomeMsg("Marc"));
// Welcome Marc!
// TODO: implement calcGrossPrice function

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

// TODO: Implement the addPositive function

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9
