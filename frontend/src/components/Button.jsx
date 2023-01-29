import React from "react";
import { PropTypes } from "prop-types";

function Button({ type, className, handleClick, label }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={className} onClick={handleClick}>
      {label}
    </button>
  );
}
Button.propTypes = {
  type: PropTypes.arrayOf(["button", "submit", "reset"]).isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
export default Button;
