import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fillPolyfill from './fillPolyfill'
import InputBox from './InputBox'

class ReactIndividualCharacterInputBoxes extends Component {
  constructor(props) {
    super(props)
    this.state = { characterArray: Array(props.amount).fill(null) }

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleOnPaste = this.handleOnPaste.bind(this)
    this.inputElements = {}
    fillPolyfill
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.inputElements['input0'].select()
    }
  }

  shouldComponentUpdate(nextProps) {
    if (
      this.props.amount !== nextProps.amount ||
      this.props.inputRegExp !== nextProps.inputRegExp
    ) {
      return true
    }
    return false
  }

  renderItems() {
    let items = []
    let inputProps = this.props.inputProps || {}

    for (var i = 0; i < this.props.amount; i++) {
      items.push(
        <InputBox
          type={this.props.password ? 'password' : 'text'}
          key={i}
          handleKeyDown={this.handleKeyDown}
          handleFocus={this.handleFocus}
          handleChange={this.handleChange}
          handleOnPaste={this.handleOnPaste}
          name={'input' + i}
          inputProps={inputProps[i] || inputProps}
          inputRef={el => {
            if (!el) return
            this.inputElements[el.name] = el
          }}
        />
      )
    }

    return items
  }

  render() {
    return (
      <div>
        <div>{this.renderItems()}</div>
      </div>
    )
  }

  handleChange({ target }) {
    if (target.value.match(this.props.inputRegExp)) {
      this.focusNextChar(target)
      this.setModuleOutput(target)
    } else {
      target.value = this.state.characterArray[target.name.replace('input', '')]
    }
  }

  handleKeyDown({ target, key }) {
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
    } else if (key === 'ArrowRight' || key === ' ') {
      this.focusNextChar(target)
    }
  }

  handleFocus({ target }) {
    var el = target
    // In most browsers .select() does not work without the added timeout.
    setTimeout(function () {
      el.select()
    }, 0)
  }

  handleOnPaste(event) {
    event.preventDefault()
    const pasted = event.clipboardData.getData("text/plain")
    let pastedArray = pasted.split("").slice(0, this.props.amount)
    for (var i = 0; i < pastedArray.length; i++) {
      if (pastedArray[i].match(this.props.inputRegExp)) {
        this.inputElements['input' + i].value = pastedArray[i]
      }
      else break;
    }
    if (i <= this.props.amount - 1) this.inputElements['input' + i].focus()
    else this.inputElements['input' + (this.props.amount - 1)].focus()
    this.setModuleOutput()
  }

  focusPrevChar(target) {
    if (target.previousElementSibling !== null) {
      target.previousElementSibling.focus()
    }
  }

  focusNextChar(target) {
    if (target.nextElementSibling !== null) {
      target.nextElementSibling.focus()
    }
  }

  setModuleOutput() {
    this.setState(prevState => {
      let updatedCharacters = prevState.characterArray.map((character, number) => {
        return this.inputElements['input' + number].value
      })
      return { characterArray: updatedCharacters }
    }, () => this.props.handleOutputString(this.state.characterArray.join('')))
  }
}

ReactIndividualCharacterInputBoxes.defaultProps = {
  amount: 5,
  autoFocus: false,
  inputRegExp: /^[0-9]$/,
  password: false
}
ReactIndividualCharacterInputBoxes.propTypes = {
  amount: PropTypes.number,
  autoFocus: PropTypes.bool,
  inputRegExp: PropTypes.instanceOf(RegExp),
  password: PropTypes.bool,
  handleOutputString: PropTypes.func.isRequired
}

export default ReactIndividualCharacterInputBoxes
