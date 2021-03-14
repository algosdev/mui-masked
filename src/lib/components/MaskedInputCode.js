import React, { useState, useEffect } from 'react'
import InputMask from 'react-input-mask'
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
const generateMaskForCode = (length) => {
  let mask = ''
  for (var i = 0; i < length; i++) {
    if (i === length - 1) {
      mask += `9`
    } else {
      mask += `9 `
    }
  }
  return mask
}
const MaskedInputCode = ({
  placeholder,
  label,
  fullWidth,
  variant = 'outlined',
  value,
  onChange,
  required = true,
  name,
  className,
  length = 6,
  incorrect,
  id,
  lang = 'en',
  maskChar = ' ',
  setIncorrect = () => {},
}) => {
  const [error, setError] = useState(false)
  const mask = generateMaskForCode(length)
  const errorMessages = {
    ru: {
      incorrect: 'Одноразовый пароль неверен!',
      empty: `Требуется одноразовый пароль из ${length} цифр!`,
    },
    en: {
      incorrect: 'One time password is incorrect!',
      empty: `One time password with ${length} digit is required!`,
    },
    uz: {
      incorrect: "Bir martalik parol noto'g'ri!",
      empty: `${length} raqamli bir martalik parol talab qilinadi`,
    },
  }
  const validate = (value) => {
    console.log(value.length !== length, incorrect)
    if (value.length !== length) {
      setError('empty')
    } else if (incorrect) {
      setError('incorrect')
    } else {
      setError(false)
    }
  }
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
    type: 'tel',
  }
  const maskProps = {
    mask,
    value,
    maskChar,
    onBlur: (e) => {
      validate(e.target.value.replace(/\s/g, ''))
    },
    onChange: onChange
      ? (e) => {
          setError(false)
          setIncorrect(false)
          console.log(e.target.value.replace(/\s/g, '').length)
          onChange(e.target.value.replace(/\s/g, ''), e.target.name, e)
        }
      : '',
  }
  useEffect(() => {
    if (incorrect) {
      setError('incorrect')
    }
  }, [incorrect])

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
MaskedInputCode.propTypes = {
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
  setIncorrect: PropTypes.func,
  length: PropTypes.number,
  incorrect: PropTypes.boolean,
}
export default MaskedInputCode
