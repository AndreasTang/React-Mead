import React from 'react'

const DamgeListItem = ({ description, amount, createAt }) => (
    <div>
        <p>Description: {description}</p>
        <p>Amount: {amount}</p>
        <p>CreateAt: {createAt}</p>
    </div>
)

export default DamgeListItem