let canvasWidth = 800
let canvasHeight = 600
let x, y
let xspeed, yspeed
let dvd
let r, g, b

let slider
let cornerHitText, hitText

let cornerHit, hit

function preload() {
    dvd = loadImage('imgs/dvd.png')
}

function setup() {
    createCanvas(canvasWidth, canvasHeight)

    label = createDiv('XY Axis Speed')
    slider = createSlider(1, 24, 5, 1)
    slider.parent(label)

    let buttonReset = createButton("reset")
    buttonReset.mousePressed(resetSketch)

    createDiv('*Reset to see speed changes')

    hitText = createDiv('Hits: 0') 
    cornerHitText = createDiv('Corners: 0' )

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
        hitCount()
    }
    else if(x <= 0){
        xspeed = -xspeed
        x = 0
        changeColor()
        hitCount()
    }
    if(y >= canvasHeight-dvd.height){
        yspeed = -yspeed
        y = canvasHeight-dvd.height
        changeColor()
        hitCount()
    }
    else if(y <= 0){
        yspeed = -yspeed
        y = 0
        changeColor()
        hitCount()
    }
    if( (x == 0 && y == 0)||
    (x == 0 && y == canvasHeight-dvd.height)||
    (x == canvasWidth-dvd.width && y == 0)||
    (x == canvasWidth-dvd.width && y == canvasHeight-dvd.height) )
        cornerCount()
}

function changeColor() {
    r = random(0, 256)
    g = random(0, 256)
    b = random(0, 256)
}

function resetSketch() {
    x = random(canvasWidth)
    y = random(canvasHeight)

    xspeed = slider.value()
    yspeed = slider.value()

    r = random(0, 256)
    g = random(0, 256)
    b = random(0, 256)

    hit = 0
    hitText.html('Hits: ' + hit)
    cornerHit = 0
    cornerHitText.html('Corners: ' + cornerHit)
}

function hitCount() {
    hit += 1
    hitText.html('Hits: ' + hit)
}

function cornerCount() {
    cornerHit += 1
    cornerHitText.html('Corners: ' + cornerHit)
}