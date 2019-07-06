import { connect } from 'react-redux';
import Search from './search';
import { fetchListings, fetchListing } from '../../actions/listing_actions';


const msp = state => {
  return ({
    listings: Object.values(state.entities.listings)
  });
}

const mdp = dispatch => {
  return ({
    fetchListings: () => dispatch(fetchListings()),
    fetchListing: id => dispatch(fetchListing(id))
  });
}

export default connect(msp, mdp)(Search);