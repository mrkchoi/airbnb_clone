import { connect } from 'react-redux';
import SearchBarLanding from './search_bar_landing';
import { updateSearchCoords } from '../../actions/search_actions';
import { openModal } from '../../actions/modal_actions';


const msp = state => {
  return ({
    searchCoords: state.ui.search.coords,
    currentUser: state.entities.users[state.session.id]
  });
}

const mdp = dispatch => {
  return ({
    updateSearchCoords: (lat, lng) => dispatch(updateSearchCoords(lat, lng)),
    openModal: type => dispatch(openModal(type))
  });
}

export default connect(msp, mdp)(SearchBarLanding);
