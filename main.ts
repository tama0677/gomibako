input.onButtonPressed(Button.B, function () {
    basic.showNumber(grove.measureInCentimeters(DigitalPin.P5))
})
basic.forever(function () {
    if (grove.measureInCentimeters(DigitalPin.P5) < 130) {
        pins.servoWritePin(AnalogPin.P0, 135)
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
    }
})
