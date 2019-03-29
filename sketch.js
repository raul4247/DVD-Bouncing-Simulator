let canvasWidth = 800
let canvasHeight = 600
let x, y
let xspeed, yspeed
let dvd
let r, g, b

let slider

function preload() {
    dvd = loadImage('imgs/dvd.png')
}

function setup() {
    createCanvas(canvasWidth, canvasHeight)

    label = createDiv('XY Axis Speed');
    slider = createSlider(1, 24, 5, 1)
    slider.parent(label);

    let buttonReset = createButton("reset")
    buttonReset.mousePressed(resetSketch)

    createDiv('*Reset to see speed changes');

    resetSketch()
}

function draw(){
    background('black')

    tint(r, g, b)
    image(dvd, x, y)

    
    moveLogo()
}

function moveLogo(){
    x += xspeed
    y += yspeed

    if(x >= canvasWidth-dvd.width){
        xspeed = -xspeed
        x = canvasWidth-dvd.width
        changeColor()
    }
    else if(x <= 0){
        xspeed = -xspeed
        x = 0
        changeColor()
    }
    if(y >= canvasHeight-dvd.height){
        yspeed = -yspeed
        y = canvasHeight-dvd.height
        changeColor()
    }
    else if(y <= 0){
        yspeed = -yspeed
        y = 0
        changeColor()
    }
}

function changeColor() {
    r = random(100, 256)
    g = random(100, 256)
    b = random(100, 256)
}

function resetSketch() {
    x = random(canvasWidth)
    y = random(canvasHeight)

    xspeed = slider.value()
    yspeed = slider.value()

    r = random(100, 256)
    g = random(100, 256)
    b = random(100, 256)
}