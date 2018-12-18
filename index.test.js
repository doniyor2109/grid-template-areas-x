const x = require('./index')

describe('grid-template-x', () => {
  it('should generate correct template', () => {
    debugger;
    const result = x`
      'header${2} nav${4}'
      'side${4} content${2}'
    `;
    const expected = `
      'header header nav nav nav nav'
      'side side side side content content'
    `;
    expect(result).toBe(expected);
  });
});