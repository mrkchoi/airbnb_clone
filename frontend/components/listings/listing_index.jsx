import React from 'react';
import PulseLoaderAnimation from "../loaders/pulse_loader";
import { Link } from 'react-router-dom';
import ListingIndexItem from './ListingIndexItem';

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };

    setTimeout(() => this.setState({ loading: false }), 2500);
  }

  componentDidMount() {
    // this.props.fetchListings();
  }

  render() {
    let { listings, updateSearchCoords } = this.props;
    let listingHeader;
    // debugger

    // Listing Header
    if (listings.length > 0) {
      listingHeader = (
        <div className="listingindex__header-container">
          <h2 className="listingindex__header">{listings.length}+ Airbnb Plus stays</h2>
          <p className="listingindex__header-sub">
            A selection of places to stay verified for quality and design
          </p>
        </div>
      )
    } else {
      listingHeader = (
        <div className="listingindex__header-container">
          <h2 className="listingindex__header">No Airbnb Plus results</h2>
          <p className="listingindex__header-sub">
            Try adjusting your search by moving or zooming out on the map.
          </p>
          <p className="listingindex__header-sub">
            Or see all available listings in{" "}
            <a
              onClick={() => updateSearchCoords(
                37.773972,
                -122.431297
              )}
            >
              San Francisco
            </a>
          </p>
        </div>
      );
    }

    // Loading Animation
    if (this.state.loading) {
      return (
        <div className="listingindex__main loader__container">
          <PulseLoaderAnimation loading={this.state.loading} />
        </div>
      );
    }

    return (
      <div className="listingindex__main">
        {listingHeader}

        <div>
          {listings.map((listing, idx) => (
            <ListingIndexItem listing={listing} key={idx} />
          ))}
        </div>
      </div>
    );
  }
};

export default ListingIndex;