# between-range

check if a given number is between two values

<a href="https://nodei.co/npm/between-range/"><img src="https://nodei.co/npm/between-range.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/between-range)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/between-range/blob/master/LICENSE)


## API
```js
var between = require('between-range')
```

*   **between(*value*, *number1*, *number2*)**


## Usage

##### check if a number is inside of the passed range
```js
var inside = between(200, 200, 299) // should return true
var notInside = between(101, 200, 299) // should return false
```


### Development

##### this projet has been set up with a precommit that forces you to follow a code style, no jshint issues and 100% of code coverage before commit


to run test
```js
npm test
```

to run jshint
```js
npm run jshint
```

to run code style
```js
npm run code-style
```

to run check code coverage
```js
npm run check-coverage
```

to open the code coverage report
```js
npm run open-coverage
```
