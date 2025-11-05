import "./App.css";

import { NavLink, Route, Routes } from "react-router-dom";

import Modal from "./components/modal/Modal";
import NavBar from "./components/navBar/NavBar";
import Quiz from "./components/quiz/Quiz";
import GameBtn from "./components/gameBtn/gameBtn";
import CSSElements from "./components/cssElements/cssElements";
import ReadTheText from "./components/readTheText/readTheText";
import MenuBotton from "./components/menuBtn/MenuBotton";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div className="Page">
      <div className="Header">
        <NavLink to="/">
          <img
            src="https://sun9-west.userapi.com/sun9-1/s/v1/ig2/D-elL-GHz9_lpeq9AwLr_WPYYEA4NnWqwpn49TQL4_J_bu03zFruNkDjqY6LVRbPBMTrjuN8k9OM3c7BynN1e1GN.jpg?size=1202x193&quality=96&type=album"
            alt="frontEnd"
          />
        </NavLink>
      </div>

      <div className="circleBG"></div>
      <MenuBotton
        showModal={showModal}
        setShowModal={setShowModal}
        active={active}
        setActive={setActive}
      />

      <NavBar
        showModal={showModal}
        setShowModal={setShowModal}
        active={active}
        setActive={setActive}
      />

      <div className="Content">
        <Routes>
          <Route path="/modal" element={<Modal />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/gameButton" element={<GameBtn />} />
          <Route path="/CSSElements" element={<CSSElements />} />
          <Route path="/readTheText" element={<ReadTheText />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
