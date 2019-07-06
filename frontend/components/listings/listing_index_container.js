import { connect } from 'react-redux';
import ListingIndex from './listing_index';
import { fetchListings, fetchListing } from '../../actions/listing_actions';

const msp = (state, ownProps) => {
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

export default connect(msp, mdp)(ListingIndex);
