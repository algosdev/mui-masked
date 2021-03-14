import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

function Button({
  isLoading,
  success,
  type,
  className,
  onClick,
  inner = 'Submit',
  backgroundColor = 'rgb(73, 167, 255)',
  circleColor = '#fff',
  color = '#fff',
  id
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: className,
    onClick: onClick,
    id: id,
    type: type || 'submit',
    style: {
      backgroundColor: backgroundColor,
      color: color
    }
  }, isLoading ? /*#__PURE__*/React.createElement("span", {
    className: "circular_progress_container",
    style: {
      color: circleColor
    }
  }, /*#__PURE__*/React.createElement(CircularProgress, {
    color: "inherit",
    size: 24
  })) : success || inner);
}

Button.propTypes = {
  name: PropTypes.string,
  isLoading: PropTypes.boolean,
  success: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  inner: PropTypes.string,
  backgroundColor: PropTypes.string,
  circleColor: PropTypes.string,
  color: PropTypes.string
};
export default Button;