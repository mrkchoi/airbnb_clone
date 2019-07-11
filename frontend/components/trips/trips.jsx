import React from 'react';

import Header from '../navbar/header';
import ListingShowFooter from '../listings/listing_show/listing_show_footer';
import PulseLoader from '../loaders/pulse_loader';
import ListingIndexItem from '../listings/ListingIndexItem';

class Trips extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }

    setTimeout(() => {
      this.setState({loading: false})
    }, 1500);
  }

  componentDidMount() {
    this.props.fetchAllBookings();
  }
  

  render() {
    let { currentUser, bookings } = this.props;
    let tripsHeader;
    let trips;

    
    if (this.state.loading) {
      return (
        <div className="loader__container">
          <PulseLoader />
        </div>
      );
    }

    // Set conditional trip header
    // debugger
    if (bookings.length > 0) {
      tripsHeader = (
        <div className="trips__header-container">
          <h2 className="trips__header">Upcoming plans</h2>
          <p className="trips__header--text">You have upcoming trips. Manage and view your bookings here.</p>
        </div >
      );

      trips = bookings.map((booking, idx) => (
        <ListingIndexItem listing={booking.listing} key={idx} />
      ));
    } else {
      tripsHeader = (
      <div className="trips__header-container">
        <h2 className="trips__header">Upcoming plans</h2>
        <p className="trips__header--text">You have no upcoming trips. Start exploring ideas for your next trip.</p>
      </div >
      );
    }

    return (
      <div className="trips__outer-container">
        <Header type={"header__listing"} currentUser={currentUser} />
        
        <div className="trips__inner-container">
          {tripsHeader}
          <div className="trips__bg-container"></div>
          {trips}
          <ListingShowFooter />
        </div>
      </div>
    );
  }
}

export default Trips;