import React from "react";
import RenderStars from '../../stars/render_stars';

class ListingShowInfoOverlay extends React.Component {
  
  render() {
    let { listing } = this.props;

    return (
      <div className="listingshow__overlay-container">
        <div className="listingshow__overlay-listing">
          <div className="listingshow__overlay-logo-outer">
            <div className="listingshow__overlay-logo" />
          </div>
          <div className="listingshow__overlay-listing-outer">
            <h3 className="listingshow__overlay-listingtitle">
              {listing.title}
            </h3>
            <div className="listingshow__overlay-listingstars">
              {RenderStars(listing.average_rating)}
              <div className="listingshow__overlay-numratings">{listing.num_reviews}</div>
            </div>
          </div>
        </div>
        <div className="listingshow__overlay-availability-outer">
          <div className="listingshow__overlay-pricing">
            ${listing.price} <span>/ night</span>
          </div>
          <div className="listingshow__overlay-availability-btn-outer">
            <button className="listingshow__overlay-availability-btn">
              Check availability
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingShowInfoOverlay;
