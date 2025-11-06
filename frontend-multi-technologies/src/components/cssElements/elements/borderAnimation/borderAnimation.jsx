import React from "react";

import s from "./borderAnimation.module.css";

function BorderAnimation() {
  return (
    <>
      <div className={s.border}>
        <span className={s.borderSpan}>
          <img
            alt="src"
            src="https://i.pinimg.com/736x/ef/c6/31/efc631f96d82ab4a7e5fdee321681b6c.jpg"
          ></img>
        </span>
      </div>
    </>
  );
}

export default BorderAnimation;
