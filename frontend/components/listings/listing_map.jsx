import React from 'react';
import MarkerManager from '../../util/marker_manager';

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: {
        lat: 37.771393,
        lng: -122.405495
      },
      zoom: 13
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listings);

    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      let currentBounds = this.map.getBounds();

      let bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      
      this.props.updateBounds(bounds);
    });
  }
  
  componentDidUpdate(prevProps, prevState) {
    this.MarkerManager.updateMarkers(this.props.listings);
  }
  
  

  render() {
    let { listings } = this.props;

    return (
      <div id="map-container" ref={map => this.mapNode = map}></div>
    );
  }
}

export default ListingMap;
