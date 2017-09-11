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
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial sans-serif;
`

class ReactIndividualCharacterInputBoxes extends Component {
  constructor (props) {
    super(props)
    this.state = { characterArray: Array(props.amount) }

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
  }

  render () {
    const amount = this.props.amount
    let items = []

    for (var i = 0; i < amount; i++) {
      items.push(
        <InputBox
          key={i.toString()}
          handleKeyDown={this.handleKeyDown}
          handleFocus={this.handleFocus}
          name={i.toString()}
          ref={i}
        />
      )
    }

    return (
      <Wrapper>
        <div>{items}</div>
        <div>{this.state.characterArray}</div>
      </Wrapper>
    )
  }

  handleFocus (event) {
    var el = event.target
    setTimeout(function () {
      el.select()
    }, 0)
  }

  handleKeyDown (event) {
    event.preventDefault()
    if (event.keyCode > 47 && event.keyCode < 91) {
      event.target.value = event.key
      this.setCharacterArray(event)
      if (Number(event.target.name) !== this.props.amount - 1) {
        this.refs[Number(event.target.name) + 1].refs[1].refs[1].focus()
      }
    } else if (event.key === 'Backspace') {
      if (Number(event.target.name) !== 0 && event.target.value === '') {
        this.refs[Number(event.target.name) - 1].refs[1].refs[1].value = ''
        this.refs[Number(event.target.name) - 1].refs[1].refs[1].focus()
      } else {
        event.target.value = ''
      }
      this.setCharacterArray(event)
    } else if (Number(event.target.name) !== 0 && event.key === 'ArrowLeft') {
      this.refs[Number(event.target.name) - 1].refs[1].refs[1].focus()
    } else if (Number(event.target.name) !== this.props.amount - 1 && event.key === 'ArrowRight') {
      this.refs[Number(event.target.name) + 1].refs[1].refs[1].focus()
    }
  }

  setCharacterArray (event) {
    let stateCopy = this.state.characterArray
    stateCopy[Number(event.target.name)] = event.target.value
    this.setState({ characterArray: stateCopy })
  }
}

ReactIndividualCharacterInputBoxes.propTypes = {
  amount: PropTypes.number.isRequired
}

export default ReactIndividualCharacterInputBoxes
