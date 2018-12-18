# Template Grid Areas x

Utility for Template Grid Areas

## Installation

```bash

npm install --save grid-template-areas-x

// or yarn

yarn add grid-template-areas-x
```

## Usage

```jsx
const x = require("grid-template-areas-x");

cosnt style = css`
    grid-template-areas: ${x`
      'header${2} nav${4}'
      'side${4} content${2}'
    `};
`
// Outputs:
 'header header nav nav nav nav'
 'side side side side content content'
```

## License

MIT