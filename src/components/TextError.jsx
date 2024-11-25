import React from "react";

function TextError(props) {
  return (
    <div>
      {console.log(props)}
      <div className="error">{props.children}</div>
    </div>
  );
}

export default TextError;
