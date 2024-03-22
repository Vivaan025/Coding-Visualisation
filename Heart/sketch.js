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
const points = [];
var a = 0; // Initialize variable a

function setup() {
    createCanvas(400, 400);
    background(0);
    translate(width / 2, height / 2);
    noFill();
    stroke(255);
    beginShape(); // Start the shape
    for (var a = 0; a < TWO_PI; a += 0.01) {
        var r = 10;
        var x = r * 16 * pow(sin(a), 3);
        var y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a)); // Define variable y
        vertex(x, y);
    }
    endShape(); // End the shape
}
