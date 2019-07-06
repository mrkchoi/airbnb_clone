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

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listings);
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
