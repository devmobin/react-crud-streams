import React from 'react'
import { connect } from 'react-redux'

function StreamEdit(props) {
  return (
    <div>
      Stream Edit
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
})

export default connect(mapStateToProps)(StreamEdit)
