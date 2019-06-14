import React from "react"
import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <h1><a href="#">Monogram Projects</a></h1>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Property</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar