// Dark mode toggle logic

const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

// Load saved mode from localStorage
if(localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if(body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});
