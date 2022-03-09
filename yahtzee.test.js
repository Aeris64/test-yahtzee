const yahtzee = require("./yahtzee.js");

test('Yahtzee null', () => {
    expect(yahtzee.run()).toBe(null);
});

test('Yahtzee first test', () => {
    expect(yahtzee.run(1, 2, 3, 4, 5, 6)).toBe(null);
});