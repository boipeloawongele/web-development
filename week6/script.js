// 1. Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
  alert('Button Clicked!');
});

document.addEventListener('keydown', (e) => {
  document.getElementById('keyPressInfo').textContent = `You pressed: ${e.key}`;
});

// Double click or long press
const secretBox = document.getElementById('secretBox');
let pressTimer;

secretBox.addEventListener('dblclick', () => {
  secretBox.classList.toggle('secret');
});

secretBox.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    secretBox.classList.toggle('secret');
  }, 1000);
});

secretBox.addEventListener('mouseup', () => {
  clearTimeout(pressTimer);
});

// 2. Interactive Elements
document.getElementById('colorChanger').addEventListener('click', (e) => {
  e.target.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});

// Image gallery
const images = [
  'https://via.placeholder.com/300x200?text=Image+1',
  'https://via.placeholder.com/300x200?text=Image+2',
  'https://via.placeholder.com/300x200?text=Image+3'
];
let currentImage = 0;

const galleryImg = document.getElementById('galleryImg');
document.getElementById('prevBtn').addEventListener('click', () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  galleryImg.src = images[currentImage];
});
document.getElementById('nextBtn').addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  galleryImg.src = images[currentImage];
});

// Tabs
const tabBtns = document.querySelectorAll('.tabBtn');
const tabContents = document.querySelectorAll('.tabContent');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabContents.forEach(tc => tc.classList.remove('active'));
    document.getElementById(`tab${btn.dataset.tab}`).classList.add('active');
  });
});

// 3. Form Validation
const form = document.getElementById('myForm');
const password = document.getElementById('password');
const feedback = document.getElementById('passwordFeedback');

password.addEventListener('input', () => {
  if (password.value.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters';
  } else {
    feedback.textContent = '✅ Password looks good!';
    feedback.style.color = 'green';
  }
});

form.addEventListener('submit', (e) => {
  const email = document.getElementById('email');
  const name = document.getElementById('name');

  if (!name.value || !email.value || !password.value) {
    alert('All fields are required!');
    e.preventDefault();
    return;
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email.value)) {
    alert('Enter a valid email!');
    e.preventDefault();
  }

  if (password.value.length < 8) {
    alert('Password too short!');
    e.preventDefault();
  }
});





  
  