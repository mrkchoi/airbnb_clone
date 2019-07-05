import React from 'react';

class ListingIndexItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.listing.title}
        {this.props.listing.description}
        {this.props.listing.photoUrls.map((photo, idx) => {
          return <img src={photo} key={idx} style={{maxWidth: "250px"}}/>
        })}
      </div>
    );
  }
}

export default ListingIndexItem;