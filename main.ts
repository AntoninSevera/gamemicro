input.setAccelerometerRange(AcceleratorRange.TwoG)
let x = 0;
let y = 0;
let z = 0;
let ceil = 100;
let floor = -100;
input.onButtonPressed(Button.A, function() {
    ceil += 100
    floor -= 100
})
input.onButtonPressed(Button.B, function() {
    ceil =- 100
    floor =+ 100
})

basic.forever(function() {
    x = input.acceleration(Dimension.X);
    y = input.acceleration(Dimension.Y);
    z = input.acceleration(Dimension.Z);
    console.logValue("x", x)
    console.logValue("y", y)
    console.logValue("z", z)
    if (x > ceil || x < floor) {
        basic.showNumber(4)
    }
    if (y > ceil || y < floor) {
        basic.showNumber(5)
    }
    basic.clearScreen()
    basic.pause(100)
})

