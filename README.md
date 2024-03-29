# react-individual-character-input-boxes

[![npm version](https://badge.fury.io/js/react-individual-character-input-boxes.svg)](https://badge.fury.io/js/react-individual-character-input-boxes)

React Individual Character Input Boxes (RICIBs) are individual inputs that are separate from each other but functionally act similar as a regular input box. Motivation came from Apple's similar input boxes used for their two-factor authorization:
 ![apple input boxes](https://user-images.githubusercontent.com/23153035/87495706-486af680-c60f-11ea-9c51-04d31edeece6.png "Apples individual input boxes")

## Demo
You can view a demo of this component [here!](https://amplify-demo.d3ckxt3jpnt41p.amplifyapp.com/)

## Installation
`$ npm i react-individual-character-input-boxes`

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
          inputProps={
            { className: "2fa-box",
              style: { "color": "orange" },
              placeholder: "_"
            }
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
| `inputProps` | Object or Array\<Object\> |   | Allows you to pass through properties to the input boxes. With this you can customize attributes (including styles) for all of the boxes by using an Object. To customize each box individually use an array of objects where each item in the array represents a box. |
| `inputRegExp` | RegExp |   | Tells the component which characters to allow as inputs. (default is `/^[0-9]$/` which is only numbers) |
| `password` | Boolean |   | Masks in the input if set as true (default is false) |

## Help, I cant get it to work or I want a feature!
Please feel free to submit an issue if you are running into trouble or have an idea for additional functionality!

## BUG
I am aware that there is a bug where if you type extremely quickly, sometimes the selection will spazz out and jump between inputs. It happens very rarely though, only when you basically spam your keyboard as fast as you can. If you have any ideas on how to fix this please let me know!

## License
MIT © [Danny Radden](https://github.com/dannyradden)
