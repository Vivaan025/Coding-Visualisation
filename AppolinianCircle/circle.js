class Circle {
    constructor(curvature, x, y) {
        this.center = new Complex(x, y);
        this.curvature = curvature;
        // this.x = x;
        // this.y = y;
        this.radius = abs(1 / this.curvature);
        this.color = 100, 200, 250
    }

    show() {
        stroke(0);
        fill(this.color, this.color, this.color)
        circle(this.center.a, this.center.b, this.radius * 2);
    }

    dist(other) {
        return dist(this.center.a, this.center.b, other.center.a, other.center.b);
    }
}
