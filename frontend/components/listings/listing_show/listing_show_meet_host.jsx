import React from "react";

class ListingShowMeetHost extends React.Component {
  render() {
    let { host } = this.props;
    // debugger

    if (!this.props.host || !this.props.listing) {
      return null;
    }

    let hostId = this.props.listing.hostId;

    return (
      <div className="listingshow__meethost-container">
        <h3 className="listingshow__meethost-header">Meet your host</h3>
        <div className="listingshow__meethost-main">
          <div className="listingshow__meethost-bio-wrapper">
            <div className="listingshow__meethost-photo-wrapper">
              <div className="listingshow__meethost-photo" style={{ backgroundImage: `url(${host.photoUrl})`}}></div>
            </div>
            <div className="listingshow__meethost-bio-inner">
              <h4 className="listingshow__meethost-bold">
                Hi, I'm {host.firstname}!
              </h4>
              <p className="listingshow__meethost-text">
                {host.bio}
              </p>
              <h4 className="listingshow__meethost-bold">
                Interaction with guests
              </h4>
              <p className="listingshow__meethost-text">
                Your host won’t be on the property but they’ll be available for anything you need during your stay.
              </p>
            </div>
          </div>
          <div className="listingshow__meethost-stats-wrapper">
            <p className="listingshow__meethost-stat">Languages: English</p>
            <p className="listingshow__meethost-stat">Response rate: 100%</p>
            <p className="listingshow__meethost-stat">Response time: within an hour</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingShowMeetHost;
