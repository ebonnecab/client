import React from 'react'
import InputText from '../../../../Components/Input/InputText.jsx'

// eslint-disable-next-line react/prefer-stateless-function
export default class LogIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      enteredUsername: '',
      enteredPassword: '',
    }

    this.usernameStateHandler = this.usernameStateHandler.bind(this)
    this.passwordStateHandler = this.passwordStateHandler.bind(this)
  }

  usernameStateHandler(event) {
    this.setState({
      enteredUsername: event.target.value,
    })
  }

  handleResponse() {

  }
  

  passwordStateHandler(event) {
    this.setState({
      enteredPassword: event.target.value,
    })
  }

  render() {
    const { enteredUsername, enteredPassword } = this.state

    return (
      <div id="login-form">
        <form action="/api/auth/sign-in" method="post">
          {/* Username Input */}
          <InputText
            divId="username-input"
            labelText="Username"
            type="text"
            placeholder="jen@email.com"
            name="username"
            stateText={enteredUsername}
            onChange={this.usernameStateHandler}
          />

          {/* Password Input */}
          <InputText
            divId="password-input"
            labelText="Password"
            type="password"
            placeholder="password"
            name="password"
            stateText={enteredPassword}
            onChange={this.passwordStateHandler}
          />

          <button type="submit" onClick={
            (enteredUsername, enteredPassword) => {this.props.handleSubmit(enteredUsername, enteredPassword)}
          }>Log In</button>
        </form>
      </div>
    )
  }
}
