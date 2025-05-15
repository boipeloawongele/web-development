const box = document.getElementById('box');
const button = document.getElementById('animateBtn');
const colorPicker = document.getElementById('colorPicker');

// Load saved color preference
window.onload = () => {
  const savedColor = localStorage.getItem('boxColor');
  if (savedColor) {
    box.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }
};

// Save color preference
colorPicker.addEventListener('change', () => {
  const newColor = colorPicker.value;
  box.style.backgroundColor = newColor;
  localStorage.setItem('boxColor', newColor);
});

// Trigger animation
button.addEventListener('click', () => {
  box.classList.remove('animate');
  void box.offsetWidth; // restart animation
  box.classList.add('animate');
});
