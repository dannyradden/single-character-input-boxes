import React, { Component } from 'react'
import PropTypes from 'prop-types'

import InputBox from './InputBox'

class ReactIndividualCharacterInputBoxes extends Component {
  render () {
    const amount = this.props.amount
    let items = []

    for (var i = 0; i < amount; i++) {
      items.push(<InputBox className='indent' key={i} />)
    }

    return <div>{items}</div>
  }
}

ReactIndividualCharacterInputBoxes.propTypes = {
  amount: PropTypes.number.isRequired
}

export default ReactIndividualCharacterInputBoxes
