import React from "react";
import s from "./checkBoxPencil.module.scss";

const CheckBoxPencil = () => {
  return (
    <div style={{ color: "white" }}>
      тут{`>`}
      <input className={`${s.cb} ${s.pristine}`} type="checkbox" />
      {`<`}тут
    </div>
  );
};

export default CheckBoxPencil;
