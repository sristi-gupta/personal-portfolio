const menuIcon = document.querySelector('#menuIcon');
const navLinks = document.querySelector('#navLinks');

menuIcon.onclick = () => {
  navLinks.classList.toggle('active');
};

// Close the mobile menu after a link is tapped
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Simple front-end contact form handling (no backend wired up yet)
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = contactForm.querySelector('input[type="email"]').value;
    window.location.href = `mailto:sristigupta027@gmail.com?subject=Hello from your portfolio&body=Reply to: ${encodeURIComponent(email)}`;
  });
}
