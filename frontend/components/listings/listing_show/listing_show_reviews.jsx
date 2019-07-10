import React from "react";
import ListingShowReviewSingle from './listing_show_review_single';

class ListingShowReviews extends React.Component {
  render() {
    let { reviews, listing } = this.props;

    // Check for review preview count
    let listingPreview;
    if (reviews.length >= 6) {
      listingPreview =  (
        <div className="listingshow__reviews-reviews">
          <div className="listingshow__reviews-row">
            <ListingShowReviewSingle review={reviews[0]} />
            <ListingShowReviewSingle review={reviews[1]} />
          </div>
          <div className="listingshow__reviews-row">
            <ListingShowReviewSingle review={reviews[2]} />
            <ListingShowReviewSingle review={reviews[3]} />
          </div>
          <div className="listingshow__reviews-row">
            <ListingShowReviewSingle review={reviews[4]} />
            <ListingShowReviewSingle review={reviews[5]} />
          </div>
        </div>
      );
    } else if (reviews.length >= 4) {
      listingPreview =  (
        <div className="listingshow__reviews-reviews">
          <div className="listingshow__reviews-row">
            <ListingShowReviewSingle review={reviews[0]} />
            <ListingShowReviewSingle review={reviews[1]} />
          </div>
          <div className="listingshow__reviews-row">
            <ListingShowReviewSingle review={reviews[2]} />
            <ListingShowReviewSingle review={reviews[3]} />
          </div>
        </div>
      );
    } else if (reviews.length >= 2) {
      listingPreview =  (
        <div className="listingshow__reviews-reviews">
          <div className="listingshow__reviews-row">
            <ListingShowReviewSingle review={reviews[0]} />
            <ListingShowReviewSingle review={reviews[1]} />
          </div>
        </div>
      );
    } else {
      listingPreview =  (
        <div className="listingshow__reviews-reviews">
          <div className="listingshow__reviews-row">
            <p className="listingshow__reviews-empty">
              There are currently no reviews for this listing ...
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="listingshow__reviews-container">
        <h3 className="listingshow__reviews-header">
          Reviews
        </h3>
        {listingPreview}

        <a href="#" className="listingshow__reviews-btn">Read all {listing.num_reviews} reviews</a>

      </div>
    ); 
  }
}

export default ListingShowReviews;
