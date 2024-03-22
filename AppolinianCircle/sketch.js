// let c1, c2, c3;
let epsilon = 0.1;
let allCircles = [];
let queue = [];
function setup() {
    createCanvas(400, 400);

    let c1 = new Circle(-1 / 200, 200, 200);
    let c2 = new Circle(1 / 100, 100, 200);
    let c3 = new Circle(1 / 100, 300, 200);

    allCircles = [c1, c2, c3];
    queue = [[c1, c2, c3]]
}

function validate(circle, c1, c2, c3) {
    if (circle.radius < 2) return false;

    for (let otherCircle of allCircles) {
        let d = circle.dist(otherCircle);
        if (d < epsilon) {
            return false;
        }
    }
    //check if two circles are mutually tangent
    //1. One inside aother d = r1 + r2
    //2. Touching each other from outside d = r2 - r1
    if (!isTangent(circle, c1)) return false;
    if (!isTangent(circle, c2)) return false;
    if (!isTangent(circle, c3)) return false;

    return true;
}

function isTangent(c1, c2) {
    let d = c1.dist(c2);
    let r1 = c1.radius;
    let r2 = c2.radius;

    let a = abs(d - (r1 + r2)) < epsilon;
    let b = abs(d - abs(r2 - r1)) < epsilon;

    return (a || b);
}

function nextGeneration() {
    let nextQueue = [];
    for (let triplet of queue) {
        let [c1, c2, c3] = triplet;
        let k4 = descartes(c1, c2, c3);
        let newCircles = complexDescartes(c1, c2, c3, k4);

        for (let circle of newCircles) {
            if (validate(circle, c1, c2, c3)) {
                allCircles.push(circle);
                // let nextQueue = [c1, c2, newCircles[0]];
                let t1 = [c1, c2, circle];
                let t2 = [c1, c3, circle];
                let t3 = [c2, c3, circle];
                nextQueue = nextQueue.concat([t1, t2, t3]);
            }
        }
    }
    queue = nextQueue;
}

function draw() {
    background(225);
    nextGeneration();

    for (let c of allCircles) {
        fill(c.color, c.color, c.color)
        c.show();
    }

    // let z4 = complexDescartes(c1, c2, c3, k4[0]);
    // console.log(z4);
    // circle(z4[0].a, z4[0].b, r4 * 2);
    // circle(z4[1].a, z4[1].b, r4 * 2);

    // allCircles[0].show();
    // allCircles[1].show();
    // allCircles[2].show();
    // allCircles[3].show();

    // noLoop();
    // circle(mouseX, mouseY, r4 * 2);
}

function complexDescartes(c1, c2, c3, k4) {

    let k1 = c1.curvature;
    let k2 = c2.curvature;
    let k3 = c3.curvature;

    let z1 = c1.center;
    let z2 = c2.center;
    let z3 = c3.center;

    let zk1 = z1.scale(k1);
    let zk2 = z2.scale(k2);
    let zk3 = z3.scale(k3);

    let sum = zk1.add(zk2.add(zk3));
    let root = zk1.multiply(zk2).add(zk2.multiply(zk3)).add(zk1.multiply(zk3));
    root = root.sqrt().scale(2);
    console.log(root)

    let center1 = sum.add(root).scale(1 / k4[0]);
    let center2 = sum.sub(root).scale(1 / k4[0]);
    let center3 = sum.add(root).scale(1 / k4[1]);
    let center4 = sum.sub(root).scale(1 / k4[1]);

    return [
        new Circle(k4[0], center1.a, center1.b),
        new Circle(k4[0], center2.a, center2.b),
        new Circle(k4[1], center3.a, center3.b),
        new Circle(k4[1], center4.a, center4.b),
    ]

}

function descartes(c1, c2, c3) {
    // formula is k4 = k1 + k2 + k3 +- 2√(k1k2 + k2k3 + k1k3)
    // where k = curvature of the circle which is inversely proportional to radius

    let k1 = c1.curvature;
    let k2 = c2.curvature;
    let k3 = c3.curvature;
    // Sum and product of curvatures for Descartes' theorem
    let sum = k1 + k2 + k3;
    let product = abs(k1 * k2 + k2 * k3 + k1 * k3);
    let root = 2 * sqrt(product);
    return [sum + root, sum - root];
}


