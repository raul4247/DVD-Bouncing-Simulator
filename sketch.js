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
    logoWidth = 80
    logoHeight = 35
    x = 500
    y = 200
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

    if(x >= canvasWidth-dvd.width)
        xspeed = -xspeed
    if(y >= canvasHeight-dvd.height)
        yspeed = -yspeed
    if(x <= 0)
        xspeed = -xspeed
    if(y <= 0)
        yspeed = -yspeed
    
    if( (x == 0 && y == 0)||
        (x == 0 && y == canvasHeight-logoHeight)||
        (x == canvasWidth-logoWidth && y == 0)||
        (x == canvasWidth-logoWidth && y == canvasHeight-logoHeight) )
        console.log('yes')
}