function modifyArray(arr, callback) {
    // so something to arr here
    arr.push(100);
    // then execute the callback function was passed
    callback();
}

var arr = [1, 2, 3, 4, 5, 6];

modifyArray(arr, function(){
    console.log("array has been modified", arr);
});

