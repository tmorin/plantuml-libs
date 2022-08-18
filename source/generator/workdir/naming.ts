import camelCase from "lodash/camelCase";
import snakeCase from "lodash/snakeCase";
import capitalize from "lodash/capitalize";
import kebabCase from "lodash/kebabCase";

export function toCamelCase(value: string) {
    const result = camelCase(value);
    if (result && result.length) {
        return result[0].toUpperCase() + (result.substr(1) || '');
    }
    return camelCase(value);
}

export function toKebabCase(value: string) {
    return kebabCase(value);
}

export function toSnakeCase(value: string) {
    return snakeCase(value);
}

export function toCapitalize(value: string) {
    return capitalize(value);
}
