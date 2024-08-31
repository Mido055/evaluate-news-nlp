import { checkForName } from '../src/client/js/nameChecker';

describe('Testing the checkForName function', () => {
  test('It should return a welcome alert for valid captains', () => {
    global.alert = jest.fn();
    checkForName('Kirk');
    expect(global.alert).toHaveBeenCalledWith('Welcome, Captain!');
  });

  test('It should return an invalid name alert for invalid names', () => {
    global.alert = jest.fn();
    checkForName('NotACaptain');
    expect(global.alert).toHaveBeenCalledWith('Enter a valid captain name');
  });
});
