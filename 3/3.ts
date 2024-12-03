import fs from "fs";

// read input, match all mul(xxx,xxx)
const input = fs.readFileSync("3/input", "utf8");
const part1regex = /mul\(\d{1,3},\d{1,3}\)/g;
const rawMul = input.match(part1regex);

let sum : number = 0;
rawMul?.forEach((mul) => {
    const [a, b] = mul.split("(")[1].split(")")[0].split(",")
    sum += parseInt(a) * parseInt(b);
});

console.log(sum);

// part 2
const part2regex = /(mul\(\d{1,3},\d{1,3}\))|(don't\(\))|(do\(\))/g;
const rawMul2 = input.match(part2regex);

let sum2 : number = 0;
let enabled = true;
rawMul2?.forEach((mul) => {
    if (mul === "don't()") {
        enabled = false;
    } else if (mul === "do()") {
        enabled = true;
    } else if (enabled) {
        const [a, b] = mul.split("(")[1].split(")")[0].split(",")
        sum2 += parseInt(a) * parseInt(b);
    }
});

console.log(sum2);