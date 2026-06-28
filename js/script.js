// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Home page: CTA button interaction
const ctaButton = document.getElementById('ctaButton');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        alert('Welcome! You clicked the button 🎉');
    });
}

// Contact page: form handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            formStatus.textContent = `✅ Thanks, ${name}! Your message has been received.`;
            formStatus.style.color = '#1abc9c';
            contactForm.reset();
        } else {
            formStatus.textContent = '⚠️ Please fill in all fields.';
            formStatus.style.color = '#e74c3c';
        }
    });
}
