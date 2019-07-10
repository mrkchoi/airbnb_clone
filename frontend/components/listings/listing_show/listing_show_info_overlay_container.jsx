import { connect } from 'react-redux';
import ListingShowInfoOverlay from './listing_show_info_overlay';
import { openModal, closeModal } from '../../../actions/modal_actions';

const msp = (state, ownProps) => {
  return ({
    listing: ownProps.listing
  });
}

const mdp = dispatch => {
  return ({
    openModal: type => dispatch(openModal(type)),
    closeModal: () => dispatch (closeModal())
  });
}

export default connect(msp, mdp)(ListingShowInfoOverlay);
