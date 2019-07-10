import { connect } from 'react-redux';
import ReviewsModal from './reviews_modal';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return ({
    reviews: state.entities.reviews
  })
}

const mdp = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal())
  });
}

export default connect(msp, mdp)(ReviewsModal);