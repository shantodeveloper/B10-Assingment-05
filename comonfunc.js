// input amount felad
function getInputAmount(id) {
  getinput = document.getElementById(id).value;
  inputNumber = parseFloat(getinput);
  return inputNumber;
}
// inner balanece check
function getInnerAmount(id) {
  innerbalance = document.getElementById(id).innerText;
  balanceNumber = parseFloat(innerbalance);
  return balanceNumber;
}
