exports.yahtzee = class Yahtzee {
    dices = [];
    res = {
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
    }

    constructor(allDices) {
        this.dices = allDices;
    }

    Process() {
        if(this.dices == null || this.dices.length != 5) return;

        this.GetSum();
    }

    GetSum() {
        for(let i = 0; i < this.dices.length; i++) {
            this.res.sum.total += this.dices[i];
            this.res.sum[this.dices[i]] += this.dices[i];
        }
    }
}

exports.run = function run(...lst) {
    if (lst.length !== 5) return null;

    const y = new Yahtzee(lst);
    y.Process();

    console.log(y.res);

    return y.res;
}