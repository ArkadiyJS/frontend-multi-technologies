import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css'

function NavBar(props) {
  return (
    <div className={s.blokTech} >
      <div className={s.text}>elements frontEnds</div>

      


      <NavLink to='modal'><button className={s.button} >Modal</button></NavLink>


      


      <NavLink to='quiz'><button className={s.button} >Quiz </button></NavLink>


      


      <NavLink to='gallery'><button className={s.button} >Photo gallery</button></NavLink>

      

    </div>
  );
}

export default NavBar;