import React, { Component } from 'react'

export class GoogleAuth extends Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '917347162102-gcdkqds25281n1d1smellg5sffv4p79v.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance()
          this.setState({ isSignedIn: this.auth.isSignedIn.get() })
          this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) return null

    if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className='ui white google button'>
          <i className='google icon' />
          Sign Out
        </button>
      )
    }

    if (!this.state.isSignedIn) {
      return (
        <button onClick={this.onSignInClick} className='ui red google button'>
          <i className='google icon' />
          Sign In
        </button>
      )
    }
  }

  render() {
    return <div className='item'>{this.renderAuthButton()}</div>
  }
}

export default GoogleAuth
