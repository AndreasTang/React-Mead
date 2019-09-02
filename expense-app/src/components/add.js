import React from 'react'
import DamgeForm from './damgeForm'
import { connect } from 'react-redux'
import { addDamge } from '../actions/damge'

export class Add extends React.Component {
    onSubmit = (damge) => {
        this.props.add(damge)
        this.props.history.push('./')
    }
    render() {
        return (
            <div>
                <DamgeForm onSubmit = {this.onSubmit} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (damge) => {
            return dispatch(addDamge(damge))
        }
    }
}

export default connect(undefined, mapDispatchToProps)(Add)