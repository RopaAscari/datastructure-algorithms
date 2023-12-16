function bubbleSort(arr: Array<number>) {
    // Keep track of whether or not a swap has happended
    let swapped;
    do { // execute a do while a swap has occured in the passthrough
        swapped = false;
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap values at positions j and j + 1
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

export default function bubbleSortExample(){
    let arr = [5, 3, 8, 2, 1, 4, 10, 9];
bubbleSort(arr)
console.log(arr);


}

