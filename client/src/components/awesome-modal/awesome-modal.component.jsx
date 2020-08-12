import React, { useState } from 'react';
import Modal from 'react-awesome-modal';
import "./awesome-modal.styles.css";

const Messages =({ status, callback }) =>{
    const [ visiblemodal, setvisiblemodal ] = useState(true);
    return(
        <Modal visible={visiblemodal} effect="fadeInUp">
            <div className="awesome-modal">
                {status}
                <button onClick={() => callback()}>ok</button>
            </div>
        </Modal>
    )
}
export default Messages