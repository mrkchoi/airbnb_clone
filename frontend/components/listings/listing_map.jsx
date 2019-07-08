import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
    this.renderMap = this.renderMap.bind(this);
  }

  componentDidMount() {
    // let center = {
    //   lat: 37.773972,
    //   lng: -122.431297
    // }

    this.renderMap();
  }
  
  componentDidUpdate(prevProps) {
    this.MarkerManager.updateMarkers(this.props.listings);
    if (this.props.mapSearchCoords !== prevProps.mapSearchCoords) {
      this.renderMap();
    }
  }

  componentWillUnmount() {
    google.maps.event.clearListeners(this.map, 'idle');
  }

  renderMap() {
    const mapOptions = {
      center: this.props.mapSearchCoords,
      zoom: 13,
      gestureHandling: "greedy"
    };

    // const map = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  registerListeners() {
    
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      
      let bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };

      this.props.updateFilter("bounds", bounds);
    });
  }
  
  

  render() {
    let { listings } = this.props;

    return (
      <div id="map-container" ref={map => this.mapNode = map}></div>
    );
  }
}

export default withRouter(ListingMap);
