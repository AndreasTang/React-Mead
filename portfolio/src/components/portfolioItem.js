import React from 'react'
import Portfolio from './Portfolio'

const Item = (props) => (
    <div>
    <Portfolio/>
        <h1>Project: Testing</h1>
        <p>the id is {props.match.params.id}</p>
    </div>
)

export default Item