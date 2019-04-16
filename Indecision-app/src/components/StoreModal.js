import React from 'react'
import Modal from 'react-modal'

const SelectStore = (props) => (
    <Modal
        isOpen={!!props.selectedStore}
        contentLabel="Selected Store"
        onRequestClose={props.closeModalHandler}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">今日的午餐是:</h3>
        {props.selectedStore && <p className="modal__body">{props.content}</p>}
        <button className="button" onClick={props.closeModalHandler}>立即前往</button>
    </Modal>
)

export default SelectStore