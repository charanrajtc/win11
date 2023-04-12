import { isValidForOneOfSchema, validator_string_eq, validator_string_count_range, validator_string_count_max } from './lib/validators.js'
// Array of schemas to validate samples
const validation_schemas = [{
    // TODO: Extend by chaining to multiple functions by chaining
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

const test_objA = {
    topic: "A",
    name: "a",
    description: "this is more than 10 and less than 40"
};

const test_objB = {
    topic: "B",
    name: "x",
    description: "less than 40"
};

// it's brute force validation we can improve by memo rising approach
// assuming one of definitions is true for the object , we can extend isValidForOneOfSchema or define within the schema
console.log('sample A :', isValidForOneOfSchema(validation_schemas, test_objA));
console.log('sample B :', isValidForOneOfSchema(validation_schemas, test_objB))
