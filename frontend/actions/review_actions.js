import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS_BY_LISTING_ID = "RECEIVE_REVIEWS_BY_LISTING_ID";

const receiveReviewsByListingId = (reviews) => {
  return ({
    type: RECEIVE_REVIEWS_BY_LISTING_ID,
    reviews: { reviews }
  })
};

export const fetchReviewsByListingId = listingId => dispatch => {
  return ReviewApiUtil.fetchReviewsByListingId(listingId)
    .then(reviews => dispatch(receiveReviewsByListingId(reviews)));
}
