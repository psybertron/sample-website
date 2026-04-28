const { greet } = require('../src/js/main');

describe('Main Module', () => {
  describe('greet function', () => {
    test('returns the expected greeting message', () => {
      const result = greet();
      expect(result).toBe('Hello from the sample website!');
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });

    test('returns a string that includes "Hello"', () => {
      const result = greet();
      expect(result).toMatch(/Hello/);
    });

    test('is a function', () => {
      expect(typeof greet).toBe('function');
    });

    test('does not throw an error when called', () => {
      expect(() => greet()).not.toThrow();
    });
  });
});