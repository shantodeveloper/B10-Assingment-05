function getInputAmount(id) {
  const getinput = document.getElementById(id).value.trim();
  const isValidNumber = /^[0-9]+(\.[0-9]+)?$/.test(getinput);
  if (!isValidNumber) {
    return NaN;
  }
  return parseFloat(getinput);
}
// inner balanece check
function getInnerAmount(id) {
  innerbalance = document.getElementById(id).innerText;
  balanceNumber = parseFloat(innerbalance);
  return balanceNumber;
}
