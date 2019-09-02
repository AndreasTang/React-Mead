import React from 'react'
import DamgeForm from './damgeForm'
import { connect } from 'react-redux'
import { editDamge, removeDamge } from '../actions/damge'

export class Edit extends React.Component {

    onSubmit = (damge) => {
        this.props.editDamge(this.props.damge.id, damge)
        this.props.history.push('/')
    }

    onClick = () => {
        this.props.removeDamge({ id: this.props.damge.id })
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <DamgeForm 
                damge = {this.props.damge}
                onSubmit = {this.onSubmit}
                />
                <button onClick = {this.onClick}
                >Remove</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        damge: state.damge.find((damge) => {
            return damge.id === props.match.params.id
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editDamge: (id, damge) => {
            return dispatch(editDamge(id, damge))
        },
        removeDamge: (data) => {
            return dispatch(removeDamge(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)