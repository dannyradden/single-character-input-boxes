import React, { Component } from 'react'
import RICIBs from '../src/ReactIndividualCharacterInputBoxes'

import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#066dad+0,309dcf+100 */
  background: rgb(6, 109, 173); /* Old browsers */
  background: -moz-linear-gradient(
    top,
    rgba(6, 109, 173, 1) 0%,
    rgba(48, 157, 207, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(6, 109, 173, 1) 0%,
    rgba(48, 157, 207, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(6, 109, 173, 1) 0%,
    rgba(48, 157, 207, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr='#066dad',
      endColorstr='#309dcf',
      GradientType=0
    ); /* IE6-9 */
`

const Wrapper = styled.div`
  margin: auto;
  margin-top: 40px;
  width: 50%;
  padding: 10px;
  text-align: center;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial sans-serif;
  color: white;
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
      <Container>
        <Wrapper>
          <p>How many boxes do you want?</p>
          <input type='number' onChange={this.handleChange} />
        </Wrapper>
        <RICIBs amount={this.state.amount} handleOutputString={this.handleOutputString} autoFocus />
        <Wrapper>{this.state.outputString}</Wrapper>
      </Container>
    )
  }
}
export default App
