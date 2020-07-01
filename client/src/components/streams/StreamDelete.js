import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import history from '../../history'
import Modal from '../Modal'
import { fetchStream, deleteStream } from '../../actions'

class StreamDelete extends Component {
  componentDidMount() {
    const streamId = this.props.match.params.id
    this.props.fetchStream(streamId)
  }

  renderActions() {
    const streamId = this.props.match.params.id
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(streamId)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    )
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?'
    }

    return `Are you sure you want to delete the stream "${this.props.stream.title}"`
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
})

const mapDispatchToProps = {
  fetchStream,
  deleteStream,
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete)
