// first occurence of element in sorted array 

let elems = [1, 2, 3, 4, 5, 6, 8, 90, 120, 340, 456]
let searchItem = 120;

const binarySearch = (left, right) => {

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (elems[mid] > searchItem) {
            return binarySearch(left, mid - 1)
        } else if (elems[mid] < searchItem) {
            return binarySearch(mid + 1, right)
        } else {
            console.log("Element Found at index :", mid);
            return mid
        }
    }

    console.log("Element Not Found");
    return -1
}

binarySearch(0, elems.length)