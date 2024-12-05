import fs from "fs";

// read input, declare vars
let rawUpdates: string[] = [];
let index = 0;
const input = fs.readFileSync("5/input", "utf8").split("\n");

// gather all updates
input.forEach((rule, i) => {
    if (rule.trim() === "") {
        rawUpdates = input.slice(i + 1);
        index = i;
    }
    return;
});

// remove updates from input, parse rules
input.splice(index, input.length - index);
const rules = input.map((rule) => {
    return rule.split("|").map((x) => parseInt(x));
});

// parse updates
const updates = rawUpdates.map((update) => {
    return update.split(",").map((x) => parseInt(x));
});

// filter correct updates
const correctUpdates = updates.filter((update) => {
    let correct = true;
    // go through each number of current update
    update.forEach((x, i) => {
        // go trough each rule that contatins current number
        rules.forEach((rule) => {
            if (!rule.includes(x)) {
                return;
            }
            // update is incorrect if number y (x|y) is before x in update
            if (rule[0] === x) {
                update.slice(0, i).forEach((y) => {
                    if (y === rule[1]) {
                        correct = false;
                        return;
                    }
                });
            // update is incorrect if number y (y|x) is after x in update
            } else {
                update.slice(i).forEach((y) => {
                    if (y === rule[0]) {
                        correct = false;
                        return;
                    }
                });
            }
        });
    });
    return correct;
});

// sum correct updates (sum of middle numbers in each correct update)
let sum = 0;
correctUpdates.forEach((update) => {
    console.log(update, update[Math.floor(update.length / 2)]);
    sum += update[Math.floor(update.length / 2)];
});

console.log(sum);