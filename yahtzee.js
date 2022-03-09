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
        this.GetFullHouse();
        this.GetSmallStraight();
        this.GetLargeStraight();
        this.GetChance();
        this.GetYAHTZEE();
    }

    GetSum() {
        for(let i = 0; i < this.dices.length; i++) {
            this.res.sum.total += this.dices[i];
            this.res.sum[this.dices[i]] += this.dices[i];
        }
    }

    GetThreeKind() {
        this.res["Three of kind"] = (this.GetSameKind(3) ? this.res.sum.total : 0);
    }

    GetFourKind() {
        this.res["Four of kind"] = (this.GetSameKind(4) ? this.res.sum.total : 0);
    }

    GetSameKind(nb) {
        let res = false;
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
            if(result >= nb) {
                res = true
                break;
            }
        }

        return res;
    }

    GetSmallStraight() {
        this.res["Small straight"] = (this.GetStraight(4) ? 30 : 0);
    }

    GetLargeStraight() {
        this.res["Large straight"] = (this.GetStraight(5) ? 40 : 0);
    }

    GetStraight(nb) {
        let res = false;
        let begin = 0;

        for(let i = 1; i <= 6; i++) {
            if(this.res.sum[i] > 0) {
                begin++;
                if(begin == nb) {
                    res = true;
                    break;
                }
            }
            else begin = 0;
        }

        return res
    }

    GetFullHouse() {
        let tempObject = {};
        let threeInARow = false;
        let twoInARow = false;

        for(let i = 0; i < this.dices.length; i++) {
            if(tempObject[this.dices[i]]){
                tempObject[this.dices[i]]++;
            }    
            else{
                tempObject[this.dices[i]] = 1;
            }
        }
        for(const [key, result] of Object.entries(tempObject)){
            if(result == 3){
                threeInARow = true;
            }
            if(result == 2){
                twoInARow = true;
            }
        }
        if(threeInARow && twoInARow){
            this.res["Full House"] = 25;
        }
    }

    GetChance() {
        this.res["Chance"] = this.res.sum.total;
    }

    GetYAHTZEE() {
        this.res["YAHTZEE"] = (this.GetSameKind(5) ? 50 : 0);
    }
}

exports.run = function run(...lst) {
    if (lst.length !== 5) return null;

    const y = new Yahtzee(lst);
    y.Process();

    console.log(y.res);

    return y.res;
}