export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.  
  if (array === undefined || array === null) {
    throw new Error('Flatten undefined or null array');
  }
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length !== 0 && array[i].length !== undefined) {
      for (let itemIndex = 0; itemIndex < array[i].length; itemIndex++) {
        if (result.indexOf(array[i][itemIndex]) !== -1) {
          continue;
        }
        result.push(array[i][itemIndex]);
      }
    } else {
      if (result.indexOf(array[i]) !== -1) {
        continue;
      }
      result.push(array[i]);
    }
  }
  return result;
}
