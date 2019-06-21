import React from "react";

import listingData from "./listingData";
import PropertyTile from "./PropertyTile";

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
      <div>
        <div className="anchor" id="portfolio"></div>
        <div className="portfolio" >{listings}</div>
      </div>
    )
  }
}

export default Property;
