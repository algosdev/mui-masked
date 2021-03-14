import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
const MaskedInputPhone = ({
  placeholder,
  label,
  fullWidth,
  variant = 'outlined',
  value,
  onChange,
  required = true,
  name,
  className,
  id,
  lang = 'en',
  maskChar = ' ',
}) => {
  const [error, setError] = useState(false)
  const errorMessages = {
    ru: {
      length: 'Пожалуйста, введите полностью номер телефона!',
      empty: 'Номер телефона обязателен!',
    },
    en: {
      length: 'Please enter your full phone number!',
      empty: 'Phone number is required!',
    },
    uz: {
      length: "Iltimos, telefon raqamingizni  to'liq  kiriting!",
      empty: 'Telefon raqamingizni kiriting',
    },
  }
  const validatePhoneNumber = (value) => {
    if (value === '') {
      setError('empty')
    } else if (value.length !== 13) {
      setError('length')
    } else {
      setError(false)
    }
  }
  const mask = `+\\9\\9\\8 99 999 99 99`
  const inputProps = {
    label,
    variant,
    fullWidth: !!fullWidth,
    placeholder,
    mask,
    className: `${className} ${error && 'error'}`,
    name,
    id,
    required,
  }
  const maskProps = {
    mask,
    value,
    maskChar,
    onBlur: (e) => {
      validatePhoneNumber(e.target.value.replace(/\s/g, ''))
    },
    onChange: onChange
      ? (e) => {
          setError(false)
          console.log(e.target.value.replace(/\s/g, '').length)
          onChange(e.target.value.replace(/\s/g, ''), e.target.name, e)
        }
      : '',
  }

  return (
    <>
      <InputMask {...maskProps}>
        {() => <TextField {...inputProps} />}
      </InputMask>
      {error && (
        <div className='error_message'>{errorMessages?.[lang]?.[error]}</div>
      )}
    </>
  )
}
MaskedInputPhone.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  fullWidth: PropTypes.boolean,
  variant: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.boolean,
  className: PropTypes.string,
  id: PropTypes.string,
  lang: PropTypes.string,
  maskChar: PropTypes.string,
  name: PropTypes.string,
}
export default MaskedInputPhone
