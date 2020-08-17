import React, { useState } from 'react';
import Modal from 'react-awesome-modal';
import "./awesome-modal.styles.css";

const Messages =({ status, callback, open, handleOpen }) => {

    const handleClick = () => {
        handleOpen(false);
        if (callback) callback();
    }

    return(
        <Modal visible={open} effect="fadeInUp">
            <div className="awesome-modal">
                {status}
                <button onClick={() => handleClick()}>ok</button>
            </div>
        </Modal>
    )
}
export default Messages