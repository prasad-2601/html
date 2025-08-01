// This script updates the Google Maps iframe based on the user's input.

const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your actual API key

document.addEventListener('DOMContentLoaded', function () {
  const locationInput = document.getElementById('deliveryLocation');
  const mapFrame = document.getElementById('gmap');

  if (locationInput && mapFrame) {
    locationInput.addEventListener('change', function () {
      const location = encodeURIComponent(this.value);
      mapFrame.src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${location}`;
    });
  }
});