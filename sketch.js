let canvasWidth, canvasHeight
let x, y
let xspeed, yspeed
let dvd

function preload() {
    dvd = loadImage('imgs/dvd.png')
}

function setup() {
    canvasWidth = 800
    canvasHeight = 600
    x = random(canvasWidth)
    y = random(canvasHeight)
    xspeed = 5
    yspeed = 5

    createCanvas(canvasWidth, canvasHeight)    
}

function draw(){
    background('black')

    image(dvd, x, y)

    moveLogo()
}

function moveLogo(){
    x += xspeed
    y += yspeed

    if(x >= canvasWidth-dvd.width){
        xspeed = -xspeed
        x = canvasWidth-dvd.width
    }
    else if(x <= 0){
        xspeed = -xspeed
        x = 0
    }
    if(y >= canvasHeight-dvd.height){
        yspeed = -yspeed
        y = canvasHeight-dvd.height
    }
    else if(y <= 0){
        yspeed = -yspeed
        y = 0
    }
}