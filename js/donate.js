document
  .getElementById('donate-btn')
  .addEventListener('click', function (event) {
    event.preventDefault;
    console.log(222);
    const result = getInputAmount('input-amount');
    console.log(result);
  });
