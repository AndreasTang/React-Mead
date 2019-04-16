import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <p><NavLink exact to="/" activeClassName="is-active">Home</NavLink></p>
        <p><NavLink to="/Add" activeClassName="is-active">Add</NavLink></p>
        <p><NavLink to="/Edit" activeClassName="is-active">Edit</NavLink></p>
        <p><NavLink to="/Help" activeClassName="is-active">Help</NavLink></p>
    </header>
)

export default Header