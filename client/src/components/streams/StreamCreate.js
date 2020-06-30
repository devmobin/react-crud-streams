import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends Component {
  renderInput({ input, label }) {
    return (
      <div className='field'>
        <label>{label}</label>
        <input {...input} />
      </div>
    )
  }

  render() {
    return (
      <form className="ui form">
        <Field name='title' label='Enter Title' component={this.renderInput} />
        <Field
          name='description'
          label='Enter Description'
          component={this.renderInput}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate)
