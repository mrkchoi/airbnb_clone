import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookingForm from './booking_form';
import { closeModal } from '../../../actions/modal_actions';
import { receiveCheckoutInfo } from '../../../actions/checkout_actions';

const msp = (state, ownProps) => {
  let listingId = ownProps.match.params.listingId;  

  return ({
    listing: state.entities.listings[listingId],
    currentUser: state.entities.users[state.session.id]
  });
}

const mdp = dispatch => {
  return ({
    fetchListing: listingId => dispatch(fetchListing(listingId)),
    closeModal: () => dispatch(closeModal()),
    receiveCheckoutInfo: bookingParams => dispatch(receiveCheckoutInfo(bookingParams))
    // Add in submit booking action here (createBooking)
    // Add clearBookingErrors to remove booking errors from redux state
  });
}

export default withRouter(connect(msp, mdp)(BookingForm));


// { start_date: "Wed Jul 10 2019 12: 00: 00 GMT - 0700(Pacific Daylight Time)", end_date: "Sat Jul 13 2019 12: 00: 00 GMT - 0700(Pacific Daylight Time)", num_guests: 3, listing_id: 215, user_id: 539 }