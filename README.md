# grid-template-areas-x

Utility for Template Grid Areas

[![Build Status](https://travis-ci.com/doniyor2109/grid-template-areas-x.svg?branch=master)](https://travis-ci.com/doniyor2109/grid-template-areas-x)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/doniyor2109/redux-lightweight/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) 

## Installation

```bash

npm install --save grid-template-areas-x

// or yarn

yarn add grid-template-areas-x
```

## Usage

```jsx
const x = require("grid-template-areas-x");

const style = `
    grid-template-areas: ${x`
      'header${2} nav${4}'
      'side${4} content${2}'
    `};
`;

// Results:

`
    grid-template-areas:
      'header header nav nav nav nav'
      'side side side side content content'
    ;
`
```

## License

MIT
