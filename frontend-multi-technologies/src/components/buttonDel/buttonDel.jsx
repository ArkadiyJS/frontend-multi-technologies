import React, { useState } from "react";
import s from "./buttonDel.module.css";

const ButtonDel = () => {
  const [isDelete, setIsDelete] = useState(false);
  const [deleteItemShow, setDeleteItemShow] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setDeleteItemShow(!deleteItemShow);
    setTimeout(() => setDeleteItemShow(true), 3200);
    if (!isDelete) {
      setIsDelete(true);
      setTimeout(() => setIsDelete(false), 3200);
    }
  };
  return (
    <button
      className={`${s.button} ${isDelete ? s.delete : ""}`}
      onClick={handleClick}
    >
      <div className={s.trash}>
        <div className={s.top}>
          <div className={s.paper}></div>
        </div>
        <div className={s.box}></div>
        <div className={s.check}>
          <svg viewBox="0 0 8 6">
            <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
          </svg>
        </div>
      </div>
      {deleteItemShow ? <div>Delete Item</div> : ""}
    </button>
  );
};

export default ButtonDel;
