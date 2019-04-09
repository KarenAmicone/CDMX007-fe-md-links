const cli = require('../cli');
const links = require('../links');


describe('typeOfValidation', () => {
  test('Is a function', () => {
    expect(typeof cli.typeOfValidation()).toBe('function');
  });
  test('Calls countingValidatedLinks()', () => {
    expect(cli.typeOfValidation(validate && stats)).toEqual(links.countigValidatedLinks());

  });
  test('Calls counting()', () => {
    expect(cli.typeOfValidation('--stats')).toEqual(links.counting());

  });

  test('Calls validatingLinks()', () => {
    expect(cli.typeOfValidation('--validate')).toEqual(links.validatingLinks());

  });
});
