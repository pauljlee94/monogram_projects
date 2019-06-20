import React from "react";
import {Link} from "react-router-dom"

class PropertyTile extends React.Component {
  render() {
    return (
      <div className="propertyTile">
        <Link to={this.props.route} style={{ textDecoration: 'none' }}>
        <img src={this.props.image} alt="" />
        <h2 className="listingName">
          {this.props.street} · <span>{this.props.status}</span>
        </h2>
        <p>{this.props.description}</p>
        </Link>
      </div>
    )

  }
}

export default PropertyTile;
