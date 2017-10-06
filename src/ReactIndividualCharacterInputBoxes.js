import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import InputBox from './InputBox'

const Wrapper = styled.div`
  margin: auto;
  margin-top: 100px;
  width: 50%;
  padding: 10px;
  text-align: center;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial sans-serif;
`

class ReactIndividualCharacterInputBoxes extends Component {
  constructor (props) {
    super(props)
    this.state = { characterArray: Array(props.amount) }

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  render () {
    let items = []

    for (var i = 0; i < this.props.amount; i++) {
      items.push(
        <InputBox
          key={i.toString()}
          handleKeyDown={this.handleKeyDown}
          handleFocus={this.handleFocus}
          handleChange={this.handleChange}
          name={i.toString()}
          ref={i}
        />
      )
    }

    return (
      <Wrapper>
        <div>{items}</div>
      </Wrapper>
    )
  }

  handleChange (event) {
    if (event.target.value.match(this.props.inputRegExp)) {
      this.focusNextChar(event.target)
      this.setModuleOutput(event)
    } else {
      event.target.value = this.state.characterArray[event.target.name]
    }
  }

  handleKeyDown (event) {
    if (event.key === 'Backspace') {
      if (event.target.value === '' && Number(event.target.name) !== 0) {
        this.refs[Number(event.target.name) - 1].refs[1].refs[1].value = ''
        this.focusPrevChar(event.target)
      } else {
        event.target.value = ''
      }
      this.setModuleOutput(event)
    } else if (event.key === 'ArrowLeft') {
      this.focusPrevChar(event.target)
    } else if (event.key === 'ArrowRight') {
      this.focusNextChar(event.target)
    }
  }

  handleFocus (event) {
    var el = event.target
    setTimeout(function () {
      el.select()
    }, 5)
  }

  focusPrevChar (target) {
    if (Number(target.name) !== 0) {
      this.refs[Number(target.name) - 1].refs[1].refs[1].focus()
    }
  }

  focusNextChar (target) {
    if (Number(target.name) !== this.props.amount - 1) {
      this.refs[Number(target.name) + 1].refs[1].refs[1].focus()
    }
  }

  setModuleOutput (event) {
    let stateCopy = this.state.characterArray
    for (var i = 0; i < this.props.amount; i++) {
      stateCopy[i] = this.refs[i].refs[1].refs[1].value
    }
    stateCopy[Number(event.target.name)] = event.target.value
    this.setState({ characterArray: stateCopy })
    this.props.handleOutputString(this.state.characterArray.join(''))
  }
}

ReactIndividualCharacterInputBoxes.defaultProps = {
  amount: 5,
  inputRegExp: /^[a-zA-Z0-9]$/
}
ReactIndividualCharacterInputBoxes.propTypes = {
  amount: PropTypes.number,
  inputRegExp: PropTypes.instanceOf(RegExp),
  handleOutputString: PropTypes.func.isRequired
}

export default ReactIndividualCharacterInputBoxes
