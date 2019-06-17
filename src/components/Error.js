import React from 'react'
import { NavLink } from "react-router-dom"

function Error() {
    return (
        <div className="errorPage">
            <h1>404</h1>
            <p>This page doesn't exist!</p>
            <NavLink to="/" className="errorNavLink">Go back to home</NavLink>
        </div>
    )
}

export default Error