var a = { 1 :"one"}
var b = {};
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
console.log(a)
console.log(b)
console.log(isEmpty(a));
console.log(isEmpty(b));