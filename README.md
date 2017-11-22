# react-individual-character-input-boxes

[![npm version](https://badge.fury.io/js/react-individual-character-input-boxes.svg)](https://badge.fury.io/js/react-individual-character-input-boxes)
[![Join the chat at https://gitter.im/single-character-input-boxes/Lobby](https://badges.gitter.im/single-character-input-boxes/Lobby.svg)](https://gitter.im/single-character-input-boxes/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

React Individual Character Input Boxes (RICIBs) are individual inputs that are separate from each other but functionally act similar as a regular input box. Motivation came from Apples similar input boxes used for their two-factor authorization:
 ![apple input boxes](readMeMedia/icloud-2-factor.png "Apples individual input boxes")

## Installation
`$ npm i --save react-individual-character-input-boxes`

## How To Use
Import:
```js
import RICIBs from 'react-individual-character-input-boxes';
```
Example code:
```js  
handleOutput (string) {
    // Do something with the string
  }

  render () {
    return (
      <div>
        <RICIBs
          amount={5}
          handleOutputString={this.handleOutput}
          inputRegExp={/^[0-9]$/}
          password
        />
      </div>
    )
  }
  ```
Props:

| Prop | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `amount` | Number |   | sets the number of input boxes. (default is 5) |
| `handleOutputString` | Function | ✓ | Implement it to handle the string output of the module. |
| `inputRegExp` | RegExp |   | Tells the component which characters to allow as inputs. (default is `/^[0-9]$/` which is only numbers) |
| `password` | Boolean |   | Masks in the input if set as true (default is false) |

## Help, I cant get it to work or I want a feature!
Please feel free to submit an issue if you are running into trouble or have an idea for additional functionality!

## License
MIT © [Danny Radden](https://github.com/dannyradden)

Thanks to [Henry Kaufman](https://github.com/hcjk) for the module boilerplate!
