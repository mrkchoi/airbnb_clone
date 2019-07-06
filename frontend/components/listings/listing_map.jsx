import React from 'react';

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="map-container" ref="map"></div>
    );
  }
}

export default ListingMap;