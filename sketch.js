let clock_size;
let center_x, center_y;
let chronostasis = false;

function clock_setup() {
    if (windowWidth < windowHeight)
        clock_size = windowWidth / 2 + windowWidth / 3;
    else
        clock_size = windowHeight / 2 + windowHeight / 3;
    center_x = windowWidth / 2;
    center_y = windowHeight / 2;
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
    stroke(0);
    strokeWeight(1);
    clock_setup();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    clock_setup();
}

function draw() {
    if (second() % 15 == 0) {
        stroke(0);
        fill(0, 0, 0, 50);
        rect(0, 0, windowWidth, windowHeight);
        background(0);
        stroke(255);
        chronostasis = true;
    } else {
        stroke(255);
        fill(255, 255, 255, 50);
        rect(0, 0, windowWidth, windowHeight);
        //background(0);
        stroke(0);
        chronostasis = false;
    }
    push();
    translate(center_x, center_y);
    //ellipse(0, 0, clock_size, clock_size);
    for (let i = 0; i < 12; i++) {
        push();
        rotate((PI / 6) * i);
        if (i % 3 == 0) line(0, clock_size / 2 - clock_size / 10, 0, clock_size / 2);
        else line(0, clock_size / 2 - clock_size / 20, 0, clock_size / 2);
        pop();
    }
    push();
    rotate(PI + PI / 30 * second());
    if (chronostasis) {
        stroke(255, 0, 0);
        strokeWeight(3);
    }
    line(0, 0, 0, clock_size / 3);
    pop();
    if (!chronostasis) {
        push();
        rotate(PI + PI / 6 * (minute() / 5 + second() / 300));
        line(0, 0, 0, clock_size / 4);
        pop();
        push();
        rotate(PI + PI / 6 * (hour() + minute() / 60 + second() / 3600));
        line(0, 0, 0, clock_size / 6);
        pop();
        pop();
    }
}
