let sevenSegmentDisplay;

function setup() {
    createCanvas(600, 600);

    sevenSegmentDisplay = new SevenSegmentDisplay();

}

function draw() {
    background(0)
    sevenSegmentDisplay.show()
}

class SevenSegmentDisplay {
    show() {
        push();
        noStroke();
        fill(255, 0, 0);
        
        // A
        rect(60, 20, 78, 18, 10, 10);
        // B
        rect(140, 40, 18, 98, 10, 10);
        // C
        rect(140, 160, 18, 98, 10, 10);
        // D
        rect(60, 260, 78, 18, 10, 10);
        // E
        rect(40, 160, 18, 98, 10, 10);
        // F
        rect(40, 40, 18, 98, 10, 10);
        // G
        rect(60, 140, 78, 18, 10, 10);

        pop();
    }
}