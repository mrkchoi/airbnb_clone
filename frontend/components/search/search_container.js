import { connect } from 'react-redux';
import Search from './search';
import { fetchListings, fetchListing } from '../../actions/listing_actions';
import { updateFilter } from '../../actions/filter_actions';

const msp = state => {
  return {
    listings: Object.values(state.entities.listings),
    currentUser: state.entities.users[state.session.id],
    mapSearchCoords: state.ui.search.coords
  };
}

const mdp = dispatch => {
  return ({
    fetchListings: () => dispatch(fetchListings()),
    fetchListing: id => dispatch(fetchListing(id)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  });
}

export default connect(msp, mdp)(Search);
