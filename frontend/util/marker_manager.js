
class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings) {    
    let listingObj = {};
    listings.forEach(listing => listingObj[listing.id] = listing);

    listings  
      .filter(listing => !this.markers[listing.id])
      .forEach(newListing => this.createMarkerFromListing(newListing));

    Object.keys(this.markers)
      .filter(listingId => !listingObj[listingId])
      .forEach(listingId => this.removeMarker(this.markers[listingId]));
      
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

  removeMarker(marker) {
    if (this.markers[marker.id]) {
      this.markers[marker.id].setMap(null);
      delete this.markers[marker.id];
    }
  
  }
}

export default MarkerManager;
