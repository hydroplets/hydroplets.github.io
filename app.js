function initMap() {
  var head = document.getElementsByTagName("head")[0];

  // Save the original method
  var insertBefore = head.insertBefore;

  // Replace it!
  head.insertBefore = function (newElement, referenceElement) {
    if (
      newElement.href &&
      newElement.href.indexOf(
        "https://fonts.googleapis.com/css?family=Roboto"
      ) === 0
    ) {
      return;
    }

    insertBefore.call(head, newElement, referenceElement);
  };

  var uluru = { lat: 13.052701, lng: 80.235727 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });
  var marker = new google.maps.Marker({ position: uluru, map: map });
}
