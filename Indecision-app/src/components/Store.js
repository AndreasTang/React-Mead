import React from 'react'

const Store = (props) => (
    <div className="store">
        <p className="store__text">{props.count}. {props.store}</p>
        <button className="button button--link" onClick={() => {props.removeStoreHandler(props.store)}}>刪除</button>
    </div>
)

export default Store