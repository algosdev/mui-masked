export const isValidForm = (e) => {
  if (e?.target?.children) {
    const childrens = e.target.children
    let valid = true
    for (var i = 0; i < childrens.length; i++) {
      if (childrens[i].className === 'error_message') {
        valid = false
      }
    }
    return valid
  }
}
export const validateForm = (e, callback) => {
  if (e?.target?.children) {
    if (isValidForm(e)) {
      callback()
    }
  }
}
