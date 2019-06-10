import React from 'react'

class DamgeForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: 0
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
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    render() {
        return (
            <div>
                <form>
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
                    <p><textarea
                    placeholder = "note"
                    value = {this.state.note}
                    onChange = {this.noteHandler}
                    /></p>
                </form>
            </div>
        )
    }
}

export default DamgeForm