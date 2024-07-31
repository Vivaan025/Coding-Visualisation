// // const points = [];
// // var a;

// function setup() {
//     createCanvas(400, 400);
// }

// function setup() {
//     background(0);
//     translate(width / 2, height / 2);

//     noFill();
//     // strokeWeight(8);
//     stroke(255);
//     // beginShape();
//     // for (let i = 0; i < points.length; i++) {
//     //     let v = points[i];
//     //     vertex(v.x, v.y);
//     // }
//     // endShape();

//     // var r = 10;
//     // var x = r * 16 * pow(sin(a), 3);
//     // var x = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
//     // a += 0.01
//     beginShape();
//     for (var a = 0; a < TWO_PI; a += 0.01) {
//         var r = 10;
//         var x = r * 16 * pow(sin(a), 3);
//         var x = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
//         vertex(x, y);
//     }
//     endShape();
// }
let points = [];
let a = 0;
// var a = 0; // Initialize variable a

function draw() {
    background(0);
    translate(width / 2, height / 2);
    fill(155, 0, 100)
    stroke(255);
    beginShape(); // Start the shape
    for (let v of points) {
        vertex(v.x, v.y);
    }
    // for (var a = 0; a < TWO_PI; a += 0.01) {

    //     vertex(x, y);
    // }
    endShape(); // End the shape

    var r = 10;
    var x = r * 16 * pow(sin(a), 3);
    var y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a)); // Define variable y
    heart.push(createVector(x, y));
    a += 0.01;
}

function setup() {
    createCanvas(400, 400);
}

