import React from 'react'
import { connect } from 'react-redux'
import { editFilterText, sortByAmount, sortByDate } from '../actions/filter'

const DamgeListFilter = (props) => (
    <div>
        <input type = 'text' value = {props.filter.text} onChange = {(e) => {
            props.dispatch(editFilterText(e.target.value))
        }}/>
        <select value = {props.filter.sortBy} onChange = {(e) => {
            return e.target.value === 'date' ? props.dispatch(sortByDate()) : props.dispatch(sortByAmount())
        }}>
            <option value = 'date'>Date</option>
            <option value = 'amount'>Amount</option>
        </select>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

export default connect(mapStateToProps)(DamgeListFilter)