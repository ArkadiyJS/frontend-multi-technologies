import s from './gameBtn.module.css'

import React, { useState } from 'react';

import Modal from './modal';

function GameBtn(props) {



  const [leftPos, setLeftPos] = useState('50')

  const [topPos, setTopPos] = useState('50')

  const [backgroundColor, setBackgroundColor] = useState('')

  const [showModal, setShowModal] = useState(false)

  const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
  }


  const restartGameButton = () => {
    setLeftPos(45);
    setTopPos(25);

  }




  return (
    <div className={s.App} style={{ background: backgroundColor ? `black` : '' }}>



      <button className={s.Btn}
        style={{
          position: `absolute`,
          left: `${leftPos}%`,
          top: `${topPos}%`,

        }}

        onMouseEnter={() => {
          setLeftPos(random(0, 90))
          setTopPos(random(0, 90))
          setBackgroundColor(true)

        }}
        onClick={() => setShowModal(true)}>
        Попробуй нажми
      </button>
      <button className='button' onClick={() => { restartGameButton() }}>🧲 Притянуть 🧲</button>

      {showModal ? <Modal setShowModal={setShowModal} /> : ''}

    </div >
  );
}

export default GameBtn;