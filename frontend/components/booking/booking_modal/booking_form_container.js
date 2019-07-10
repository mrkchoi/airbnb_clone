import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookingForm from './booking_form';

const msp = (state, ownProps) => {
  let listingId = ownProps.match.params.listingId;
  

  return ({
    listing: listingId
  });
}

const mdp = dispatch => {
  return ({
    
  });
}

export default withRouter(connect(msp, mdp)(BookingForm));