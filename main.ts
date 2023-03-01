input.setAccelerometerRange(AcceleratorRange.TwoG)
let x = 0;
let y = 0;
let z = 0;
let ceil = 300;
let floor = -300;
input.onButtonPressed(Button.A, function() {
    ceil += 100
    floor -= 100
})
input.onButtonPressed(Button.B, function() {
    ceil -= 100
    floor += 100
})

basic.forever(function() {
    x = input.acceleration(Dimension.X);
    y = input.acceleration(Dimension.Y);
    z = input.acceleration(Dimension.Z);
    console.logValue("x", x)
    console.logValue("y", y)
    console.logValue("z", z)
    if (x > ceil || x < floor) {
        basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    } else if (x > ceil - 25 || x < floor + 25) {
        music.playTone(Note.A, music.beat(BeatFraction.Quarter))
    } else if (x > ceil - 50 || x < floor + 50) {
        music.playTone(Note.A, music.beat(BeatFraction.Half))
    } else if (x > ceil - 100 || x < floor + 100) {
        music.playTone(Note.A, music.beat(BeatFraction.Whole))
    }
    if (y > ceil || y < ceil) {
        basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    } else if (y > ceil - 25 || y < floor + 25) {
        music.playTone(Note.A, music.beat(BeatFraction.Quarter))
    } else if (y > ceil - 50 || y < floor + 50) {
        music.playTone(Note.A, music.beat(BeatFraction.Half))
    } else if (y > ceil - 100 || y < floor + 100) {
        music.playTone(Note.A, music.beat(BeatFraction.Whole))
    } 
    basic.clearScreen()
    basic.pause(100)
})

