

function showGetInTouch() {
    document.getElementById("popupForm").style.display = "block";
  }

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }



document.getElementById('coordinatesForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the entered latitude and longitude values
  var latitude = document.getElementById('latitude').value;
  var longitude = document.getElementById('longitude').value;

  // Do something with the entered coordinates
  console.log('Entered Latitude:', latitude);
  console.log('Entered Longitude:', longitude);

  // Call a function to perform actions with the entered coordinates
  performActionsWithCoordinates(latitude, longitude);
});


function performActionsWithCoordinates(latitude, longitude) {
  // Example: Display entered coordinates on the map
  var position = { lat: parseFloat(latitude), lng: parseFloat(longitude) };

  // Create a marker on the map to indicate the entered coordinates
  var marker = new google.maps.Marker({
    position: position,
    map: map
  });

  // Center the map on the entered coordinates
  map.setCenter(position);
}

document.getElementById('showCoordinatesForm').addEventListener('click', function() {
  document.getElementById('coordinatesForm').style.display = 'block';
});
  
