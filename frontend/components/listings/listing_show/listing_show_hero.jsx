import React from "react";

class ListingShowHero extends React.Component {
  render() {
  let { listing } = this.props;

  return (
      <div className="listingshow__hero-container">
        <div className="listingshow__hero-header--outer">
          <div className="listingshow__hero-header--inner">
            <div className="listingshow__hero-header-logo"></div>
            <div className="listingshow__hero-header-text">
              {listing.title}
            </div>
          </div>
        </div>
        
        <div className="listingshow__hero-splash-outer" style={{backgroundImage: `url(${listing.photoUrls[0]})`}}></div>
      </div>
    );
  }
}

export default ListingShowHero;
