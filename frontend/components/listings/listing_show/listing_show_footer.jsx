import React from "react";

class ListingShowFooter extends React.Component {
  render() {
    return (
      <div className="listingshow__footer-container">
        <div className="listingshow__footer-content">
          <div className="listingshow__footer-logo"></div>
          <p className="listingshow__footer-text">
            &copy; 2019 Aerbnb, Inc. Built with <span>&hearts;</span> by <a className="listingshow__footer-link" target="_blank" href="https://www.linkedin.com/in/kenneth-choi-42502a35/">Kenny Choi</a>
          </p>
        </div>
      </div>
    );
  }
}

export default ListingShowFooter;
