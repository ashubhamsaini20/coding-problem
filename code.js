
// find first occurence of Infinity ( all Infinity in the last of array )

// #2. i/p array length is not defined
let elems = [-12, 12, 3, 3, 1, 1, 1, Infinity, Infinity, Infinity, Infinity, Infinity]
let searchItem = Infinity;


const binarySearch = (left, right) => {

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (elems[mid] == Infinity) {
            if (elems[mid - 1] != Infinity) {
                return mid
            }
            return binarySearch(left, mid - 1)
        } else if (elems[mid] != Infinity) {
            if (elems[mid + 1] == Infinity) {
                return mid + 1
            }
            return binarySearch(mid + 1, right)
        }
    }

    console.log("Element Not Found");
    return -1
}

const getRange = (elems) => {
    let i = 1;
    while (elems[i] != undefined) {
        if (elems[i] == Infinity) break
        i = i * 2
    }
    console.log("index :", binarySearch(Math.floor(i / 2), i))
}
getRange(elems)