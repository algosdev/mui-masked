# mui-masked

A library of React components created using [`mui-masked`].


## Installation

```
npm install mui-masked
```

## Usage 

```typescript jsx
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { MaskedInputPhone, MaskedInputCode, Button, isValidForm } from '../lib'
const useStyles = makeStyles(() => ({
  root: {
    margin: '10px 0',
  },
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
  return (
      <form onSubmit={handleSubmit}>
        <MaskedInputPhone
          onChange={handleChange}
          phone
          fullWidth
          className={classes.root}
          name='phone'
          label='Phone number'
          placeholder='Enter phone number'
        />
        <MaskedInputCode
          onChange={handleChange}
          otp
          fullWidth
          className={classes.root}
          name='code'
          incorrect={errorCode}
          setIncorrect={setErrorCode}
          label='OTP'
          placeholder='Enter one time password'
        />
        <Button
          color='#fff'
          backgroundColor='rgb(73, 167, 255)'
          circleColor='white'
          isLoading={isLoading}
        />
      </form>
  )
}
export default App
```
