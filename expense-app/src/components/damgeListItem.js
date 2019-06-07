import React from 'react'
import { connect } from 'react-redux'
import { removeDamge } from '../actions/damge'

const DamgeListItem = ({ dispatch, description, amount, createAt, id }) => (
    <div>
        <p>Description: {description}</p>
        <p>Amount: {amount}</p>
        <p>CreateAt: {createAt}</p>
        <button onClick = {() => {
            dispatch(removeDamge({ id }))
        }}>Remove</button>
    </div>
)

export default connect()(DamgeListItem)