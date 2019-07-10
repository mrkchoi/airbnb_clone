import React from "react";

class ListingShowDescription extends React.Component {
  render() {
    let { listing, host } = this.props;

    if (!this.props.listing || !this.props.host) {
      return null;
    }

    let quote = [
    `"Enjoy dinner and / or a glass of wine on our rooftop terrace
    overlooking the dome of City Hall."`,
    `"Rest easy in our thoughtfully decorated home with all amenities included."`,
    `"A great home base for exploring all SF has to offer."`,
    `"Take in iconic views from a city sanctuary nestled in a quiet neighorhood."`
    ];
    let randomQuote = quote[Math.floor(Math.random()*quote.length)];



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
        <div className="listingshow__desc-host">
          <div className="listingshow__desc-host-img-wrapper">
            <div className="listingshow__desc-host-img" style={{backgroundImage: `url(${host.photoUrl})`}}></div>
          </div>
          <div className="listingshow__desc-host-review-outer">
            <p className="listingshow__desc-host-review-text">
              {randomQuote}
            </p>
            <p className="listingshow__desc-host-review-author">
              Hosted by {host.firstname}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingShowDescription;
