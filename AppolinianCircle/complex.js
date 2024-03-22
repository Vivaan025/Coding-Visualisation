class Complex {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add(other) {
        return new Complex(this.a + other.a, this.b + other.b);
    }

    sub(other) {
        return new Complex(this.a - other.a, this.b - other.b);
    }

    scale(value) {
        return new Complex(this.a * value, this.b * value);
    }

    //derived after putting it in the formula
    multiply(other) {
        let a = this.a * other.a - this.b * other.b;
        let b = this.a * other.b + other.a * this.b;
        return new Complex(a, b);
    }

    //to square root  a complex number we convert it to its polar form
    // sqrt() {
    //     let r = Math.sqrt(this.a * this.a + this.b * this.b);
    //     let angle = Math.atan2(this.b, this.a);
    //     r = Math.sqrt(r);
    //     angle = angle / 2;
    //     return new Complex(r * Math.cos(angle), r * Math.sin(angle)); //converting back to non polar form
    // }

    // sqrt() {
    //     // Convert to polar form
    //     let m = Math.sqrt(this.a * this.a + this.b * this.b);
    //     let angle = Math.atan2(this.b, this.a);
    //     // Calculate square root of magnitude and use half the angle for square root
    //     m = Math.sqrt(m);
    //     angle = angle / 2;
    //     // Back to rectangular form
    //     return new Complex(m * Math.cos(angle), m * Math.sin(angle));
    // }
    
    sqrt() {
        // Convert to polar form
        let m = sqrt(this.a * this.a + this.b * this.b);
        let angle = atan2(this.b, this.a);
        // Calculate square root of magnitude and use half the angle for square root
        m = sqrt(m);
        angle = angle / 2;
        // Back to rectangular form
        return new Complex(m * cos(angle), m * sin(angle));
      }

    // sqrt() {
    //     console.log("Real Part (a):", this.a);
    //     console.log("Imaginary Part (b):", this.b);

    //     let r = Math.sqrt(this.a * this.a + this.b * this.b);
    //     console.log("Magnitude (r):", r);

    //     let angle = Math.atan2(this.b, this.a);
    //     console.log("Angle:", angle);

    //     r = Math.sqrt(r);
    //     angle = angle / 2;
    //     console.log("Modified Angle:", angle);

    //     let realPart = r * Math.cos(angle);
    //     let imaginaryPart = r * Math.sin(angle);
    //     console.log("Real Part:", realPart);
    //     console.log("Imaginary Part:", imaginaryPart);

    //     return new Complex(realPart, imaginaryPart);
    // }


}