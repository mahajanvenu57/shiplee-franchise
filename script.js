// Scroll-to-Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Accordion Functionality
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const allContents = document.querySelectorAll('.accordion-content');
    allContents.forEach(c => {
        if (c !== content) {
            c.style.display = 'none';
        }
    });

    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
