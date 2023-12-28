import s from './cssElements.module.css'
import React, { useState } from 'react'
import BorderAnimation from './elements/borderAnimation/borderAnimation';
import ShadowTheBacklight from './elements/shadowTheBacklight/shadowTheBacklight';


function CSSElements() {





  const pickCssElements = ['Бордер', 'Подсветка лого.',]


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
      {pickElement === 'Подсветка лого.' && <ShadowTheBacklight />}







    </div>
  )
}



export default CSSElements;

