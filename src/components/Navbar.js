import React from "react"
import "./Navbar.css"

class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            opacity: "0"
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            this.setState({opacity: window.scrollY/300})
        })
    }

    render() {
        return (
            <div className="navbar" style={{backgroundColor: "rgba(0,0,0," + this.state.opacity + ")"}}>
                <h1><a href="#">Monogram Projects</a></h1>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Property</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar