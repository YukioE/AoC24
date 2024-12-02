import * as fs from "fs";

// load input into 2 lists
const input = fs.readFileSync("2/input", "utf-8").split("\n");
console.log(input);

let safeCount = 0;
input.forEach((line) => {
    const lineArray = line.split(" ").map((x) => parseInt(x));
    let safe = true;

    // check for ascending or descending order
    if (
        !lineArray.every((x, i) => {
            return i === 0 || x >= lineArray[i - 1];
        }) &&
        !lineArray.every((x, i) => {
            return i === 0 || x <= lineArray[i - 1];
        })
    ) {
        safe = false;
    }

    // check for distance between numbers (1-3)
    for (let index = 0; index < lineArray.length; index++) {
        const num1 = lineArray[index];
        const num2 = lineArray[index + 1];

        if (isNaN(num1) || isNaN(num2)) {
            break;
        }

        const distance = Math.abs(num2 - num1);

        if (distance < 1 || distance > 3) {
            safe = false;
            break;
        }
    }

    // increment safe count
    if (safe) {
        safeCount++;
    }
});

console.log("safeCount:", safeCount);

// part 2
const input2 = fs.readFileSync("2/input", "utf-8").split("\n");

let safeCount2 = 0;
let safeIndexes: number[] = [];
input2.forEach((line, j) => {
    const lineArray = line.split(" ").map((x) => parseInt(x));
    let safe = true;

    // check for ascending or descending order
    if (
        !lineArray.every((x, i) => {
            return i === 0 || x >= lineArray[i - 1];
        }) &&
        !lineArray.every((x, i) => {
            return i === 0 || x <= lineArray[i - 1];
        })
    ) {
        safe = false;
    }

    // check for distance between numbers (1-3)
    for (let index = 0; index < lineArray.length; index++) {
        const num1 = lineArray[index];
        const num2 = lineArray[index + 1];

        if (isNaN(num1) || isNaN(num2)) {
            break;
        }

        const distance = Math.abs(num2 - num1);

        if (distance < 1 || distance > 3) {
            safe = false;
            break;
        }
    }

    // increment safe count
    if (safe) {
        safeCount2++;
        safeIndexes.push(j);
    }
});
console.log("safeCount2:", safeCount2);
safeIndexes.forEach((x) => {
    input2.splice(x, 1);
});

input2.forEach((line, j) => {
    const lineArray = line.split(" ").map((x) => parseInt(x));
    let bruteLines: string[] = [];
    let safe = false;

    lineArray.forEach((x) => {
        bruteLines.push(lineArray.filter((y) => y !== x).toString());
    });

    bruteLines.every((h) => {
        const line = h.split(",").map((x) => parseInt(x));

        // check for ascending or descending order
        if (
            line.every((x, i) => {
                return i === 0 || x >= line[i - 1];
            }) ||
            line.every((x, i) => {
                return i === 0 || x <= line[i - 1];
            })
        ) {
            // check for distance between numbers (1-3)
            for (let index = 0; index < line.length; index++) {
                const num1 = line[index];
                const num2 = line[index + 1];

                if (isNaN(num1) || isNaN(num2)) {
                    break;
                }

                const distance = Math.abs(num2 - num1);

                if (distance >= 1 && distance <= 3) {
                    safe = true;
                    break;
                }
            }
        }

        // increment safe count
        if (safe) {
            safeCount2++;
            return false;
        }
    });
});

console.log("safeCount2:", safeCount2);
