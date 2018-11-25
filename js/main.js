let sevenSegmentDisplay;
let numbers = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B];
let index = 0;

function setup() {
    createCanvas(600, 600);
    frameRate(1);

    sevenSegmentDisplay = new SevenSegmentDisplay();

}

function draw() {
    background(0);
    sevenSegmentDisplay.show(numbers[index]);
    index = (index + 1) % numbers.length;
}

class SevenSegmentDisplay {
    getColor(value, shift) {
        let r = 255;
        let g = 0;
        let b = 0;
        let a = 255 * ((value >> shift) & 1);
        return(color(r, g, b, a));
    }

    show(value) {
        push();
        noStroke();
        fill(255, 0, 0);
        
        // A
        fill(this.getColor(value, 6));
        rect(60, 20, 78, 18, 10, 10);
        // B
        fill(this.getColor(value, 5));
        rect(140, 40, 18, 98, 10, 10);
        // C
        fill(this.getColor(value, 4));
        rect(140, 160, 18, 98, 10, 10);
        // D
        fill(this.getColor(value, 3));
        rect(60, 260, 78, 18, 10, 10);
        // E
        fill(this.getColor(value, 2));
        rect(40, 160, 18, 98, 10, 10);
        // F
        fill(this.getColor(value, 1));
        rect(40, 40, 18, 98, 10, 10);
        // G
        fill(this.getColor(value, 0));
        rect(60, 140, 78, 18, 10, 10);

        pop();
    }
}