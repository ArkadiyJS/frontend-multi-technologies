import s from './Quiz.module.css'


import React, { useState } from 'react';


const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className={s.result}>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='icon' />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>

      <a href='/quiz'>
        <button  >Попробовать снова</button>
      </a>

    </div>
  );
}

const GameQuiz = ({ question, step, onCLickVariant }) => {

  const percentСompletion = Math.round((step / questions.length) * 100)



  return (
    <>
      <div className={s.progress}>
        <div style={{ width: `${percentСompletion}%` }} className={s.progress__inner}></div>
      </div>
      <h1 className={s.title}>{question.title}</h1>
      <ul>
        {question.variants.map((text, i) => (<li className={s.variants} onClick={() => onCLickVariant(i)} key={text}>{text} </li>))}

      </ul>
    </>

  )

}

const Quiz = (props) => {

  const [step, setStep] = useState(0)

  const [correct, setCorrect] = useState(0)

  const question = questions[step]

  const onCLickVariant = (i) => {

    setStep(step + 1)

    if (i === question.correct) {
      setCorrect(correct + 1)
    }
  }
  return (
    <div className={s.Games}>
      {
        step !== questions.length ?
          <GameQuiz step={step} setStep={setStep} question={question} onCLickVariant={onCLickVariant} />
          : <Result correct={correct} />
      }



    </div>
  );
}

export default Quiz;