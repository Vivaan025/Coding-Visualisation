// var xoff1 = 0;
// var xoff2 = 10000;

// function setup() {
//     createCanvas(400, 400);
// }

// function draw() {
//     background(51);
//     // var x = random(width);
//     var x = map(noise(xoff1), 0, 1, 0, width);
//     var y = map(noise(xoff2), 0, 1, 0, height);

//     xoff1 += 0.02;
//     xoff2 += 0.02;

//     ellipse(x, y, 24, 24)
// }

let angleX = 0;
let angleY = 0;
let angle = 0;
let w = 24;
let arctan;
let maxD;

function setup() {
    createCanvas(800, 800, WEBGL);
    arctan = atan(1 / sqrt(2));
    maxD = dist(0, 0, 400, 400)
}

function draw() {
    background(175);
    ortho(-650, 650, -650, 650, 0, 1500);

    // rotateX(-PI / 8);
    // rotateY(angle * 0.05);
    // rotateZ(angle * 0.05);
    rotateX(angleX);
    rotateY(angleY);

    // let offset = 0;
    for (let z = 0; z < height; z += w) {
        for (let x = 0; x < width; x += w) {
            push();
            let d = dist(x, z, width / 2, height / 2)
            let offset = map(d, 0, maxD, -4, 4)
            let a = angle + offset;
            let h = map(sin(a), -2, 2, 0, 600); //angle from 1 to -1 and height from 0 to 100 harmonic motion
            translate(x - width / 2, 0, z - height / 2);
            // box(i - width / 2 + w / 2, 0, w - 2, h);
            normalMaterial()
            // stroke(255, 0, 255)
            // ambientMaterial(255, 0, 255,)
            box(w - 2, h, w - 2);
            pop();
        }
        // offset += 0.1;
    }

    angle += 0.1;
}


function mouseDragged() {
    let dx = mouseX - pmouseX;
    let dy = mouseY - pmouseY;
    angleX += dy * 0.01;
    angleY += dx * 0.01;
}