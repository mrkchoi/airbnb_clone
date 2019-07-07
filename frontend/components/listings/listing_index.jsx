import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

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

  componentDidUpdate() {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 1);
  }

  render() {
    let { listings } = this.props;

    if (this.state.loading || !listings) {
      // debugger
      return (
        <div className="listingindex__main">
          <PulseLoader
            className="loading-dots"
            sizeUnit={"px"}
            size={12}
            color={"#008489"}
            loading={this.state.loading}
          />
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