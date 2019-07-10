import { connect } from 'react-redux';
import ListingShowInfoOverlay from './listing_show_info_overlay';

const msp = (state, ownProps) => {
  return ({
    listing: ownProps.listing
  });
}

const mdp = dispatch => {
  return ({
    openModal: type => dispatch(openModal),
    closeModal: () => dispatch (closeModal())
  });
}

export default connect(msp, mdp)(ListingShowInfoOverlay);
