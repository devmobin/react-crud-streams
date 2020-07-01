import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

export class StreamShow extends Component {
  componentDidMount() {
    const streamId = this.props.match.params.id
    this.props.fetchStream(streamId)
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    
    const { stream } = this.props
    return (
      <div>
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
})

const mapDispatchToProps = {
  fetchStream
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamShow)
