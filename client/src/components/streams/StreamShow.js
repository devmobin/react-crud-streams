import React, { Component } from 'react'
import flv from 'flv.js'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

export class StreamShow extends Component {
  constructor(props) {
    super(props)

    this.videoRef = React.createRef()
  }

  componentDidMount() {
    const streamId = this.props.match.params.id
    this.props.fetchStream(streamId)

    this.buildPlayer()
  }

  componentDidUpdate() {
    this.buildPlayer()
  }

  buildPlayer() {
    if (this.player || !this.props.stream) return
    const streamId = this.props.match.params.id

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${streamId}.flv`
    })
    this.player.attachMediaElement(this.videoRef.current)
    this.player.load()
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }

    const { stream } = this.props
    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
})

const mapDispatchToProps = {
  fetchStream,
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamShow)
