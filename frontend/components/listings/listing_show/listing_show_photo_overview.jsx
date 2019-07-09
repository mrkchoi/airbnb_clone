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
            );
          })}
        </div>

      </div>
    );
  }
}

export default ListingShowPhotoOverview;
