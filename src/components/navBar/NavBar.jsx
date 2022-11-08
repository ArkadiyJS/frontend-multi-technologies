import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css'

function NavBar(props) {
  return (
    <div >
      <button className={s.button} >
        <NavLink to='modal'>Modal</NavLink>
      </button>

    </div>
  );
}

export default NavBar;