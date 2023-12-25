import s from './cssElements.module.css'
import React, { useState } from 'react'
import BorderAnimation from './elements/borderAnimation/borderAnimation';


function CSSElements() {





  const pickCssElements = ['Бордер', 'Вентелятор',]


  const [showCssElements, setShowCssElements] = useState(false)

  const [pickElement, setPickElement] = useState('')







  return (
    <div>
      <ul className={s.ulPointer} onClick={() => { setShowCssElements(!showCssElements) }}><h1>Выбери</h1>

        {showCssElements ? pickCssElements.map((CssElements, i) => (
          <li>

            <button onClick={() => setPickElement(CssElements)} className='button' key={i}>
              {CssElements}
            </button>

          </li>)) : ''}

      </ul>

      <h1>{pickElement}</h1>

      {/* рендер выбраного елемента в списке */}

      {pickElement === 'Бордер' && <BorderAnimation />}








    </div>
  )
}



export default CSSElements;

