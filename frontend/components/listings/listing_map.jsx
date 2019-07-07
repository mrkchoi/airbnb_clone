import React from 'react';
import MarkerManager from '../../util/marker_manager';

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: {
        lat: 37.773972,
        lng: -122.431297
      },
      zoom: 13
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.listings);
  }
  
  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();

      let bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };

      this.props.updateBounds(bounds);
    });
  }
  
  

  render() {
    let { listings } = this.props;

    return (
      <div id="map-container" ref={map => this.mapNode = map}></div>
    );
  }
}

export default ListingMap;
