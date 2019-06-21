import React from "react";
import { Link } from "react-router-dom";

import listingData from "./listingData";
import back from "./img/back.png";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class Jackson extends React.Component {
  constructor() {
    super();
    this.state = {
      data: listingData
    };
  }

  render() {
    const descriptions = this.state.data[1].description.map(description => (
      <div>
        <p>-{description}</p>
        <br />
      </div>
    ));
    const images = [
      {
        original: this.state.data[1].mainImage,
        thumbnail: this.state.data[1].mainImage
      },
      {
        original: "./images/jacksonStreet/1.png",
        thumbnail: "./images/jacksonStreet/1.png"
      },
      {
        original: "./images/jacksonStreet/2.png",
        thumbnail: "./images/jacksonStreet/2.png"
      },
      {
        original: "./images/jacksonStreet/3.png",
        thumbnail: "./images/jacksonStreet/3.png"
      },

    ];
    return (
      <div className="propertyPage">
        <nav className="propertyPageNav">
          <Link to="/">
            <img
              src={back}
              alt="back icon"
              style={{ width: "50px", marginLeft: "5px" }}
            />
          </Link>
        </nav>
        <div className="property">
            <ImageGallery
            items={images}
            showPlayButton={false}
            autoPlay={true}
            slideInterval={5000}
            />
            <div className="description">
                <h1>{this.state.data[1].name} - {this.state.data[1].street}</h1>
                <h3>
                Size <span>{this.state.data[1].area}sqft</span> 
                Beds <span>{this.state.data[1].beds}</span> 
                Baths <span>{this.state.data[1].baths}</span> 
                Stories <span>{this.state.data[1].stories}</span>
                Cars <span>{this.state.data[1].cars}</span> 
                </h3>
                <h3 className="status">{this.state.data[1].status}</h3>
                <br/>
                <br/>
                {descriptions}
            </div>
         </div>
      </div>
    );
  }
}

export default Jackson;
