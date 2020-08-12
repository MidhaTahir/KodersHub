import React from 'react';
import Modal from 'react-awesome-modal';
import "./awesome-modal.styles.css";

const Messages =({ status, callback }) =>{
    return(
        <Modal visible={true} effect="fadeInUp">
            <div className="awesome-modal">
                {status}
                <button onClick={() => callback()}>ok</button>
            </div>
        </Modal>
    )
}
export default Messages
