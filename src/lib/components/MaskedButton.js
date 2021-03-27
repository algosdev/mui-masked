import React from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from '@material-ui/core'
import { Button } from '../styled'
function MaskedButton({
  isLoading,
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
    <Button
      className={`${className}`}
      onClick={onClick}
      id={id}
      disabled={isLoading}
      type={type || 'submit'}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        height: '42px',
        width: '120px',
      }}
    >
      {isLoading ? (
        <span
          className='circular_progress_container'
          style={{ color: circleColor }}
        >
          <CircularProgress color='inherit' size={20} />
        </span>
      ) : (
        inner
      )}
    </Button>
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
export default MaskedButton
