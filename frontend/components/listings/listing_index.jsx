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
        <h2>ListingIndex</h2>

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