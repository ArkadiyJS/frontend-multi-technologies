import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ active, setActive, showModal, setShowModal }) {
  return (
    <div className={`navbar  ${showModal ? `open` : ""}`}>
      <h3>1</h3>
      <NavLink to="modal">
        <button
          style={{ marginTop: "5px", border: "1px solid black" }}
          onClick={() => {
            setShowModal(false), setActive(!active);
          }}
          className={"navbarBtn"}
        >
          Modal
        </button>
      </NavLink>

      <NavLink to="quiz">
        <button
          style={{ marginTop: "5px", border: "1px solid black" }}
          onClick={() => {
            setShowModal(false), setActive(!active);
          }}
          className={"navbarBtn"}
        >
          Quiz{" "}
        </button>
      </NavLink>
      <h3>1</h3>

      <NavLink to="gameButton">
        <button
          style={{ marginTop: "5px", border: "1px solid black" }}
          onClick={() => {
            setShowModal(false), setActive(!active);
          }}
          className={"navbarBtn"}
        >
          {" "}
          Game btn
        </button>
      </NavLink>
      <h3>1</h3>
      <NavLink to="CSSElements">
        <button
          style={{ marginTop: "5px", border: "1px solid black" }}
          onClick={() => {
            setShowModal(false), setActive(!active);
          }}
          className={"navbarBtn"}
        >
          {" "}
          css element
        </button>
      </NavLink>
      <h3>1</h3>

      <NavLink to="readTheText">
        <button
          style={{ marginTop: "5px", border: "1px solid black" }}
          onClick={() => {
            setShowModal(false), setActive(!active);
          }}
          className={"navbarBtn"}
        >
          {" "}
          read text
        </button>
      </NavLink>
    </div>
  );
}

export default NavBar;
