import React from "react";
import ImageZoom from 'react-medium-image-zoom';

class ListingShowPhotoOverview extends React.Component {
  render() {
    let {photoUrls, thumbnailUrls} = this.props.listing;

    return (
      <div className="listingshow__photos-container">
        <h3 className="listingshow__photos-header">
          Tour this condominium
        </h3>

        <div className="listingshow__photos-grid-outer">
          {thumbnailUrls.map((image, idx) => {
            return (
              <div className="listingshow__photos-grid-item-wrapper" style={{ backgroundImage: `url(${thumbnailUrls[idx]})` }} key={idx}>
                <ImageZoom 
                  image={{
                    src: photoUrls[idx],
                    alt: 'aerbnb listing photo',
                    className: 'listingshow__photo-single'
                  }}
                  zoomImage={{
                    src: thumbnailUrls[idx],
                    alt: 'aerbnb listing photo',
                  }} 
                />
              </div>
            );
          })}
        </div>

        <div className="listingshow__photos-extra-container">
          <div className="listingshow__photos-extra-inner">
            <div className="listingshow__photos-extra-logo"></div>
            <div className="listingshow__photos-extra-content">
              <h4 className="listingshow__photos-extra-header">
                Exceptional hosts with an eye for detail
              </h4>
              <p className="listingshow__photos-extra-text">
                Every Airbnb Plus host is well-reviewed because they’re welcoming and take care of all the essentials that create memorable stays.
              </p>
            </div>
          </div>
        </div>  

      </div>
    );
  }
}

export default ListingShowPhotoOverview;
