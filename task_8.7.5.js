const numbers = [1, 2, 3, 8, 6, -2, 3, -3, 8, 12, 4, 1, -2];
function sortArray(numbers) {
    const arr = [...new Set(numbers)];
    const sortedNumbers = arr.sort((a, b) => a - b);

    return sortedNumbers
}

console.log(sortArray(numbers));









