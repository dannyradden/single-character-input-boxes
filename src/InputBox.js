import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Input = styled.input`
  justify-content: space-between;
  width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 22px;
`

class InputBox extends Component {
  render () {
    return (
      <Input
        type='text'
        onChange={this.props.handleInputChange}
        onKeyDown={this.props.handleKeyDown}
        onFocus={this.props.handleFocus}
        maxLength='1'
        name={this.props.name}
        ref={1}
        innerRef={1}
      />
    )
  }
}

InputBox.propTypes = {
  name: PropTypes.string.isRequired,
  handleInputChange: function noop () {},
  handleKeyDown: function noop () {},
  handleFocus: function noop () {}
}

export default InputBox
