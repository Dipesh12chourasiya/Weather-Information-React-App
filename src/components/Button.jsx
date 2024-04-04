import React from "react";

const Button = (props) => {
  return (
    <button className="btn bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Button;
