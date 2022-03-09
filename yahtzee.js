const formatRes = {
    sum: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
    },
    "Three of kind": 0,
    "Four of kind": 0,
    "Full House": 0,
    "Small straight": 0,
    "Large straight": 0,
    "Chance": 0,
    "YAHTZEE": 0
};

exports.run = function run(...lst) {
    if(lst.length !== 5) return null;
    console.log(lst);

    return false;
}