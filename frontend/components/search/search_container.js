import { connect } from 'react-redux';
import Search from './search';
import { fetchListings, fetchListing } from '../../actions/listing_actions';
import { updateBounds } from '../../actions/filter_actions';

const msp = state => {
  return ({
    listings: Object.values(state.entities.listings)
  });
}

const mdp = dispatch => {
  return ({
    fetchListings: () => dispatch(fetchListings()),
    fetchListing: id => dispatch(fetchListing(id)),
    updateBounds: bounds => dispatch(updateBounds(bounds))
  });
}

export default connect(msp, mdp)(Search);
