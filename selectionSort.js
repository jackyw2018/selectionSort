
// // iterative approach
// function selectionSort(arr = []) {
//     let copiedArr = arr.slice();
//     let min;

//     for (let i = 0; i < copiedArr.length; i++) {
//         min = i;
//         for (let j = i; j < copiedArr.length; j++) {
//             let curr = copiedArr[j];

//             if (curr < copiedArr[min]) {
//                 min = j;
//             }
//         }

//         let first = copiedArr[i];
//         copiedArr[i] = copiedArr[min];
//         copiedArr[min] = first;
//     }

//     return copiedArr;
// }

// recursive approach
function selectionSort(arr = []) {
    if (arr.length === 0) return [];

    let copiedArr = arr.slice();
    let min = 0;

    for (let i = 0; i < copiedArr.length; i++) {
        let curr = copiedArr[i];
        if (curr < copiedArr[min]) {
            min = i;
        }
    }

    let first = copiedArr[0];
    copiedArr[0] = copiedArr[min];
    copiedArr[min] = first;

    return [copiedArr[0]].concat(selectionSort(copiedArr.slice(1)));
}
