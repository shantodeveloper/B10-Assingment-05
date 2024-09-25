// clik donation btn click
function handleClick(titel, input, balance) {
  const titleElement = document.getElementById(titel).innerText;
  const inputAmounts = getInputAmount(input);
  const innerbalance = getInnerAmount(balance);
  const accountbalance = getInnerAmount('acount-balance');
  if (isNaN(inputAmounts)) {
    alert('check input feald wrong amount');
    return;
  }
  if (inputAmounts < 0) {
    alert('The amount cannot be negative.');
    return;
  }
  if (inputAmounts <= accountbalance) {
    totalbalance = inputAmounts + innerbalance;
    countbalancedescris = accountbalance - inputAmounts;
    document.getElementById('acount-balance').innerText = countbalancedescris;
    document.getElementById(balance).innerText = totalbalance;
    document.getElementById(input).value = '';
    const historyadd = document.getElementById('history-card');
    const history = document.createElement('div');
    history.innerHTML = `<h1 class="font-bold mb-4 border p-8">${inputAmounts} Taka is Donate for ${titleElement}  <br> <br> ${new Date()}</h1> 
  `;
    historyadd.appendChild(history);

    document.getElementById('my_modal_6').checked = true;
  } else {
    alert('your balance is low');
  }
}
