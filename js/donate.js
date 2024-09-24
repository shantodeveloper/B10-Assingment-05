function handleClick(titel, input, balance) {
  const titleElement = document.getElementById(titel).innerText;

  const inputAmounts = getInputAmount(input);
  const innerbalance = getInnerAmount(balance);
  const accountbalance = getInnerAmount('acount-balance');

  totalbalance = inputAmounts + innerbalance;
  countbalancedescris = accountbalance - inputAmounts;
  document.getElementById('acount-balance').innerText = countbalancedescris;
  document.getElementById(balance).innerText = totalbalance;

  const historyadd = document.getElementById('history-card');

  const history = document.createElement('div');
  history.innerHTML = `<h1 class="font-bold mb-4 border p-8">${inputAmounts} Taka is Donate for ${titleElement}</h1> `;
  historyadd.appendChild(history);
  document.getElementById('my_modal_6').checked = true;
}
