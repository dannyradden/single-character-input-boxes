import React, { Component } from 'react'
import RICIBs from '../src/ReactIndividualCharacterInputBoxes'

import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto;
  margin-top: 40px;
  width: 50%;
  padding: 10px;
  text-align: center;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial sans-serif;
`

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      amount: 5,
      outputString: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleOutputString = this.handleOutputString.bind(this)
  }

  handleChange (event) {
    this.setState({ amount: Number(event.target.value) })
  }

  handleOutputString (string) {
    this.setState({ outputString: string })
  }

  render () {
    return (
      <div>
        <Wrapper>
          <p>How many boxes do you want?</p>
          <input type='number' onChange={this.handleChange} />
        </Wrapper>
        <RICIBs amount={this.state.amount} handleOutputString={this.handleOutputString} />
        <Wrapper>{this.state.outputString}</Wrapper>
      </div>
    )
  }
}
export default App
