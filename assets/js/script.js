// assets/js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map if the 'map' element exists (only on index.html)
    if (document.getElementById('map')) {
        initMap();
    }

    // Add scroll effect to navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Adjust scroll threshold as needed
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});

function initMap() {
    // Coordinates for Alto Trujillo, Trujillo, La Libertad, Peru
    // You might need to refine these coordinates for the exact "MZ. H LOTE 8"
    const lat = -8.0837; // Approximate latitude for Alto Trujillo
    const lon = -78.9664; // Approximate longitude for Alto Trujillo

    const map = L.map('map').setView([lat, lon], 15); // Zoom level 15

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lon]).addTo(map)
        .bindPopup('INVERSIONES EL AMUNA S.A.C.<br>MZ. H LOTE 8 Alto Trujillo, Trujillo')
        .openPopup();
}