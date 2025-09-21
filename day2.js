/*🔹 Day 2 Practice Exercise

Create day2.js

Doing the following:

Use OS module to print your platform and CPU architecture

Use Path module to print the current file name and directory name

Create a custom module math.js with a function to add two numbers and use it in day2.js

*/

const os = require("os");
console.log("CPU Architecture:", os.arch());
const path = require("path");
console.log("path : ", path.dirname(__filename));
function math(a,b){
    return a+b;
}
console.log(math(20,30));