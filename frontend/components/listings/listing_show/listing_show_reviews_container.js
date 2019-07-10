import { connect } from 'react-redux';
import ListingShowReviews from './listing_show_reviews';
import { openModal } from '../../../actions/modal_actions';

const msp = (state, ownProps) => {
  return ({
    reviews: ownProps.reviews,
    listing: ownProps.listing
  });
}

const mdp = dispatch => {
  return ({
    openModal: type => dispatch(openModal(type))
  });
}

export default connect(msp, mdp)(ListingShowReviews);