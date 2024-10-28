// JavaScript for Toggling the Slider
const MenuBar = document.querySelector(".menu-bar");
const slider = document.querySelector(".slider");

MenuBar.addEventListener("click", () => {
  slider.classList.toggle("slider_coming");
});



// Frequently Asked Question Area Js
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const toggle = element.querySelector('.faq-toggle');
    
    if (answer.style.display === "block") {
        answer.style.display = "none";
        toggle.textContent = "+";
    } else {
        answer.style.display = "block";
        toggle.textContent = "−";
    }
}


