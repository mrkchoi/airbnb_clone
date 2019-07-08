import React from 'react';
import ListingIndexContainer from '../listings/listing_index_container';
import ListingMap from '../listings/listing_map';
import Header from '../navbar/header';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      listings,
      fetchListings,
      fetchListing,
      updateFilter,
      currentUser,
      mapSearchCoords
    } = this.props;

    return (
      <div className="search__container-main">
        <Header type={"header__listing"} currentUser={currentUser} />
        <ListingIndexContainer />
        <ListingMap
          listings={listings}
          updateFilter={updateFilter}
          mapSearchCoords={mapSearchCoords}
        />
      </div>
    );
  }
}

export default Search;