import React from "react";
import { Link } from "react-router-dom";

import listingData from "./listingData";
import back from "./img/back.png";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class Casco extends React.Component {
  constructor() {
    super();
    this.state = {
      data: listingData
    };
  }

  render() {
    const images = [
      {
        original: this.state.data[3].mainImage,
        thumbnail: this.state.data[3].mainImage
      },
      {
        original: "./images/cascoWay/1.png",
        thumbnail: "./images/cascoWay/1.png"
      },
      {
        original: "./images/cascoWay/2.png",
        thumbnail: "./images/cascoWay/2.png"
      }

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
                <h1>{this.state.data[3].name} - {this.state.data[3].street}</h1>
                <h3>
                Size <span>{this.state.data[3].area}sqft</span> 
                Beds <span>{this.state.data[3].beds}</span> 
                Baths <span>{this.state.data[3].baths}</span> 
                Cars <span>{this.state.data[3].cars}</span> 
                </h3>
                <h3 className="status">{this.state.data[3].status}</h3>
                <br/>
                <br/>
                <p>Contact us for details!</p>
            </div>
         </div>
      </div>
    );
  }
}

export default Casco;
