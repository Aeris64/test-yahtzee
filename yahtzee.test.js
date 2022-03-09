const Yahtzee = require("./yahtzee.js").yahtzee;

test('Yahtzee null', () => {
    const data = null;
    const object = new Yahtzee(data);

    object.Process();

    expect(object.res).toStrictEqual({
        sum: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            total: 0
        },
        "Three of kind": 0,
        "Four of kind": 0,
        "Full House": 0,
        "Small straight": 0,
        "Large straight": 0,
        "Chance": 0,
        "YAHTZEE": 0
    });
});

test('Yahtzee first test', () => {
    const data = [1, 2, 3, 4, 5];
    const object = new Yahtzee(data);

    object.Process();

    expect(object.res).toStrictEqual({
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