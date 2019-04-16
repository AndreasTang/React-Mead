import React from 'react'

const Action = (props) => (
    <div>
        <button className="big-button"
        onClick={props.callRandomStoreHandler}
        disabled={!props.isStoreExist}
        >隨機選擇店家</button>
    </div>
)

export default Action