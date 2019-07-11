import React from 'react';

const ListingShowRulesPolicy = props => {
  return (
    <div className="listingshow__rules-container">
      <div className="listingshow__rules-item-wrapper">
        <div className="listingshow__rules-title">
          <h3 className="listingshow__rules-header">
            House Rules
          </h3>
        </div>
        <div className="listingshow__rules-details">
          <p className="listingshow__rules-detail-text">
            The host has set some house rules, which you'll be asked to agree to when you book.
          </p>
        </div>
      </div>
      <div className="listingshow__rules-item-wrapper">
        <div className="listingshow__rules-title">
          <h3 className="listingshow__rules-header">
            Cancellation policy
          </h3>
        </div>
        <div className="listingshow__rules-details">
          <p className="listingshow__rules-detail-text">
            <span>Moderate · Free cancellation for 48 hours</span><br />
            After that, cancel before 2:00PM on the day before your booking date and get a full refund, minus the service fee.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ListingShowRulesPolicy;