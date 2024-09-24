function handleClick(titel, input, balance) {
  const titleElement = document.getElementById(titel);
  const inputAmounts = getInputAmount(input);
  const innerbalance = getInnerAmount(balance);
  const accountbalance = getInnerAmount('acount-balance');

  totalbalance = inputAmounts + innerbalance;
  countbalancedescris = accountbalance - inputAmounts;
  document.getElementById('acount-balance').innerText = countbalancedescris;
  document.getElementById(balance).innerText = totalbalance;
  document.getElementById('my_modal_6').checked = true;
}
