import React, { useState } from 'react';
import s from './Modal.module.css';

const Modal = (props) => {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button className={s.openModalBtn} onClick={() => setShowModal(true)}>✨ Открыть окно</button>

      {showModal ? <div className={s.overlay}>
        <div className={s.modal}>
          <svg height="200" viewBox="0 0 200 200" width="200" onClick={() => setShowModal(false)}>
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt='gif' />
        </div>
      </div> : ''}

      <button className={s.openModalBtn} onClick={() => alert('hi 2 window')}>✨ Открыть окно 2</button>

      {/* <div className={s.overlay}>
        <div className={s.modal}>
          <svg height="200" viewBox="0 0 200 200" width="200" onClick={() => setShowModal(false)}>
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt='gif' />
        </div>
      </div> */}

    </>
  );
}

export default Modal;