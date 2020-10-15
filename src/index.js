
// You should implement your task here.

module.exports = function towelSort (matrix) {
    return Array.isArray(matrix) ? matrix.map((arr, item) => item % 2 ? arr.reverse() : arr).flat() : [];
}
