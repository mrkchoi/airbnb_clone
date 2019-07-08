import React from 'react';
import ListingIndex from '../listings/listing_index';
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
        <ListingIndex
          listings={listings}
          fetchListings={fetchListings}
          fetchListing={fetchListing}
        />
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