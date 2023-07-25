import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css'

function NavBar(props) {
  return (
    <div  >
      <div className={s.text}>elements frontEnds</div>




      <NavLink to='modal'><button className={s.button} >Modal</button></NavLink>


      

=======
      
<div className={s.card}>

      <NavLink to='modal'><button className={s.button} >Modal</button></NavLink>

      </div>
      
      <div>


      <NavLink to='quiz'><button className={s.button} >Quiz </button></NavLink>
      </div>



      


      <NavLink to='gallery'><button className={s.button} >Photo gallery</button></NavLink>

      
      <div>

      <NavLink to='gallery'><button className={s.button} >Photo gallery</button></NavLink>
      </div>

      

    </div>
  );
}

export default NavBar;