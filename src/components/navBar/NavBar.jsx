import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css'

function NavBar(props) {
  return (
    <div className={s.navBar} >


      <NavLink to='modal' ><button className={s.button} >Modal</button></NavLink>

      <NavLink to='quiz'><button className={s.button} >Quiz </button></NavLink>

      <NavLink to='gameButton'><button className={s.button} > Game btn</button></NavLink>
      <NavLink to='CSSElements'><button className={s.button} > css element</button></NavLink>


    </div>
  );
}

export default NavBar;