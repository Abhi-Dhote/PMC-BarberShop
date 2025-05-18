// script.js

document.addEventListener("DOMContentLoaded", () => {
  const bookNowButtons = document.querySelectorAll(".btn.primary");

  bookNowButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Redirecting to booking page...");
      // In a real application, replace the alert with:
      // window.location.href = 'your-booking-url-here';
    });
  });
});

function toggleMenu() {
      document.getElementById('nav').classList.toggle('active');
      document.getElementById('header-contact').classList.toggle('active');
    }