import React, { Component } from 'react'
import PropTypes from 'prop-types'

import InputBox from './InputBox'

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
      items.push(<InputBox key={i.toString()} handleInputChange={this.handleInputChange} name={i.toString()} />)
    }

    return (
      <div>
        <div>{items}</div>
        <div>{this.state.characterArray}</div>
      </div>
    )
  }

  handleInputChange (event) {
    let stateCopy = this.state.characterArray
    stateCopy[Number(event.target.name)] = event.target.value
    this.setState({ characterArray: stateCopy })
  }
}

ReactIndividualCharacterInputBoxes.propTypes = {
  amount: PropTypes.number.isRequired
}

export default ReactIndividualCharacterInputBoxes
