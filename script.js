
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const feedbackModal = document.getElementById('feedbackModal');

// To Open the modal when the button is clicked
openModalBtn.addEventListener('click', () => {
  feedbackModal.style.display = 'flex'; // to display the modal
});

// To close up the modal when the close and submit buttons are clicked
closeModalBtn.addEventListener('click', () => {
  feedbackModal.style.display = 'none'; // Hides the modal
});

window.addEventListener('click', (event) => {
  if (event.target === feedbackModal) {
    feedbackModal.style.display = 'none'; // Hides up the modal
  }
});


const ratingButtons = document.querySelectorAll('.rating-btn');
let selectedValue = null;

ratingButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    ratingButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedValue = btn.dataset.value;
  });
});

document.querySelector('.cancel-btn').addEventListener('click', () => {
  ratingButtons.forEach(b => b.classList.remove('active'));
  selectedValue = null;
  feedbackModal.style.display = 'none'; //closes up the modal when it is optionally cancelled
});

document.querySelector('.submit-btn').addEventListener('click', () => {
  if (selectedValue) {
    alert(`Thanks for rating us a ${selectedValue}/10!`);
    feedbackModal.style.display = 'none'; //  closes up the modal aftera successful  submission
  } else {
    alert('Please select a rating first!');
  }
});
