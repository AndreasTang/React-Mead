import React from 'react'
import {Link} from 'react-router-dom'

const Portfolio = () => {
    return (
        <div>
            <h1>Protfolio</h1>
            <p><Link to="/portfolio/1">Project1</Link></p>
            <p><Link to="/portfolio/2">Project2</Link></p>
        </div>
    )
}

export default Portfolio