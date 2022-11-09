
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Modal from './components/modal/Modal';
import NavBar from './components/navBar/NavBar';
import Quiz from './components/quiz/Quiz';

function App() {
  return (
    <div className="Page">

      <div className='Header'>
        <NavLink to='/'>
          <img src='https://sun9-west.userapi.com/sun9-1/s/v1/ig2/D-elL-GHz9_lpeq9AwLr_WPYYEA4NnWqwpn49TQL4_J_bu03zFruNkDjqY6LVRbPBMTrjuN8k9OM3c7BynN1e1GN.jpg?size=1202x193&quality=96&type=album' alt='frontEnd' />
        </NavLink>
      </div>

      <div className='NavBar'>
        <NavBar />
      </div>


      <div className='Content'>
        <Routes>
          <Route path='/modal' element={<Modal />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
