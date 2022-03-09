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
        this.GetThreeKind();
        this.GetFourKind();

        this.GetSmallStraight();
        this.GetLargeStraight();
        this.GetChance();
    }

    GetSum() {
        for(let i = 0; i < this.dices.length; i++) {
            this.res.sum.total += this.dices[i];
            this.res.sum[this.dices[i]] += this.dices[i];
        }
    }

    GetThreeKind() {
        let tmpObj = {};
        for(let i = 0; i < this.dices.length; i++) {
            if(tmpObj[this.dices[i]]){
                tmpObj[this.dices[i]]++;
            }
            else{
                tmpObj[this.dices[i]] = 1;
            }
        }

        for(const [key, result] of Object.entries(tmpObj)){
            if(result >= 3)
            this.res["Three of kind"] = this.res.sum.total;
        }
    }

    GetFourKind() {
        let tmpObj = {};
        for(let i = 0; i < this.dices.length; i++) {
            if(tmpObj[this.dices[i]]){
                tmpObj[this.dices[i]]++;
            }
            else{
                tmpObj[this.dices[i]] = 1;
            }
        }

        for(const [key, result] of Object.entries(tmpObj)){
            if(result >= 4)
            this.res["Four of kind"] = this.res.sum.total;
        }
    }

    GetSmallStraight() {
        let begin = 0;

        for(let i = 1; i <= 6; i++) {
            if(this.res.sum[i] > 0) {
                begin++;
                if(begin == 4) this.res["Small straight"] = 30;
            }
            else begin = 0;
        }
    }

    GetLargeStraight() {
        let begin = 0;

        for(let i = 1; i <= 6; i++) {
            if(this.res.sum[i] > 0) {
                begin++;
                if(begin == 5) this.res["Large straight"] = 40;
            }
            else begin = 0;
        }
    }

    GetChance() {
        this.res["Chance"] = this.res.sum.total;
    }
}

exports.run = function run(...lst) {
    if (lst.length !== 5) return null;

    const y = new Yahtzee(lst);
    y.Process();

    console.log(y.res);

    return y.res;
}