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
        "Chance": 15,
        "Four of kind": 0,
        "Full House": 0,
        "Large straight": 40,
        "Small straight": 30,
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

test('Yahtzee three of a kind', () => {
    const data = [3,3,3,1,5];
    const object = new Yahtzee(data);

    object.Process();

    expect(object.res).toStrictEqual({
        sum: {
            1: 1,
            2: 0,
            3: 9,
            4: 0,
            5: 5,
            6: 0,
            total: 15
        },
        "Three of kind": 15,
        "Four of kind": 0,
        "Full House": 0,
        "Small straight": 0,
        "Large straight": 0,
        "Chance": 15,
        "YAHTZEE": 0
    });
});

test('Yahtzee four of a kind', () => {
    const data = [5,5,5,2,5];
    const object = new Yahtzee(data);

    object.Process();

    expect(object.res).toStrictEqual({
        sum: {
            1: 0,
            2: 2,
            3: 0,
            4: 0,
            5: 20,
            6: 0,
            total: 22
        },
        "Three of kind": 22,
        "Four of kind": 22,
        "Full House": 0,
        "Small straight": 0,
        "Large straight": 0,
        "Chance": 22,
        "YAHTZEE": 0
    });
});

test('Yahtzee chance', () => {
    const data = [1,2,2,4,5];
    const object = new Yahtzee(data);

    object.Process();

    expect(object.res).toStrictEqual({
        sum: {
            1: 1,
            2: 4,
            3: 0,
            4: 4,
            5: 5,
            6: 0,
            total: 14
        },
        "Three of kind": 0,
        "Four of kind": 0,
        "Full House": 0,
        "Small straight": 0,
        "Large straight": 0,
        "Chance": 14,
        "YAHTZEE": 0
    });
});

test('Yahtzee small straight', () => {
    const data = [2, 3, 4, 4, 5];
    const object = new Yahtzee(data);

    object.Process();

    expect(object.res).toStrictEqual({
        "Chance": 18,
        "Four of kind": 0,
        "Full House": 0,
        "Large straight": 0,
        "Small straight": 30,
        "Three of kind": 0,
        "YAHTZEE": 0,
        "sum": {
            "1": 0,
            "2": 2,
            "3": 3,
            "4": 8,
            "5": 5,
            "6": 0,
            "total": 18
        }
    });
});

test('Yahtzee large straight', () => {
    const data = [6, 5, 4, 2, 3];
    const object = new Yahtzee(data);

    object.Process();

    expect(object.res).toStrictEqual({
        "Chance": 20,
        "Four of kind": 0,
        "Full House": 0,
        "Large straight": 40,
        "Small straight": 30,
        "Three of kind": 0,
        "YAHTZEE": 0,
        "sum": {
            "1": 0,
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "6": 6,
            "total": 20
        }
    });
});

test('Yahtzee YAHTZEE', () => {
    const data = [4, 4, 4, 4, 4];
    const object = new Yahtzee(data);

    object.Process();

    expect(object.res).toStrictEqual({
        "Chance": 20,
        "Four of kind": 20,
        "Full House": 0,
        "Large straight": 0,
        "Small straight": 0,
        "Three of kind": 20,
        "YAHTZEE": 50,
        "sum": {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 20,
            "5": 0,
            "6": 0,
            "total": 20
        }
    });
});