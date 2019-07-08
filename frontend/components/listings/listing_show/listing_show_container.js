import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing } from '../../../actions/listing_actions';

const msp = (state, ownProps) => {
  let listingId = ownProps.match.params.listingId;
  let listing = state.entities.listings[listingId];

  return ({
    listing: listing,
    currentUser: state.entities.users[state.session.id]
  });
}

const mdp = dispatch => {
  return ({
    fetchListing: (id) => dispatch(fetchListing(id))
  });
}

export default connect(msp, mdp)(ListingShow);