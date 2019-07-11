import React from "react";
import MarkerManager from '../../../util/marker_manager';


class ListingShowLocation extends React.Component {
  constructor(props) {
    super(props);
    this.renderMap = this.renderMap.bind(this);
  }

  componentDidMount() {
    this.renderMap();
  }
  
  renderMap() {
    let { lat, long } = this.props.listing;

    const mapOptions = {
      center: {
        lat: lat,
        lng: long
      },
      zoom: 15,
      gestureHandling: 'none',
      zoomControl: false
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);

    this.marker = new google.maps.Circle({
      center: {
        lat: lat,
        lng: long
      },
      radius: 150,
      strokeColor: "#71cec9",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#90ece4",
      fillOpacity: 0.5,
      map: this.map
    });

    // const map = this.refs.map;
    // this.MarkerManager = new MarkerManager(this.map);

    // this.registerListeners();
    // this.MarkerManager.updateMarkers([this.props.listing]);
  }
  
  render() {
    let { listing } = this.props;

    return (
      <div className="listingshow__location-container">
        <div className="listingshow__location-content-wrapper">
          <div className="listingshow__location-header-wrapper">
            <h3 className="listingshow__location-header">Location</h3>
            <p className="listingshow__location-location-subheader">                {listing.location}
            </p>
            <p className="location_description-location-description">
              {listing.location_description}
            </p>
          </div>
        </div>
        <div className="listingshow__location-map-outer">
          <div className="show-map-container" id="map-container" ref={map => this.mapNode = map}></div>


          <p className="listingshow__location-map-text">
            Exact location provided after booking
          </p>
        </div>
      </div>
    );
  }
}

export default ListingShowLocation;
