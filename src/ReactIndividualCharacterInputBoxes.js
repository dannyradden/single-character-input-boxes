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

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  render () {
    const amount = this.props.amount
    let items = []

    for (var i = 0; i < amount; i++) {
      items.push(<InputBox key={i.toString()} handleInputChange={this.handleInputChange} name={i.toString()} ref={i} />)
    }

    return (
      <Wrapper>
        <div>THIS IS A THING</div>
        <div>{items}</div>
        <div>{this.state.characterArray}</div>
      </Wrapper>
    )
  }

  handleInputChange (event) {
    let stateCopy = this.state.characterArray
    stateCopy[Number(event.target.name)] = event.target.value
    this.setState({ characterArray: stateCopy })
    if (Number(event.target.name) !== this.props.amount - 1) {
      this.refs[Number(event.target.name) + 1].refs[1].refs[1].focus()
    }
  }
}

ReactIndividualCharacterInputBoxes.propTypes = {
  amount: PropTypes.number.isRequired
}

export default ReactIndividualCharacterInputBoxes
