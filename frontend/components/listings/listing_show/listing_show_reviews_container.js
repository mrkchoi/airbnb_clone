import { connect } from 'react-redux';
import ListingShowReviews from './listing_show_reviews';

const msp = (state, ownProps) => {
  return ({
    reviews: ownProps.reviews,
    listing: ownProps.listing
  });
}

const mdp = dispatch => {
  return ({
    // fetchReview: reviewId => dispatch(fetchReview(reviewId))
  });
}

export default connect(msp, null)(ListingShowReviews);