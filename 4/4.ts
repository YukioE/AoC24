import fs from "fs";

// read input and map chars to 2D array
const input = fs.readFileSync("4/input", "utf8");
let xmas: string[][] = input.split("\n").map((line) => line.split(""));

let xmasSum = 0;
// iterate over every char and check for "xmas" in every direction
for (let i = 0; i < xmas.length; i++) {
    for (let j = 0; j < xmas[0].length; j++) {
        if (xmas[i][j] !== "X") {
            continue;
        }

        let directions = [];
        try {
            directions.push("X" + xmas[i - 1][j] + xmas[i - 2][j] + xmas[i - 3][j]);
        } catch (e) {}
        try {
            directions.push("X" + xmas[i + 1][j] + xmas[i + 2][j] + xmas[i + 3][j]);
        } catch (e) {}
        try {
            directions.push("X" + xmas[i][j - 1] + xmas[i][j - 2] + xmas[i][j - 3]);
        } catch (e) {}
        try {
            directions.push("X" + xmas[i][j + 1] + xmas[i][j + 2] + xmas[i][j + 3]);
        } catch (e) {}
        try {
            directions.push(
                "X" + xmas[i - 1][j - 1] + xmas[i - 2][j - 2] + xmas[i - 3][j - 3]
            );
        } catch (e) {}
        try {
            directions.push(
                "X" + xmas[i - 1][j + 1] + xmas[i - 2][j + 2] + xmas[i - 3][j + 3]
            );
        } catch (e) {}
        try {
            directions.push(
                "X" + xmas[i + 1][j - 1] + xmas[i + 2][j - 2] + xmas[i + 3][j - 3]
            );
        } catch (e) {}
        try {
            directions.push(
                "X" + xmas[i + 1][j + 1] + xmas[i + 2][j + 2] + xmas[i + 3][j + 3]
            );
        } catch (e) {}

        directions.forEach((direction) => {
            if (direction === "XMAS") {
                xmasSum++;
            }
        });
    }
}

console.log(xmasSum);

// part 2
let masSum = 0;
for (let i = 0; i < xmas.length; i++) {
    for (let j = 0; j < xmas[0].length; j++) {
        if (xmas[i][j] !== "A") {
            continue;
        }

        let directions = [];
        try {
            directions.push(xmas[i - 1][j - 1] + "A" + xmas[i + 1][j + 1]);
        } catch (e) {}
        try {
            directions.push(xmas[i + 1][j - 1] + "A" + xmas[i - 1][j + 1]);
        } catch (e) {}

        try {
            if (
                (directions[0] === "MAS" ||
                    directions[0].split("").reverse().join("") === "MAS") &&
                (directions[1] === "MAS" ||
                    directions[1].split("").reverse().join("") === "MAS")
            ) {
                masSum++;
            }
        } catch (e) {}
    }
}

console.log(masSum);
