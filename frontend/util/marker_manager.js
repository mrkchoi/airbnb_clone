
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

    const mapIcon = {
      path: "m22,-28.38281l-44,0l0,20l16,0l6,5l6,-5l16,0l0,-20z",
      labelOrigin: new google.maps.Point(0, -18),
      fillColor: "white",
      fillOpacity: 1,
      scale: 1.15,
      strokeColor: "#484848",
      strokeWeight: 0.3
    };

    if (!this.markers[listing.id]) {
      let marker = new google.maps.Marker({
        position: myPosition,
        animation: google.maps.Animation.DROP,
        map: this.map,
        title: listing.name,
        icon: mapIcon,
        label: {
          text: `$${listing.price}`,
          fontSize: "13px",
          fontWeight: "bold",
          color: "#484848"
        }
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
