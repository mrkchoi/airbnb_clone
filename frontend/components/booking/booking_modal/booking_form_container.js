import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookingForm from './booking_form';

const msp = (state, ownProps) => {
  let listingId = ownProps.match.params.listingId;  

  return ({
    listing: state.entities.listings[listingId]
  });
}

const mdp = dispatch => {
  return ({
    fetchListing: listingId => dispatch(fetchListing(listingId))
    // Add in submit booking action here
  });
}

export default withRouter(connect(msp, mdp)(BookingForm));