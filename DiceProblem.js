let dice = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]);

do {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    dice.set(diceNumber, dice.get(diceNumber) + 1);
} while (dice.get(diceNumber) != 10);

//Map Traversal
console.log("Printing Dice map")
for (let everyDiceNumber of dice) {
    console.log(everyDiceNumber);
}
//sorted Map accroding to the value on each key
const mapSort2 = new Map([...dice.entries()].sort((a, b) => a[1] - b[1]));
console.log(mapSort2);

//E - Finding dice number which reached max and min times
console.log("Dice Number with Max counts", [...dice.entries()].reduce(function (a, b) { return a[1] > b[1] ? a : b }));
console.log("Dice Number with Min counts", [...dice.entries()].reduce((a, b) => a[1] < b[1] ? a : b));