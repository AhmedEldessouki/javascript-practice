/* eslint-disable space-before-function-paren */
class FormHandler {
  constructor(form, fields, submitButton, showPasswordButton) {
    this.form = form
    this.fields = fields
    this.submitButton = submitButton
    this.showPasswordButton = showPasswordButton
  }

  initialize() {
    this.validateOnEntry()
    this.validateOnSubmit()
  }

  validateOnSubmit() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault()
      const { name, password, email, userType } = this.form
      console.log('[FormData]: ', { name: name.value, password: password.value, email: email.value, userType: userType.value })
    })
  }

  validateOnEntry() {
    this.submitButton.disabled = true
    this.setRegistrationStep(1)
    this.showPasswordButton.onclick = () => {
      setTimeout(() => {
        document.querySelector('#password').setAttribute('type', 'password')
      }, 500)
      document.querySelector('#password').setAttribute('type', 'text')
    }
    const isValid = {
      name: false,
      password: false,
      email: false,
      userType: false
    }

    const { name, password, email, userType } = this.form

    name.addEventListener('focus', (e) => {
      document.querySelector('.name').className = 'name input-group input-is-focused'
    })
    name.onblur = (e) => {
      const inputValue = e.target.value
      if (inputValue.trim() === '') {
        document.querySelector('.name').className = 'name input-group '
      }
      isValid.name = e.target.validity.valid
      this.isValid(isValid)
    }

    password.addEventListener('focus', (e) => {
      document.querySelector('.password').className = 'password input-group input-is-focused'
    })
    password.onblur = (e) => {
      const inputValue = e.target.value
      if (inputValue.trim() === '') {
        document.querySelector('.password').className = 'password input-group '
      }
      isValid.password = e.target.validity.valid
      this.isValid(isValid)
    }

    email.addEventListener('focus', (e) => {
      document.querySelector('.email ').className = 'email input-group input-is-focused'
    })
    email.onblur = (e) => {
      const inputValue = e.target.value
      isValid.email = e.target.validity.valid && this.isValidateEmail(email.value)
      this.isValid(isValid)
      console.log('[ isValid.email]', isValid.email)
      if (inputValue.trim() === '') {
        document.querySelector('.email').className = 'email input-group '
      } else if (!isValid.email) {
        if (!document.querySelector('.error-message')) {
          const errorView = document.createElement('span')
          const message = 'Please enter valid email address'
          errorView.className = 'error-message'
          errorView.setAttribute('role', 'alert')
          errorView.setAttribute('aria-errormessage', message)
          errorView.innerHTML = message
          document.querySelector('.email').appendChild(errorView)
        }
        document.querySelector('#email').className = 'error-input'
        email.parentElement.querySelector('#email-label').className = ' error-label'
      } else if (isValid.email) {
        document.querySelector('.email').removeChild(document.querySelector('.error-message'))
        document.querySelector('#email').className = ''
        document.querySelector('#email-label').className = ''
      }
    }

    userType.onblur = (e) => {
      isValid.userType = e.target.validity.valid
      this.isValid(isValid)
    }
  }

  isValid(isValid) {
    const { name, password, email, userType } = isValid
    this.submitButton.disabled = !(name && password && email && userType)
  }

  isValidateEmail(email) {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  setRegistrationStep(stepNumber = 1) {
    document.querySelector(`.stepNo${stepNumber}`).className = `.stepNo${stepNumber} currentStep`
  }
}

const form = document.querySelector('.form-wrapper')
const submitButton = document.querySelector('.submit')
const showPasswordButton = document.querySelector('.show-password')
const fields = ['name', 'email', 'password', 'userType']

const validator = new FormHandler(form, fields, submitButton, showPasswordButton)

validator.initialize()
