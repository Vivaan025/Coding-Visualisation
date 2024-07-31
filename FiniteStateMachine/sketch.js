let dfa = 0;
let inputString  = "010101";
let currentIndex = 0;

function setup() {
    createCanvas(800, 400);
    frameRate(1);
}

function draw(){
    background(255);
    drawStates();

}

function drawStates(){
    stroke(0);
    strokeWeight(2);

    //State 0
    fill(dfa == 0 ? 'lightblue' : 'white');
    ellipse(200,200,100,100);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text('0', 200, 200);

    //State 1
    fill(dfa == 1 ? 'lightblue' : 'white');
    ellipse(400, 200, 100, 100);
    fill(0);
    text('1', 400, 200);
    
    // State 2
    fill(dfa == 2 ? 'lightblue' : 'white');
    ellipse(600, 200, 100, 100);
    fill(0);
    text('2', 600, 200);
}

function state0(c) {
    if (c == '0') {
      dfa = 1;
    } else if (c == '1') {
      dfa = 0;
    }
  }
  
  function state1(c) {
    if (c == '0') {
      dfa = 1;
    } else if (c == '1') {
      dfa = 2;
    }
  }
  
  function state2(c) {
    if (c == '0') {
      dfa = 1;
    } else if (c == '1') {
      dfa = 0;
    }
  }

function isAccepted() {
  return dfa == 2;
}

fucntion drawAccepted(){
    if(isAccepted())
}

// {
//     "states": ["q0", "q1", "q2", "q3"],
//     "alphabet": ["0", "1"],
//     "startState": "q0",
//     "acceptStates": ["q2", "q3"],
//     "transitions": {
//       "q0": {"0": "q1", "1": "q2"},
//       "q1": {"0": "q3", "1": "q0"},
//       "q2": {"0": "q0", "1": "q3"},
//       "q3": {"0": "q3", "1": "q3"}
//     }
//   }
  