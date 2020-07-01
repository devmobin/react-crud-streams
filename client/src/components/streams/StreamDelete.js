import React, { Component } from 'react'
import history from '../../history'
import Modal from '../Modal'

class StreamDelete extends Component {
  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    )  
  }

  render() {
    return (
      <div>
        Stream Delete
        <Modal
          title="Delete Stream"
          content="Are you sure you want to delete this stream?"
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    )
  }
}

export default StreamDelete
