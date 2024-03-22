var angle = PI / 4;

var slider;

function setup() {
    createCanvas(400, 400);
    slider = createSlider(0, TWO_PI, angle, 0.01)
}

function draw() {
    background(230);
    var len = 100;
    angle = slider.value();
    // stroke(255);
    translate(200, height);
    branch(100, 10, 150, 255, 50);
}

function branch(len, weight, r, g, b) {
    strokeWeight(weight);
    stroke(r, g, b);
    line(0, 0, 0, - len);
    translate(0, -len)
    if (len > 1) {
        var newR = (r < 170) ? r * 1.5 : r * 0.67;
        var newG = (g < 170) ? g * 1.5 : g * 0.67;
        var newB = (b < 170) ? b * 1.5 : b * 0.67;
        push();
        rotate(angle);
        branch(len * 0.67, weight * 0.67, newR, newG, newB);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67, weight * 0.67, r * 0.67, g * 0.67, b * 0.67);
        pop();
    }
}