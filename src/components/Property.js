import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import listingData from "./listingData";
import PropertyTile from "./PropertyTile";
import PropertyPage from "./PropertyPage"

class Property extends React.Component {
  constructor() {
    super();
    this.state = {
      data: listingData,
    };
  }

  render() {
    const listings = this.state.data.map(listing => (
      <PropertyTile
        key={listing.id}
        street={listing.street}
        route= {listing.route}
        image={listing.mainImage}
        status={listing.status}
        description={listing.description[0]}
      />
      ));
    return (
      <div className="portfolio" >{listings}</div>
    )
  }
}

export default Property;
