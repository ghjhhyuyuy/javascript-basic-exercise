export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === null || array === undefined) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }
  const itemArray = [];
  for (let i = 0; i < array.length; i++) {
    const item = {};
    item.value = array[i];
    item.next = null;
    itemArray.push(item);
  }
  for (let i = 0; i < itemArray.length - 1; i++) {
    itemArray[i].next = itemArray[i + 1];
  }
  return itemArray[0];
}
