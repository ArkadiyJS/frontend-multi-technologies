import React, { useState } from 'react';

function ReadTheText(props) {

  const [text, setText] = useState('маза квака')

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