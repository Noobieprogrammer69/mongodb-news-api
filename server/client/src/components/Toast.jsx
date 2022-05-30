import React from 'react';

const Toast = ({msg, handleShow}) => {
  return (
    <div className="toast" style={{justifyContent: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h3>{msg.title}</h3>
            <span onClick={handleShow}></span>
        </div>
        <div className='toast-body'>
            <p>{msg.body}</p>
        </div>
    </div>
  )
}

export default Toast