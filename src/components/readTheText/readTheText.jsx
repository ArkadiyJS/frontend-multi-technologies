import React, { useState } from 'react';

function ReadTheText(props) {

  const [text, setText] = useState('0 1 2 3 4 5 выйдет зайчик погулять. пиу пау ой ой ой погибает зайчик мой ')

  const speakText = () => {
    speechSynthesis.cancel();

    const utterence = new SpeechSynthesisUtterance(text)

    speechSynthesis.speak(utterence)
  }
  return (


    <div>
      <p>{text}</p>
      <button onClick={() => speakText(text)}>озвучить</button>
    </div>
  );
}

export default ReadTheText;