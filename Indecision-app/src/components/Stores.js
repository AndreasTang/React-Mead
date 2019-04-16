import React from 'react'
import Store from './Store'

const Stores = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">你所選的是</h3>
            {
                props.stores.length > 0 && 
                <button
                    className="button button--link"
                    onClick={props.removeAllHandler}
                >
                清除所有店家
                </button>
            }
        </div>
        {props.stores.length === 0 && <p className="widget__message">還未有任何店家，請從底下添加</p>} 
        {props.stores.map((store, index) => (
            <Store key={store}
            store={store}
            count={index + 1}
            removeStoreHandler={props.removeStoreHandler}
            />
        ))}
    </div>
)

export default Stores