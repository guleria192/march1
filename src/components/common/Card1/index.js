import React from "react";

function Card1({ icon, title1, title2, para, sub, sub2, price, btn }) {
  return (
    <div className="box-1">
      <div className="box-2">
        <div className="box-3">
          <img src={icon} />
        </div>
        <div className="box-4">
          <h3>{title1}</h3>
          <p>{sub}</p>
        </div>
      </div>
      <div className="box-5">
       <h3>{title2}</h3>
       <span>{sub2}</span>
       <p>{para}</p>
      </div>
      <div className="box-6">
        <div className="box-7">{price}</div>
        <div className="box-8">{btn}</div>
      </div>
    </div>
  );
}

export default Card1;