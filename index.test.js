
import { validator_string_eq, validator_string_count_max, validator_string_count_range, isValidForOneOfSchema } from './lib/validators.js';

describe('test validator isValidForOneOfSchema', () => {
  const validation_schemas = [{
    topic: validator_string_eq("A"),
    name: validator_string_eq("a"),
    description: validator_string_count_range(10, 40)
  },
  {
    topic: validator_string_eq("B"),
    name: validator_string_eq("x"),
    description: validator_string_count_max(40)
  }
  ];

  test('Rule A', () => {
    expect(isValidForOneOfSchema(validation_schemas, {
      topic: "A",
      name: "a",
      description: "this is more than 10 and less than 40"
    })).toBe(true);

    expect(isValidForOneOfSchema(validation_schemas, {
      topic: "A",
      name: "a",
      description: "this is "
    })).toBe(false);

    expect(isValidForOneOfSchema(validation_schemas, {
      topic: "A",
      name: "g",
      description: "this is more than 10 and less than 40"
    })).toBe(false);

    expect(isValidForOneOfSchema(validation_schemas, {
      topic: "A",
      name: "x",
      description: ""
    })).toBe(false);

  });

  test('Rule B', () => {
    expect(isValidForOneOfSchema(validation_schemas, {
      topic: "B",
      name: "x",
      description: "less than 40"
    })).toBe(true);

    expect(isValidForOneOfSchema(validation_schemas, {
      topic: "B",
      name: "f",
      description: "this is more than 10 and less than 40"
    })).toBe(false);
  });

});
