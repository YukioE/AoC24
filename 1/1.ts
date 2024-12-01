import * as fs from "fs";

// load input into 2 lists
let list1 = fs
    .readFileSync("1/input", "utf-8")
    .split("\n")
    .map((x) => parseInt(x.split("   ")[0]));
let list2 = fs
    .readFileSync("1/input", "utf-8")
    .split("\n")
    .map((x) => parseInt(x.split("   ")[1]));

list1.sort((a, b) => a - b);
list2.sort((a, b) => a - b);

console.log(list1, list2);

let distances = list1.map((x) => Math.abs(list2[list1.indexOf(x)] - x));
console.log(distances);

let sum = 0;
distances.forEach((x) => {
    sum += x
    console.log(sum, x);
});
console.log(sum);