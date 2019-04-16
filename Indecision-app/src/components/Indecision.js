import React from 'react'
import AddStore from './Add-store'
import Stores from './Stores'
import Header from './Header'
import Action from './Action'
import SelectStore from './StoreModal'

class Indecision extends React.Component {

    state = {
        subtitle: '神岡區公所版',
        stores: [],
        selectedStore: undefined,
        randomContent: ''
    }
    
    componentDidMount() {
        try {
            const storesData = localStorage.getItem('stores')
            const stores = JSON.parse(storesData)

        if (stores) {
            this.setState(() => ({ stores: stores }))
            }
        } catch (e) {
            //(e) is needed for not doing anything
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.stores.length !== this.state.stores.length) {
            const storesData = JSON.stringify(this.state.stores)
            localStorage.setItem('stores', storesData)
        }
    }

    closeModalHandler = () => {
        this.setState(() => ({ selectedStore: undefined }))
    }

    removeAllHandler = () => {
        this.setState(() => ({ stores: [] }))    
    }

    removeStoreHandler = (targetStore) => {
        this.setState((pre) => ({
            stores: pre.stores.filter((store) => store !== targetStore )
        }))
    }

    callRandomStoreHandler = () => {
        const randomNum = Math.floor(Math.random() * this.state.stores.length)
        const content = this.state.stores[randomNum]
        this.setState((prevState) => ({
            selectedStore: !prevState.selectedStore,
            randomContent: content
        }))
    }

    submitHandler = (store) => {

        if (!store) {
            return '請輸入店名'
        } else if (this.state.stores.includes(store)) {
            return '此店面已經存在'
        }

        this.setState((pre) => ({ stores: pre.stores.concat(store) }))
    }

    render() {
        return (
            <div>
                <Header subtitle = {this.state.subtitle} />
                <div className="container">
                    <Action 
                        isStoreExist={this.state.stores.length > 0}
                        callRandomStoreHandler={this.callRandomStoreHandler}
                    />
                    <div className="widget">
                        <Stores
                            stores = {this.state.stores}
                            removeStoreHandler={this.removeStoreHandler}
                            removeAllHandler={this.removeAllHandler}
                        />
                        <AddStore submitHandler={this.submitHandler}/>
                    </div>
                </div>
                <SelectStore
                    selectedStore={this.state.selectedStore}
                    content={this.state.randomContent}
                    closeModalHandler={this.closeModalHandler}
                />
            </div>
        )
    }
}

export default Indecision