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
    let center = {
      lat: this.props.listing.lat,
      lng: this.props.listing.long,
    }
    const mapOptions = {
      center: center,
      zoom: 15,
      gestureHandling: 'none',
      zoomControl: false
    };

    // const map = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    // this.registerListeners();
    this.MarkerManager.updateMarkers([this.props.listing]);
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
