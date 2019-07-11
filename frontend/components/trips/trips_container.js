import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Trips from './trips';
import { fetchAllBookings, deleteBooking } from '../../actions/booking_actions';
import { fetchListingsByUserId } from '../../actions/listing_actions';

const msp = (state, ownProps) => {
  let userId = ownProps.match.params.userId;

  return {
    currentUser: state.entities.users[state.session.id],
    bookings: Object.values(state.entities.bookings)
  };
}

const mdp = dispatch => {
  return {
    fetchAllBookings: () => dispatch(fetchAllBookings()),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId))
  };
}


export default withRouter(connect(msp, mdp)(Trips));