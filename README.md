# mui-masked

A library of React components

## Installation

```
npm install mui-masked
```

and also include stylesheet file in your global .css file

```
@import "mui-masked/dist/style.css"
```

## Usage

```typescript jsx
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import {
  MaskedInputPhone,
  MaskedInputCode,
  Button,
  isValidForm,
} from 'mui-masked'
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
    // If all fields are valid
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
        fullWidth
        className={classes.root}
        name='phone'
        label='Phone number'
        placeholder='Enter phone number'
      />
      <MaskedInputCode
        onChange={handleChange}
        fullWidth
        className={classes.root}
        name='code'
        lang='en'
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

## Component props

```
<Button />
```

| prop            | type       | default   | definition                                            |
| --------------- | ---------- | --------- | ----------------------------------------------------- |
| isLoading       | `boolean`  | `false`   | - if `true`, circular progress is shown inside button |
| type            | `string`   | `submit`  | - button type (`button,submit, reset`)                |
| className       | `string`   | `none`    | - class name for button                               |
| onClick         | `function` | `none`    | - onClick event listener function                     |
| inner           | `string`   | `Submit`  | - default inner text inside button                    |
| backgroundColor | `string`   | `#49a7ff` | - background color of button                          |
| circleColor     | `string`   | `#fff`    | - color of circular progress                          |
| color           | `string`   | `#fff`    | - color of text inside buttton                        |

<br />
<br />
<br />
