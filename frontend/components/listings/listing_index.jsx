import React from 'react';
import PulseLoaderAnimation from "../loaders/pulse_loader";

import ListingIndexItem from './ListingIndexItem';

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };

    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  componentDidMount() {
    // this.props.fetchListings();
  }

  // componentDidUpdate() {
  //   setTimeout(() => {
  //     window.dispatchEvent(new Event("resize"));
  //   }, 1);
  // }

  render() {
    let { listings } = this.props;

    if (this.state.loading || !listings) {
      return (
        <div className="listingindex__main">
          <PulseLoaderAnimation loading={this.state.loading} />
        </div>
      );
    }

    return (
      <div className="listingindex__main">
        <div className="listingindex__header-container">
          <h2 className="listingindex__header">
            {listings.length}+ Airbnb Plus stays
          </h2>
          <p className="listingindex__header-sub">
            A selection of places to stay verified for quality and design
          </p>
        </div>

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