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
`

class ReactIndividualCharacterInputBoxes extends Component {
  constructor (props) {
    super(props)
    this.state = { characterArray: Array(props.amount).fill(null) }

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.inputElements = {}
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (
      this.props.amount !== nextProps.amount ||
      this.props.inputRegExp !== nextProps.inputRegExp
    ) {
      return true
    }
    return false
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.amount !== nextProps.amount) {
      this.setState({ characterArray: Array(nextProps.amount).fill(null) })
      this.props.handleOutputString('')
    }
  }

  renderItems () {
    let items = []

    for (var i = 1; i < this.props.amount + 1; i++) {
      items.push(
        <InputBox
          type={this.props.password ? 'password' : 'text'}
          key={i}
          handleKeyDown={this.handleKeyDown}
          handleFocus={this.handleFocus}
          handleChange={this.handleChange}
          name={'input' + i}
          inputRef={el => {
            if (!el) return
            this.inputElements[el.name] = el
          }}
        />
      )
    }

    return items
  }

  render () {
    return (
      <Wrapper>
        <div>{this.renderItems()}</div>
      </Wrapper>
    )
  }

  handleChange ({ target }) {
    if (target.value.match(this.props.inputRegExp)) {
      this.focusNextChar(target)
      this.setModuleOutput(target)
    } else {
      target.value = this.state.characterArray[target.name.replace('input', '')]
    }
  }

  handleKeyDown ({ target, key }) {
    if (key === 'Backspace') {
      if (target.value === '' && target.previousElementSibling !== null) {
        target.previousElementSibling.value = ''
        this.focusPrevChar(target)
      } else {
        target.value = ''
      }
      this.setModuleOutput(target)
    } else if (key === 'ArrowLeft') {
      this.focusPrevChar(target)
    } else if (key === 'ArrowRight') {
      this.focusNextChar(target)
    }
  }

  handleFocus ({ target }) {
    var el = target
    setTimeout(function () {
      el.select()
    }, 0)
  }

  focusPrevChar (target) {
    if (target.previousElementSibling !== null) {
      target.previousElementSibling.focus()
    }
  }

  focusNextChar (target) {
    if (target.nextElementSibling !== null) {
      target.nextElementSibling.focus()
    }
  }

  setModuleOutput (target) {
    let stateCopy = this.state.characterArray
    for (var i = 1; i < this.props.amount + 1; i++) {
      stateCopy[i] = this.inputElements['input' + i].value
    }
    stateCopy[Number(target.name)] = target.value
    this.setState({ characterArray: stateCopy })
    this.props.handleOutputString(this.state.characterArray.join(''))
  }
}

ReactIndividualCharacterInputBoxes.defaultProps = {
  amount: 5,
  inputRegExp: /^[0-9]$/,
  password: false
}
ReactIndividualCharacterInputBoxes.propTypes = {
  amount: PropTypes.number,
  inputRegExp: PropTypes.instanceOf(RegExp),
  password: PropTypes.bool,
  handleOutputString: PropTypes.func.isRequired
}

export default ReactIndividualCharacterInputBoxes
