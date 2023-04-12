import { validator_string_eq, validator_string_count_max, validator_string_count_range } from './validators.js';

describe('test validation helpers', () => {

  test('validator_string_eq', () => {
    let validatorFn = validator_string_eq("A");
    expect(validatorFn('A')).toBe(true);
    expect(validatorFn('B')).toBe(false);
    expect(validatorFn('')).toBe(false);
  });


  test('validator_string_count_max', () => {
    let validatorFn = validator_string_count_max(2);
    expect(validatorFn('ABC')).toBe(false);
    expect(validatorFn('AB')).toBe(true);
    expect(validatorFn('A')).toBe(true);
    expect(validatorFn('')).toBe(true);
  });

  test('validator_string_count_range', () => {
    let validatorFn = validator_string_count_range(2, 5);
    expect(validatorFn('ABC')).toBe(true);
    expect(validatorFn('AB')).toBe(true);
    expect(validatorFn('A')).toBe(false);
    expect(validatorFn('')).toBe(false);
    expect(validatorFn('This is more than 5 chars')).toBe(false);
  });
});

