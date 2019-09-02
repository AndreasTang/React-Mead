import React from 'react'
import { connect } from 'react-redux'
import { editFilterText, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filter'
import { DateRangePicker } from 'react-dates'

export class DamgeListFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calendarFocused: null
        }
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    onTextChange = (e) => {
        this.props.editFilterText(e.target.value)
    }

    onSortChange = (e) => {
        return e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount()
    }

    render() {
        return (
            <div>
                <input type = 'text' value = {this.props.filter.text} onChange = {this.onTextChange}/>
                <select value = {this.props.filter.sortBy} onChange = {this.onSortChange}>
                <option value = 'date'>Date</option>
                <option value = 'amount'>Amount</option>
                </select>
                <DateRangePicker
                startDate = {this.props.filter.startDate}
                startDateId = 'DateRangerPickerStartDateId'
                endDate = {this.props.filter.endDate}
                endDateId = 'DateRangerPickerEndDateId'
                onDatesChange = {this.onDatesChange}
                focusedInput = {this.state.calendarFocused}
                onFocusChange = {this.onFocusChange}
                showClearDates = {true}
                numberOfMonths = {1}
                isOutsideRange = {() => false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editFilterText: (text) => {
            return dispatch(editFilterText(text))
        },
        sortByDate: () => {
            return dispatch(sortByDate())
        },
        sortByAmount: () => {
            return dispatch(sortByAmount())
        },
        setStartDate: (startDate) => {
            return dispatch(setStartDate(startDate))
        },
        setEndDate: (endDate) => {
            return dispatch(setEndDate(endDate))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DamgeListFilter)