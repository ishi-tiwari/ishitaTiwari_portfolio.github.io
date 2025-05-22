// Fade-in animation on scroll
const hiddenSections = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

hiddenSections.forEach(section => {
  observer.observe(section);
});

// Typewriter effect
const words = ["Unity Developer", "Game Designer", "C# Programmer"];
let i = 0, j = 0, currentWord = "", isDeleting = false;
const el = document.getElementById("typewriter");

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
      el.textContent = currentWord;
    }
    if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
      el.textContent = currentWord;
    }
    if (j === words[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
    setTimeout(type, isDeleting ? 50 : 150);
  }
}
type();
