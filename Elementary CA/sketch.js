let cells = [];
let generation = 0;
let w = 10; //cell size
// let ruleset = [1, 0, 1, 0, 0, 1, 0, 1];
let ruleset = [0, 1, 0, 1, 1, 0, 1, 0]; //Rule 90 
// let ruleset = [1, 1, 1, 1, 1, 1, 1];
// let ruleset = [1, 1, 0, 0, 1, 0, 0, 0];

function setup() {
    createCanvas(1020, 1020);
    background(255);
    cells = new Array(floor(width / w));
    for (let i = 0; i < cells.length; i++) {
        cells[i] = 0;
    }

    cells[floor(cells.length / 2)] = 1;

}

function draw() {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i] == 1) {
            fill(15 * generation, 150, 12, 90);
            square(i * w, generation * w, w);

        }
    }

    let nextGen = cells.slice();
    for (let i = 1; i < cells.length - 1; i++) {
        let left = cells[i - 1];
        let mid = cells[i];
        let right = cells[i + 1];
        nextGen[i] = rules(left, mid, right);
    }

    cells = nextGen;

    generation++;
}

function rules(a, b, c) {
    let s = "" + a + b + c;
    let index = parseInt(s, 2);
    return ruleset[7 - index];
}