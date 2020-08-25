# react-individual-character-input-boxes

[![npm version](https://badge.fury.io/js/react-individual-character-input-boxes.svg)](https://badge.fury.io/js/react-individual-character-input-boxes)
[![Join the chat at https://gitter.im/single-character-input-boxes/Lobby](https://badges.gitter.im/single-character-input-boxes/Lobby.svg)](https://gitter.im/single-character-input-boxes/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

React Individual Character Input Boxes (RICIBs) are individual inputs that are separate from each other but functionally act similar as a regular input box. Motivation came from Apples similar input boxes used for their two-factor authorization:
 ![apple input boxes](https://user-images.githubusercontent.com/23153035/87495706-486af680-c60f-11ea-9c51-04d31edeece6.png "Apples individual input boxes")

## Demo
You can view a demo of this component [here!](https://master.d3ckxt3jpnt41p.amplifyapp.com/)

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
          autoFocus
          handleOutputString={this.handleOutput}
          inputProps={[
            { className: "first-box" },
            { style: { "color": "orange" } },
            { placeholder: "_" }
          ]}
          inputRegExp={/^[0-9]$/}
        />
      </div>
    )
  }
  ```
Props:

| Prop | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `amount` | Number |   | sets the number of input boxes. (default is 5) |
| `autoFocus` | Boolean |   | When true, the first input box will automatically be selected on page load. (default false) |
| `handleOutputString` | Function | ✓ | Implement it to handle the string output of the module. |
| `inputProps` | Array |   | Allows you to pass through properties to the input boxes. |
| `inputRegExp` | RegExp |   | Tells the component which characters to allow as inputs. (default is `/^[0-9]$/` which is only numbers) |
| `password` | Boolean |   | Masks in the input if set as true (default is false) |

## Help, I cant get it to work or I want a feature!
Please feel free to submit an issue if you are running into trouble or have an idea for additional functionality!

## BUG
I am aware that there is a bug (mostly seems to occur in Chrome) where if you type to quickly sometimes the selection will spazz out and jump between inputs. I think it is a browser bug, but if anybody has any idea how to possibly fix this let me know please!

## TODO

* Fix possible android and iphone bugs
* Allow paste (onPaste) with any input selected

## License
MIT © [Danny Radden](https://github.com/dannyradden)
