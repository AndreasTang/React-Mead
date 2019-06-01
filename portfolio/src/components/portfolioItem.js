import React from 'react'
import {Link} from 'react-router-dom'

const Item = (props) => (
    <div>
        <h1>Project: {props.match.params.id}</h1>
        <p>the id is {props.match.params.id}</p>
        <Link to="/portfolio">Go Back</Link>
    </div>
)

export default Item