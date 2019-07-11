import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchListing } from '../../actions/listing_actions';
import { createBooking } from '../../actions/booking_actions';
import { fetchHost } from '../../actions/user_actions';
import Checkout from './checkout';

const msp = (state, ownProps) => {
  let listingId = ownProps.match.params.listingId;
  let listing = state.entities.listings[listingId]

  return ({
    bookingParams: state.ui.checkout[listingId],
    currentUser: state.entities.users[state.session.id],
    listing: state.entities.listings[listingId],
    listingId: listingId
  });
}

const mdp = dispatch => {
  return ({
    fetchListing: listingId => dispatch(fetchListing(listingId)),
    createBooking: booking => dispatch(createBooking(booking)),
    fetchHost: hostId => dispatch(fetchHost(hostId))
  });
}

export default withRouter(connect(msp, mdp)(Checkout));
