function getInputAmount(id) {
  getinput = document.getElementById(id).value;
  inputNumber = parseFloat(getinput);
  return inputNumber;
}

function getInnerAmount(id) {
  innerbalance = document.getElementById(id).innerText;
  balanceNumber = parseFloat(innerbalance);
  return balanceNumber;
}
