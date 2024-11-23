import React from "react";

function Notify(props) {
  let notifyStyle = "bg-green-400 my-5 w-0 h-10 float-right overflow-hidden ";
  props.notify
    ? (notifyStyle = "bg-green-400 my-5 w-44 float-right overflow-hidden")
    : (notifyStyle = "bg-green-400 my-5 w-44 float-right overflow-hidden");
  console.log(notifyStyle);

  return <div className={notifyStyle}>Added to cart</div>;
}

export default Notify;
