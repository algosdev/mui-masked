import React from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from '@material-ui/core'
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
  id,
}) {
  return (
    <button
      className={`${className} mui-masked-button`}
      onClick={onClick}
      id={id}
      disabled={isLoading}
      type={type || 'submit'}
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      {isLoading ? (
        <span
          className='circular_progress_container'
          style={{ color: circleColor }}
        >
          <CircularProgress color='inherit' size={24} />
        </span>
      ) : (
        success || inner
      )}
    </button>
  )
}
Button.propTypes = {
  isLoading: PropTypes.boolean,
  success: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  inner: PropTypes.string,
  backgroundColor: PropTypes.string,
  circleColor: PropTypes.string,
  color: PropTypes.string,
}
export default Button
