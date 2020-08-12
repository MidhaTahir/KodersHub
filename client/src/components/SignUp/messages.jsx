import React, { useState } from 'react';
import Modal from 'react-awesome-modal';

const Messages =(props) =>{
    const [ visiblemodal, setvisiblemodal ] = useState(true);
    return(

        <Modal  visible={visiblemodal}>
            <div style={{fontSize: "18px",fontWeight: "bold",position: "absolute",top: "20%",left:"12%"}}>
            {props.status}
            <br/>
            <button onClick={() => props.callback()}> CLOSE </button>
        </div>
        </Modal>

    )
}

export default Messages