import React from "react";

const Alert = (props) => {
  const capitalise = (word) => {
    if (word === "danger") {
      word = "Error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "50px" }} className="bg-trasparent">
      {props.alert && (
        <div
          className={`gradient-div  bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-gradient alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>
            {capitalise(props.alert.type)} : {props.alert.msg}
          </strong>
        </div>
      )}
    </div>
  );
};

export default Alert;
