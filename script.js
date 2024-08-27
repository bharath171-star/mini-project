// Ensure contact form is visible by default on page load
document.getElementById('contactForm').style.display = 'block';

// Toggle visibility when Contact Form button is clicked
document.getElementById('contactFormBtn').addEventListener('click', function() {
    document.getElementById('contactForm').style.display = 'block';
    document.getElementById('googleMaps').style.display = 'none';
    this.classList.add('active');
    document.getElementById('mapsBtn').classList.remove('active');
});

// Toggle visibility when Maps button is clicked
document.getElementById('mapsBtn').addEventListener('click', function() {
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('googleMaps').style.display = 'block';
    this.classList.add('active');
    document.getElementById('contactFormBtn').classList.remove('active');
});
