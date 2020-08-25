import React, { Component } from 'react'
import RICIBs from '../src/ReactIndividualCharacterInputBoxes'

import styled, {createGlobalStyle} from 'styled-components'

const Container = styled.div`
  top: 0;
  left: 0;
  height: 120%
  margin: 0px auto;
  max-width: 960px;
`

const Wrapper = styled.div`
  margin: auto;
  padding: 10px;
  text-align: center;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial sans-serif;
  color: white;
  width: 100%;
  text-align: center;
  input:focus, textarea:focus, select:focus{
    outline: none;
  }
`

const Header = styled.div`
  border-bottom: 1px solid rgb(235, 237, 240);
  color: white;
  margin: auto;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
  Arial sans-serif;
  padding: 10px;
  text-align: center;
`

const Footer = styled.div`
  display: flex;
  margin: auto;
  padding: 10px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial sans-serif;
  color: white;
  border-top: 1px solid rgb(235, 237, 240)
`
const GlobalStyle = createGlobalStyle`
  body {
    top: 0;
    left: 0;
    height: 120%
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
    ) fixed; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    background-size: cover;
    filter: progid:DXImageTransform.Microsoft.gradient(
        startColorstr='#066dad',
        endColorstr='#309dcf',
        GradientType=0
      ); /* IE6-9 */
  }
`

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      amount: 5,
      outputString: '',
      regEx: RegExp('^[0-9]$')
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleOutputString = this.handleOutputString.bind(this)
    this.handleRegExChange = this.handleRegExChange.bind(this)

  }

  handleRegExChange (event) {
    this.setState({ regEx: RegExp(event.target.value) })
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
        <GlobalStyle />
        <Header>
          <h1>React Individual Character Input Boxes Demo</h1>
        </Header>
        <Wrapper>
          <p>How many boxes do you want?</p>
          <input type='number' onChange={this.handleChange} />
          <br />
          <br />
          <div>
            <p>Use custom regEx</p>
            <div style={{'textAlign': 'left', 'margin': 'auto', 'width': '160px'}}>
              <input type='radio' name='regexp' value='^[0-9]$' onChange={this.handleRegExChange} />/^[0-9]$/
              <br />
              <input type='radio' name='regexp' value='^[a-z]$' onChange={this.handleRegExChange} />/^[a-z]$/
              <br />
              <input type='radio' name='regexp' value='^[a-zA-Z0-9_.-]*$' onChange={this.handleRegExChange} />/^[a-zA-Z0-9_.-]*$
            </div>
          </div>
        </Wrapper>
        <br />
        <br />
        <br />       
        <Wrapper>
          <RICIBs 
            amount={this.state.amount} 
            handleOutputString={this.handleOutputString} 
            inputRegExp={this.state.regEx} 
            key={this.state.amount}
          />
        </Wrapper>
        <Wrapper>{this.state.outputString}</Wrapper>
        <Footer>
          ©  Danny Radden
          <div style={{flexGrow: 1}}></div>
          <a style={{textDecoration: "none", color: "white"}} href="https://github.com/dannyradden/single-character-input-boxes">Github</a>
        </Footer>
      </Container>
    )
  }
}
export default App
