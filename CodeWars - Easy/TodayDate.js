// function isToday(date) {
//     const checkDay = date.getDate(); // day of month
//     const checkMonth = date.getMonth(); // month of year (0 indexed)
//     const checkYear = date.getFullYear();

//     const today = new Date();

//     const todayDay = today.getDate(); // day of month
//     const todayMonth = today.getMonth(); // month of year (0 indexed)
//     const todayYear = today.getFullYear();


//     return checkDay === todayDay && checkMonth === todayMonth && checkYear === todayYear;
// }

function isToday(date) {
    return new Date().toDateString === date.toDateString()
}

console.log(isToday({date: 05/04/2023}))
console.log(isToday("03/15/2023"))