var rules = {
    "S": ["The N V"],
    "N": ["cat", "dog"],
    "V": ["meows", "barks"]
}

function expand(start, expansion) {
    if (rules[start]) {
        var pick = random(rules[start]);
        expand(pick, expansion);
    }
}

function setup() {
    noCanvas();

    var start = "S";

    var expansion = [];

    expand(start, expansion);

    var result = expansion;

    createP(result);
    console.log(result)
}