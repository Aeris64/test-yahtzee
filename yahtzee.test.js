const yahtzee = require("./yahtzee.js");

test('Yahtzee null', () => {
    expect(yahtzee.run()).toBe(null);
});

test('Yahtzee first test', () => {
    expect(yahtzee.run(1, 2, 3, 4, 5)).toStrictEqual({
        "Chance": 0,
        "Four of kind": 0,
        "Full House": 0,
        "Large straight": 0,
        "Small straight": 0,
        "Three of kind": 0,
        "YAHTZEE": 0,
        "sum": {
            "1": 1,
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "6": 0,
            "total": 15
        }
    });
});