input.setAccelerometerRange(AcceleratorRange.TwoG)
let x = 0;
let y = 0;
let z = 0;
let ceil = 300;
let floor = -300;
let a = 150
input.onButtonPressed(Button.A, function() {
    ceil += 50 //lehčí
    floor -= 50
    a += 50
})
input.onButtonPressed(Button.B, function() {
    ceil -= 50 //těžší
    floor += 50
    a -= 50
})
ExpSense.restart()

basic.forever(function() {
    x = input.acceleration(Dimension.X);
    y = input.acceleration(Dimension.Y);
    z = input.acceleration(Dimension.Z);
    console.logValue("x", x)
    console.logValue("y", y)
    console.logValue("z", z)
    let xled = x/150 + 2.5;
    let yled = y/150 + 2.5;
    led.plot(xled, yled)
    if (x > ceil || x < floor) {
        basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
        ExpSense.restart()
    } else if (x > ceil - 25 || x < floor + 25) {
        music.playTone(Note.A, music.beat(BeatFraction.Quarter))
    } else if (x > ceil - 50 || x < floor + 50) {
        music.playTone(Note.A, music.beat(BeatFraction.Half))
    } else if (x > ceil - 100 || x < floor + 100) {
        music.playTone(Note.A, music.beat(BeatFraction.Whole))
    }
    if (y > ceil || y < floor) {
        basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
        ExpSense.restart()
    } else if (y > ceil - 25 || y < floor + 25) {
        music.playTone(Note.A, music.beat(BeatFraction.Quarter))
    } else if (y > ceil - 50 || y < floor + 50) {
        music.playTone(Note.A, music.beat(BeatFraction.Half))
    } else if (y > ceil - 100 || y < floor + 100) {
        music.playTone(Note.A, music.beat(BeatFraction.Whole))
    } 
    basic.pause(100)
    basic.clearScreen()
})

