import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css'

function NavBar(props) {
  return (
    <div >
      <div className={s.text}>elements frontEnds</div>

      <hr />


      <NavLink to='modal'><button className={s.button} >Modal</button></NavLink>


      <hr />


      <NavLink to='quiz'><button className={s.button} >Quiz </button></NavLink>


      <hr />


      <NavLink to='gallery'><button className={s.button} >Photo gallery</button></NavLink>

      <hr />

    </div>
  );
}

export default NavBar;