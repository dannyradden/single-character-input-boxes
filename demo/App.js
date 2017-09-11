import React, { Component } from 'react'
import ReactIndividualCharacterInputBoxes from '../src/ReactIndividualCharacterInputBoxes'

import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto;
  margin-top: 40px;
  width: 50%;
  padding: 10px;
  text-align: center;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial sans-serif;
`

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { amount: 5 }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ amount: Number(event.target.value) })
  }

  render () {
    return (
      <div>
        <Wrapper>
          <p>How many boxes do you want?</p>
          <input type='number' onChange={this.handleChange} />
        </Wrapper>
        <ReactIndividualCharacterInputBoxes amount={this.state.amount} />
      </div>
    )
  }
}
export default App
