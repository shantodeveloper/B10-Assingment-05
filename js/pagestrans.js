// home page to blog page
document.getElementById('blog-page').addEventListener('click', function () {
  window.location.href = '/blog.html';
});

// btn id includes
const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');

// click history btn//
historyBtn.addEventListener('click', function () {
  document.getElementById('donate-card').classList.add('hidden');
  document.getElementById('history-card').classList.remove('hidden');
  donationBtn.classList.remove('bg-[#B4F461]');
  historyBtn.style.backgroundColor = '#B4F461';
  donationBtn.style.backgroundColor = '';
});

// click donate btn//

donationBtn.addEventListener('click', function () {
  document.getElementById('donate-card').classList.remove('hidden');
  document.getElementById('history-card').classList.add('hidden');
  donationBtn.style.backgroundColor = '#B4F461';
  historyBtn.style.backgroundColor = '';
});
