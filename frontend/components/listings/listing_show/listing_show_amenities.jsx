import React from 'react';

class ListingShowAmenities extends React.Component {

  render() {
    let { listing } = this.props;
    return (
      <div className="listingshow__amenities-container">
        <div className="listingshow__amenities-header-container">
          <h3 className="listingshow__amenities-header">
            Amenities
          </h3>
          <p className="listingshow__amenities-header-text">
            These amenities are available to you.
          </p>
        </div>

        
        <div className="listingshow__amenities-grid-outer">
          <div className="listingshow__amenities-grid-single">
            <img src={amenitiesParking} alt="" className="listingshow__amenities-grid-img"/>
            <div className="listingshow__amenities-grid-content">
              <p className="listingshow__amenities-grid-content-text">
                Free parking on premises
              </p>
            </div>
          </div>
          
          <div className="listingshow__amenities-grid-single">
            <img src={amenitiesKitchen} alt="" className="listingshow__amenities-grid-img" />
            <div className="listingshow__amenities-grid-content">
              <p className="listingshow__amenities-grid-content-text">
                Kitchen
              </p>
            </div>
          </div>
          
          <div className="listingshow__amenities-grid-single">
            <img src={amenitiesWasher} alt="amenities photo" className="listingshow__amenities-grid-img" /> 
            <div className="listingshow__amenities-grid-content">
              <p className="listingshow__amenities-grid-content-text">
                Washer
              </p>
            </div>
          </div>
          
          <div className="listingshow__amenities-grid-single">
            <img src={amenitiesDryer} alt="amenities photo" className="listingshow__amenities-grid-img"/> 
            <div className="listingshow__amenities-grid-content">
              <p className="listingshow__amenities-grid-content-text">
                Dryer
              </p>
            </div>
          </div>
          
          <div className="listingshow__amenities-grid-single">
            <img src={amenitiesWifi} alt="amenities photo" className="listingshow__amenities-grid-img"/> 
            <div className="listingshow__amenities-grid-content">
              <p className="listingshow__amenities-grid-content-text">
                Wifi
              </p>
            </div>
          </div>
          
          <div className="listingshow__amenities-grid-single">
            <img src={amenitiesTv} alt="amenities photo" className="listingshow__amenities-grid-img"/> 
            <div className="listingshow__amenities-grid-content">
              <p className="listingshow__amenities-grid-content-text">
                TV
              </p>
            </div>
          </div>
          
          <div className="listingshow__amenities-grid-single">
            <img src={amenitiesBathroom} alt="amenities photo" className="listingshow__amenities-grid-img"/>
            <div className="listingshow__amenities-grid-content">
              <p className="listingshow__amenities-grid-content-text">
                Bathroom essentials
              </p>
            </div>
          </div>
          
          <div className="listingshow__amenities-grid-single">
            <img src={amenitiesBedroom} alt="amenities photo" className="listingshow__amenities-grid-img"/> 
            <div className="listingshow__amenities-grid-content">
              <p className="listingshow__amenities-grid-content-text">
                Bedroom comforts
              </p>
            </div>
          </div>
          
          <div className="listingshow__amenities-grid-single">
            <img src={amenitiesCoffee} alt="amenities photo" className="listingshow__amenities-grid-img"/> 
            <div className="listingshow__amenities-grid-content">
              <p className="listingshow__amenities-grid-content-text">
                Coffee maker
              </p>
            </div>
          </div>
          
          <div className="listingshow__amenities-grid-single">
            <img src={amenitiesHair} alt="amenities photo" className="listingshow__amenities-grid-img"/> 
            <div className="listingshow__amenities-grid-content">
              <p className="listingshow__amenities-grid-content-text">
                Hair dryer
              </p>
            </div>
          </div>
          
          <div className="listingshow__amenities-grid-single">
            <img src={amenitiesDishwasher} alt="amenities photo" className="listingshow__amenities-grid-img"/>
            <div className="listingshow__amenities-grid-content">
              <p className="listingshow__amenities-grid-content-text">
                Dishwasher
              </p>
            </div>
          </div>
          
          <div className="listingshow__amenities-grid-single">
            <img src={amenitiesSelfcheckin} alt="amenities photo" className="listingshow__amenities-grid-img"/>
            <div className="listingshow__amenities-grid-content">
              <p className="listingshow__amenities-grid-content-text">
                Self check-in
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListingShowAmenities;
