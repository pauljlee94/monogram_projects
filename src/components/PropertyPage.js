import React from "react"
import {Link} from "react-router-dom"

import back from "./img/back.png"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

class PropertyPage extends React.Component {


    render() {
        const images = [
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/',
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/'
            }
        ]
        return (
            <div>
                <nav className="propertyPageNav">
                    <Link to="/"><img src={back} style={{width:"50px", marginLeft: "5px"}}/></Link>
                </nav>
                
                <ImageGallery 
                    items={images} 
                    showPlayButton={false}
                    autoPlay={true}
                    slideInterval={5000}
                />
                <h1>{this.props.match.params.id}</h1>
            </div>
        )
    }
}

export default PropertyPage