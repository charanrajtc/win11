// validations
export const validator_string_eq = (comparator) => (value) => value === comparator;

// FIXME: refactor these min max with chaining
export const validator_string_count_max = (max) => (value) => value.length <= max;
export const validator_string_count_range = (min, max) => (value) => value.length >= min && value.length <= max;



export function isValidForOneOfSchema(schemas, sample) {
    for (let schema of schemas) {
        // console.log(schema)
        let isValid = Object.keys(schema).every((key) => schema[key].apply(null, [sample[key]]));
        if (isValid) { return true };
    }
    return false;
}
