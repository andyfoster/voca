import toString from '../utils/to_string';
import undefinedDefault from '../utils/undefined_default';

/**
 * Checks if `value` is empty
 * @param {string} [value=''] The string to verify.
 * @return {boolean} Returns `true` if `value` is empty, `false` otherwise
 */
export default function(value) {
  value = undefinedDefault(value, '');
  var string = toString(value);
  if (string === null) {
    return true;
  }
  return string.length === 0;
}