/**
 * Создает матрицу размером n * n и заполняет ее по спирали
 *
 * @param {Number} n - размерность матрицы
 * @returns {Number[n][n]} - n * n - матрица, заполненная по спирали
 */

class SpiralMatrix {
    constructor(dimension) {
        this.side = dimension;

        this.lastAmountX = this.side - 1;
        this.lastAmountY = this.side - 1;
        this.currX = 0;
        this.currY = 0;
        this.counter = 0;
        this.deep = 0;
        this.a = [];
        this.init();

        return {result: this.showResult()};
    }

    init() {
        this.initFunctions();
        this.populateArray();
        this.startLooper();
        this.insertLast();
    }

    populateArray() {
        for (let i = 0; i < this.side; i++) {
            this.a[i] = [];
        }
    }

    startLooper() {
        while (this.side * this.side - 1 > this.counter) {
            for (let movement in this.directionalData) {
                if (this.counter < this.side * this.side - 1) {
                    this.directionalMovements[this.directionalData[movement].level](
                        this.directionalData[movement]
                    );
                } else {
                    break;
                }
            }
            this.currX += 1;
            this.currY += 1;
            this.deep += 1;
            this.lastAmountX -= 1;
            this.lastAmountY -= 1;
        }
    }

    writeCount() {
        this.counter += 1;
        this.a[this.currX][this.currY] = this.counter;
    }

    insertLast() {
        let side = this.side;
        let center = Math.floor(side / 2);

        if (side % 2 !== 0) {
            this.a[center][center] = side * side;
        } else {
            this.a[center][center - 1] = side * side;
        }
    }

    initFunctions() {
        this.directionalData = {
            toRight: {currAxis:"currY", value:"lastAmountY", level:"increase"},
            toBottom: {currAxis:"currX",value:"lastAmountX", level:"increase"},
            toLeft: {currAxis:"currY",value:"deep", level:"decrease"},
            toTop: {currAxis:"currX",value:"deep", level:"decrease"},
        };

        this.directionalMovements = {
            increase: ({currAxis, value, ...rest}) => {
                for (this[currAxis]; this[currAxis] < this[value]; this[currAxis]++) {
                    this.writeCount();
                }
            },
            decrease: ({currAxis, value, ...rest}) => {
                for (this[currAxis]; this[currAxis] > this[value]; this[currAxis]--) {
                    this.writeCount();
                }
            }
        };
    }

    showResult() {
        return this.a
    }
}

function fillSpiralMatrix(n) {
  return new SpiralMatrix(n).result;
}

export default fillSpiralMatrix;
