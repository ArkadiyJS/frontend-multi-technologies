import s from './cssElements.module.css'


import React, { useState } from 'react'


import BorderAnimation from './elements/borderAnimation/borderAnimation';
import ShadowTheBacklight from './elements/shadowTheBacklight/shadowTheBacklight';
import Carousel from './elements/carousel/carousel';


function CSSElements() {





  const pickCssElements = ['Бордер', 'Подсветка лого.', 'carousel',]


  const [showCssElements, setShowCssElements] = useState(false)

  const [pickElement, setPickElement] = useState('')







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
      {pickElement === 'carousel' && <Carousel />}








    </>
  )
}



export default CSSElements;

