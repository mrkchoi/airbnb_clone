import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { updateSearchCoords } from '../../actions/search_actions';


const msp = state => {
  return ({
    searchCoords: state.ui.search.coords
  });
}

const mdp = dispatch => {
  return ({
    updateSearchCoords: (lat, lng) => dispatch(updateSearchCoords(lat, lng))
  });
}

export default connect(msp, mdp)(SearchBar);
