# react-individual-character-input-boxes

React Individual Character Input Boxes (RICIBs) are individual inputs that are separate from each other but functionally act similar as a regular input box. Motivation came from Apples similar input boxes used for their two-factor authorization:
 ![apple input boxes](readMeMedia/icloud-2-factor.png "Apples individual input boxes")

## Highlights



## Installation
`$ npm install react-individual-character-input-boxes`

## How To Use/API docs
```js
import RICIBs from 'react-individual-character-input-boxes';
```

Three props are available with usage.
1.  amount: a number that sets the number of input boxes. (default is 5)
2.  handleOutputString: a callback function that handles the string output of the module. (required)
3.  inputRegExp: a regular expression that tells the component which characters to allow as inputs. (default is `/^[a-zA-Z0-9]$/` which is only letters and numbers)
4. password: a boolean that if marked true, masks the inputs (shown as asterisks or circles)

## ToDo
add auto capitalize ability

add CI

add an example to readMe

## License
MIT © [Danny Radden](https://github.com/dannyradden)

Thanks to [Henry Kaufman](https://github.com/hcjk) for the module boilerplate!
