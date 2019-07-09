import React from 'react';
import { withRouter } from 'react-router-dom';
import PulseLoaderAnim from '../../loaders/pulse_loader';
import Header from '../../navbar/header';
import ListingShowInfoOverlay from './listing_show_info_overlay';
import ListingShowHero from './listing_show_hero';
import ListingShowDescription from './listing_show_description';
import ListingShowPhotoOverview from './listing_show_photo_overview';
import ListingShowAmenities from './listing_show_amenities';
import ListingShowLocation from './listing_show_location';
import ListingShowReviews from './listing_show_reviews';
import ListingShowMeetHost from './listing_show_meet_host';
import ListingShowFooter from './listing_show_footer';



class ListingShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }

    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 1500);
  }
  
  componentDidMount() {
    let listingId = this.props.match.params.listingId;
    this.props.fetchListing(listingId)
      .then(action => this.props.fetchHost(action.listing.host_id));
    this.props.fetchReviews(listingId);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // if (this.props.listing) {
  //   //   this.props.fetchHost(this.props.listing.hostId);
  //   // }
  // }
  
  
  render() {
    if (this.state.loading || !this.props.listing || !this.props.reviews || !this.props.users) {
      return <PulseLoaderAnim />
    }

    let {
      id,
      title,
      description,
      num_guests,
      num_rooms,
      num_beds,
      num_baths,
      listing_type,
      price,
      self_check_in,
      parking,
      kitchen,
      washer,
      dryer,
      dishwasher,
      wifi,
      tv,
      bathroom_essentials,
      bedroom_comforts,
      coffee_maker,
      hair_dryer,
      location,
      location_description,
      lat,
      long,
      host_id,
      average_rating,
      num_reviews,
      photoUrls,
    } = this.props.listing;
    let { listing, currentUser, users, reviews } = this.props;
    let host = users[listing.host_id];

    return (
      <div className="listingshow__container-main">
        <Header type={"header__listing header__listing-show"} currentUser={currentUser} />        

        <ListingShowInfoOverlay listing={listing}/>
        <ListingShowHero listing={listing}/>

        <div className="listingshow__content-wrapper">
          <ListingShowDescription listing={listing} host={host}/>
          <ListingShowPhotoOverview listing={listing}/>
          <ListingShowAmenities listing={listing}/>
          <ListingShowLocation listing={listing}/>
          <ListingShowReviews listing={listing} reviews={reviews}/>
          <ListingShowMeetHost listing={listing} host={host}/>
          <ListingShowFooter/>
        </div>
      </div>
    );
  }
}

export default withRouter(ListingShow);
