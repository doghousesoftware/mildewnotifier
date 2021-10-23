function sendAlert () {
    for (let index = 0; index < 2; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(200)
    }
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(2000)
    }
}
input.onButtonPressed(Button.A, function () {
    onoff = 1
    basic.showString("ON")
})
input.onButtonPressed(Button.B, function () {
    onoff = 0
    basic.showString("OFF")
})
let onoff = 0
onoff = 0
basic.forever(function () {
    if (onoff == 1) {
        if (input.temperature() < 50 && input.soundLevel() > 80) {
            sendAlert()
        }
    }
})
