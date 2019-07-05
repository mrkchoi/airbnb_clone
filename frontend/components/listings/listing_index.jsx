import React from 'react';
import ListingIndexItem from './ListingIndexItem';

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListings();
  }
  
  render () {
    let { listings } = this.props;
    
    if (!listings) {
      return (
        <div>loading...</div>
      )
    }

    return (
      <div>
        <h2>
          ListingIndex
        </h2> 

        <ul>
          {listings.map((listing, idx) => <ListingIndexItem listing={listing} key={idx}/>)}
        </ul>
      </div>
    );  
  }
};

export default ListingIndex;