
class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings) {
    console.log('updating markers...');
    
    if (listings !== []) {
      for (let i = 0; i < listings.length; i++) {
        this.createMarkerFromListing(listings[i]);
      }
    }
  }

  createMarkerFromListing(listing) {
    let myPosition = {
      lat: listing.lat,
      lng: listing.long
    };

    if (!this.markers[listing.id]) {
      let marker = new google.maps.Marker({
        position: myPosition,
        map: this.map,
        title: 'Testinggg'
      });

      this.markers[listing.id] = marker;
    }
  }
}

export default MarkerManager;
