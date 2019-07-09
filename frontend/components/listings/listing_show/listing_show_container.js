import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing } from '../../../actions/listing_actions';
import { fetchReviewsByListingId } from '../../../actions/review_actions';
import { fetchHost } from "../../../actions/user_actions";

const msp = (state, ownProps) => {
  let listingId = ownProps.match.params.listingId;
  let listing = state.entities.listings[listingId];

  return ({
    listing: listing,
    currentUser: state.entities.users[state.session.id],
    reviews: state.entities.reviews,
    users: state.entities.users
  });
}

const mdp = dispatch => {
  return {
    fetchListing: id => dispatch(fetchListing(id)),
    fetchReviews: listingId => dispatch(fetchReviewsByListingId(listingId)),
    fetchHost: hostId => dispatch(fetchHost(hostId))
  };
}

export default connect(msp, mdp)(ListingShow);
