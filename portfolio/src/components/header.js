import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
        <h1>AndreasTang's WorkStation</h1>
        <p><NavLink exact to="/" activeClassName="is-active">Home</NavLink></p>
        <p><NavLink to="/portfolio/5" activeClassName="is-active">Portfolio</NavLink></p>
        <p><NavLink to="/contect" activeClassName="is-active">Contect Me</NavLink></p>
    </header>
)

export default Header