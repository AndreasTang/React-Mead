import React from 'react'
import { NavLink } from 'react-router-dom'

const DamgeListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <NavLink to={`/edit/${id}`}><p>Description: {description}</p></NavLink>
        <p>Amount: {amount}</p>
        <p>CreateAt: {createdAt}</p>
    </div>
)

export default DamgeListItem