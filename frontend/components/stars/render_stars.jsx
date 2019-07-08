import React from 'react';

const RenderStars = (rating) => {
  rating = parseFloat(rating);
  // debugger
  const fullStar = <i className="fas fa-star" />;
  const emptyStar = <i className="far fa-star" />;
  const halfStar = <i className="fas fa-star-half-alt" />;

  if (rating < 0.5) {
    return (
      <div className="starrating__container">
        {halfStar}
        {emptyStar}
        {emptyStar}
        {emptyStar}
        {emptyStar}
      </div>
    );
  } else if (rating < 1) {
    return (
      <div className="starrating__container">
        {fullStar}
        {emptyStar}
        {emptyStar}
        {emptyStar}
        {emptyStar}
      </div>
    );
  } else if (rating < 1.5) {
    return (
      <div className="starrating__container">
        {fullStar}
        {halfStar}
        {emptyStar}
        {emptyStar}
        {emptyStar}
      </div>
    );
  } else if (rating < 2) {
    return (
      <div className="starrating__container">
        {fullStar}
        {fullStar}
        {emptyStar}
        {emptyStar}
        {emptyStar}
      </div>
    );
  } else if (rating < 2.5) {
    return (
      <div className="starrating__container">
        {fullStar}
        {fullStar}
        {halfStar}
        {emptyStar}
        {emptyStar}
      </div>
    );
  } else if (rating < 3) {
    return (
      <div className="starrating__container">
        {fullStar}
        {fullStar}
        {fullStar}
        {emptyStar}
        {emptyStar}
      </div>
    );
  } else if (rating < 3.5) {
    return (
      <div className="starrating__container">
        {fullStar}
        {fullStar}
        {fullStar}
        {halfStar}
        {emptyStar}
      </div>
    );
  } else if (rating < 4) {
    return (
      <div className="starrating__container">
        {fullStar}
        {fullStar}
        {fullStar}
        {fullStar}
        {emptyStar}
      </div>
    );
  } else if (rating < 4.5) {
    return (
      <div className="starrating__container">
        {fullStar}
        {fullStar}
        {fullStar}
        {fullStar}
        {halfStar}
      </div>
    );
  } else {
    return (
      <div className="starrating__container">
        {fullStar}
        {fullStar}
        {fullStar}
        {fullStar}
        {fullStar}
      </div>
    );
  }
}

export default RenderStars;