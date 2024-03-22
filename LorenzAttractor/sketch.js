let x = 0.01;
let y = 0.01;
let z = 0.01;

let a = 10;
let b = 28;
let c = 8.0 / 3.0;

const points = [];

function setup() {
    createCanvas(800, 800);
    background(0);
}


function draw() {
    let dt = 0.01;
    let dx = (a * (y - x)) * dt;
    let dy = (x * (b - z)) * dt;
    let dz = ((x * y) - (c * z)) * dt;
    x += dx;
    y += dy;
    z += dz;

    // points.push(createVector(x, y, z));

    // background(0);
    // translate(0, 0, -80);
    translate(width / 2, height / 2);
    scale(5)
    stroke(255, 255, 0);
    // noFill();
    point(x, y, z)
    // beginShape();
    // for (let i = 0; i < points.length; i++) {
    //     let v = points[i];
    //     vertex(v.x, v.y, v.z);
    // }
    // endShape();
    // console.log(x, y, z);
}