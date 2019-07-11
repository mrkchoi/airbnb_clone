import React from 'react';

class ListingShowMap extends React.Component {

  componentDidMount() {
    let {lat, long } = this.props.listing;
    const mapOptions = {
      center: { 
        lat: lat, 
        lng: long 
      },
      zoom: 9
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    this.marker = new google.maps.Circle({
      center: {
        lat: lat,
        lng: long
      },
      radius: 5000,
      strokeColor: "#71cec9",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#90ece4",
      fillOpacity: 0.6,
      map: this.map
    });
  }

  render() {
    return (
      <div 
        className="listing-map-container" 
        ref={map => this.mapNode = map}></div>
    );
  }
}

export default ListingShowMap;