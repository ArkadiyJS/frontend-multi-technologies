import s from './cssElements.module.css'
import React, { useState } from 'react'
import BorderAnimation from './elements/borderAnimation/borderAnimation';
import ShadowTheBacklight from './elements/shadowTheBacklight/shadowTheBacklight';


function CSSElements() {





  const pickCssElements = ['Бордер', 'Подсветка лого.',]


  const [showCssElements, setShowCssElements] = useState(false)

  const [pickElement, setPickElement] = useState('Подсветка лого.')







  return (
    <>
      <ul className={s.ulPointer} onClick={() => { setShowCssElements(!showCssElements) }}>

        <h1 className={s.pick}>Выбери</h1>

        {showCssElements ? pickCssElements.map((CssElements, i) => (
          <li>

            <button onClick={() => setPickElement(CssElements)} className='button' key={i}>
              {CssElements}
            </button>

          </li>)) : ''}

      </ul>

      <h1 className={s.pickName}>{pickElement}</h1>

      {/* рендер выбраного елемента в списке */}

      {pickElement === 'Бордер' && <BorderAnimation />}
      {pickElement === 'Подсветка лого.' && <ShadowTheBacklight />}







    </>
  )
}



export default CSSElements;

