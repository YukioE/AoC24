import fs from "fs";

// read input
let input = fs
    .readFileSync("6/input", "utf8")
    .split("\n")
    .map((x) => x.split(""));

let currentDirection = "^";
let directions = ["^", ">", "v", "<"];
let currentPosition = {
    i: input.findIndex((row) => row.includes("^")),
    j: input[input.findIndex((row) => row.includes("^"))].indexOf("^"),
};
input[currentPosition.i][currentPosition.j] = "X";

while (typeof input[currentPosition.i][currentPosition.j] !== "undefined") {
    let nextPosition = { i: 0, j: 0 };
    switch (currentDirection) {
        case "^":
            nextPosition = { i: currentPosition.i - 1, j: currentPosition.j };
            break;
        case ">":
            nextPosition = { i: currentPosition.i, j: currentPosition.j + 1 };
            break;
        case "v":
            nextPosition = { i: currentPosition.i + 1, j: currentPosition.j };
            break;
        case "<":
            nextPosition = { i: currentPosition.i, j: currentPosition.j - 1 };
            break;
        default:
            break;
    }
    const nextChar = input[nextPosition.i][nextPosition.j];
    if (nextChar === "#") {
        input[currentPosition.i][currentPosition.j] = "X";
        currentDirection = directions[(directions.indexOf(currentDirection) + 1) % 4];
    } else if (nextChar === "." || nextChar === "X" || typeof nextChar === "undefined") {
        input[currentPosition.i][currentPosition.j] = "X";
        try {
            currentPosition = nextPosition;
        } catch (e) {
            break;
        }
    } else {
        break;
    }
}

let xSum = 0;
input.forEach((row, i) => {
    console.log(row.join(""));
    row.forEach((char, j) => {
        if (char === "X") {
            xSum++;
        }
    });
});

console.log(xSum);
console.log(currentPosition);
console.log(currentDirection);