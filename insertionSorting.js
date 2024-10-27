// INSERTION SORTING ALGORITHM : Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.
/*
    Algorithm:
        1. Start from the second element (index 1).
        2. Compare the current element with the previous elements.
        3. Shift the larger elements one position to the right.
        4. Insert the current element into its correct position.
*/

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let key = arr[i];
		let j = i - 1;

		// Shift elements of arr[0..i-1] that are greater than key
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = key;
	}
	return arr;
}

// Example usage
const array1 = [5, 2, 9, 1, 5, 6];
console.log(insertionSort(array1)); // Output: [1, 2, 5, 5, 6, 9]
