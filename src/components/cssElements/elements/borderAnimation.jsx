import React from 'react';
import s from './borderAnimation.module.css'

function BorderAnimation(props) {
  return (
    <>
      <div className={s.border}>
        <span className={s.borderSpan}>
          <img alt='src' src='https://furman.top/uploads/posts/2022-06/1654737062_54-furman-top-p-magicheskii-krug-art-krasivo-oboi-56.jpg'></img>
        </span>

      </div>
    </>
  );
}

export default BorderAnimation
