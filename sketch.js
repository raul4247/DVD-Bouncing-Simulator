let canvasWidth, canvasHeight
let logoWidth, logoHeight
let x, y
let xspeed, yspeed

function setup() {
    canvasWidth = 800
    canvasHeight = 600
    logoWidth = 80
    logoHeight = 60
    x = 500
    y = 200
    xspeed = 5
    yspeed = 5

    createCanvas(canvasWidth, canvasHeight)    
}

function draw(){
    background('black')
    fill(color('magenta'))
    noStroke()
    rect(x, y, logoWidth, logoHeight)

    moveLogo()
}

function moveLogo(){
    x += xspeed
    y += yspeed

    if(x == canvasWidth-logoWidth)
        xspeed = -xspeed
    if(y == canvasHeight-logoHeight)
        yspeed = -yspeed
    if(x == 0)
        xspeed = -xspeed
    if(y == 0)
        yspeed = -yspeed
    
    if( (x == 0 && y == 0)||
        (x == 0 && y == canvasHeight-logoHeight)||
        (x == canvasWidth-logoWidth && y == 0)||
        (x == canvasWidth-logoWidth && y == canvasHeight-logoHeight) )
        console.log('yes')
}