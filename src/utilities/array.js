/**
 * Sort array by property.
 * @param {Array} arr Array to be sorted.
 * @param {string} prop Property to sort by.
 * @param {string} direction Sort direction (ascending/descending). Default = ascending.
 */
function sortArrayByProperty(arr, prop, direction = "ascending") {
  return "ascending" === direction
    ? arr.sort((a, b) => (a[prop] < b[prop] ? 1 : b[prop] < a[prop] ? -1 : 0))
    : arr.sort((a, b) => (a[prop] > b[prop] ? 1 : b[prop] > a[prop] ? -1 : 0));
}

export { sortArrayByProperty };
