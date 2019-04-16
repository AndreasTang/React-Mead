import React from 'react'

class AddStore extends React.Component {
    
    state = {
        error: undefined
    }

    submitHandler = (e) => {
        e.preventDefault()

        const store = e.target.elements.storeAdder.value.trim()
        const error = this.props.submitHandler(store)
        
        this.setState(() => ({ error }))

        if (!error) {
            e.target.elements.storeAdder.value =''
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-store-error">{this.state.error}</p>}
                <form className="add-store" onSubmit={this.submitHandler}>
                    <input className="add-store__input" type="text" name="storeAdder" />
                    <button className="button">新增店家</button>
                </form>
            </div>
        )
    }
}

export default AddStore