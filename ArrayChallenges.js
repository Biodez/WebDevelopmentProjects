function alwaysHungry(arr) {
    // your code here
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy")
        }
    }
    console.log("I'm Hungry")
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] > cutoff) {
            filteredArr.push(arr[index])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    var avg = (sum/arr.length)
    var count = 0
    // count how many values are greated than the average
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

function reverse(arr) {
    // your code here
    let i = 0;
    let j = arr.length - 1;
    var temp;

    while (i < j) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        j--;
        i++;
    }

    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    for (let index = 0; index < n-2; index++) {
        var nextTerm = fibArr[index] + fibArr[index + 1]
        fibArr.push(nextTerm)
        nextTerm = fibArr[index + 1]
    } 
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]




