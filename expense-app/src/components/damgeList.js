import React from 'react'
import { connect } from 'react-redux'
import DamgeListItem from './damgeListItem'
import getVisibleDamge from '../selectors/damge'

const DamgeList = (props) => (
    <div>
        <h1>Damge List</h1>
        {props.damge.length === 0 ? (
            <p>No Damge</p>
        ) : (
            props.damge.map((damgeItem) => {
                return <DamgeListItem key = {damgeItem.id} {...damgeItem} />
            })
        )}
        
    </div>
)

const mapStateToProps = (state) => {
    return {
        damge: getVisibleDamge(state.damge, state.filter)
    }
}

export { DamgeList }
export default connect(mapStateToProps)(DamgeList)