import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize';

class DamgeForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        description: props.damge ? props.damge.description : '',
        note: props.damge ? props.damge.note : '',
        amount: props.damge ? (props.damge.amount / 100).toString() : '',
        createdAt: props.damge ? moment(props.damge.createdAt) : moment(),
        datePickerFocused: false,
        error: false
        }
    }
    textHandler = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    noteHandler = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    amountHandler = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ datePickerFocused: focused }))
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: true }))
        } else {
            this.setState(() => ({ error: false }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error ? <p>Please provide description and amount</p> : <p></p>}
                <form onSubmit = {this.onSubmit}>
                    <p><input type = "text"
                    placeholder = "description"
                    autoFocus
                    value = {this.state.description}
                    onChange = {this.textHandler}
                    /></p>
                    <p><input
                    type = "number"
                    placeholder = "amount"
                    value = {this.state.amount}
                    onChange = {this.amountHandler}
                    /></p>
                    <SingleDatePicker
                    date = {this.state.createdAt}
                    onDateChange = {this.onDateChange}
                    focused = {this.state.datePickerFocused}
                    onFocusChange = {this.onFocusChange}
                    id = "CalendarSingleDatePicker"
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}
                    />
                    <p><textarea
                    placeholder = "note"
                    value = {this.state.note}
                    onChange = {this.noteHandler}
                    /></p>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default DamgeForm