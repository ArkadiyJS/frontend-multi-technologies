import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css'

function NavBar(props) {
  return (
    <div >
      <div className={s.text}>elements frontEnds</div>

      <hr />

      <button className={s.button} >
        <NavLink to='modal'>Modal</NavLink>
      </button>

      <hr />

      <button className={s.button} >
        <NavLink to='quiz'>Quiz</NavLink>
      </button>

      <hr />

    </div>
  );
}

export default NavBar;