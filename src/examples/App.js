import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import {
  MaskedInputPhone,
  MaskedInputCode,
  MaskedButton,
  isValidForm,
} from '../lib'
const useStyles = makeStyles(() => ({
  root: {},
}))
const App = () => {
  const classes = useStyles()
  const [values, setValues] = useState({})
  const [errorCode, setErrorCode] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const handleChange = (value, name) => {
    setValues({ ...values, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (isValidForm(e)) {
      setIsLoading(true)
      setTimeout(() => {
        setErrorCode(true)
        setIsLoading(false)
      }, 3000)
    }
  }
  console.log(values)
  return (
    <div style={{ width: 640, margin: '15px auto' }}>
      <form onSubmit={handleSubmit}>
        <MaskedInputPhone
          onChange={handleChange}
          phone
          className={classes.root}
          name='phone'
          lang='uz'
          label='Phone number'
          placeholder='Enter phone number'
          noError
        />
        <MaskedInputCode
          onChange={handleChange}
          otp
          className={classes.root}
          name='code'
          incorrect={errorCode}
          setIncorrect={setErrorCode}
          label='OTP'
          placeholder='Enter one time password'
        />
        <MaskedButton
          color='#fff'
          backgroundColor='rgb(73, 167, 255)'
          circleColor='white'
          isLoading={isLoading}
        />
      </form>
    </div>
  )
}
export default App
