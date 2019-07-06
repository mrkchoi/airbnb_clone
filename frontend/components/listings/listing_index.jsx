import React from 'react';
import ListingIndexItem from './ListingIndexItem';

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListings();
    // this.props.fetchListing(102);
  }
  
  render () {
    let { listings } = this.props;
    
    if (!listings) {
      return (
        <div>loading...</div>
      )
    }

    return (
      <div className="listingindex__main">
        <h2>
          ListingIndex
        </h2> 

        <div>
          {listings.map((listing, idx) => <ListingIndexItem listing={listing} key={idx}/>)}
        </div>
      </div>
    );  
  }
};

export default ListingIndex;