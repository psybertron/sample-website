const { greet } = require('../src/js/main');

test('greet function returns correct message', () => {
  expect(greet()).toBe('Hello from the sample website!');
});