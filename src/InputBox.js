import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InputBox extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }

  // handleChange (event) {
  //   this.setState({ value: event.target.value }) && this.props.handleChange(this.state.value)
  // }

  render () {
    return <input type='text' onChange={this.props.handleInputChange} maxLength='1' name={this.props.name} />
  }
}

InputBox.propTypes = {
  name: PropTypes.string.isRequired,
  handleInputChange: function noop () {}
}

export default InputBox
