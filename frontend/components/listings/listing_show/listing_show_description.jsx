import React from "react";

class ListingShowDescription extends React.Component {
  render() {
    let { listing } = this.props;

    return (
      <div className="listingshow__desc-container">
        <div className="listingshow__desc-content-wrapper">
          <div className="listingshow__desc-flair">
            <p className="listingshow__desc-flairitem">
              {listing.num_guests} guests
            </p>
            <p className="listingshow__desc-flairitem">
              {listing.listing_type}
            </p>
            <p className="listingshow__desc-flairitem">
              {listing.num_guests === 1
                ? `1 guest`
                : `${listing.num_guests} guests`}
            </p>
            <p className="listingshow__desc-flairitem">
              {listing.num_baths === 1
                ? `1 bath`
                : `${listing.num_baths} baths`}
            </p>
          </div>
          <div className="listingshow__desc-content">
            {listing.description}
          </div>
        </div>
        <div className="listingshow__desc-content">
          <div className="listingshow__desc-host-img" />
          <div className="listingshow__desc-host-review-outer">
            <p className="listingshow__desc-host-review-text">
              “Enjoy dinner and/or a glass of wine on our rooftop terrace
              overlooking the doom of City Hall.” (Add host review here...)
            </p>
            <p className="listingshow__desc-host-review-author">
              Hosted by (hostname goes here...)
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingShowDescription;
