// 2 short, 4 long flashes per specification of mildew pd
function sendAlert () {
    for (let index = 0; index < 2; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(500)
    }
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(2000)
    }
}
input.onButtonPressed(Button.A, function () {
    onoff = 1
    basic.showString("ON")
})
input.onSound(DetectedSound.Loud, function () {
	
})
input.onButtonPressed(Button.B, function () {
    onoff = 0
    basic.showString("OFF")
})
let onoff = 0
onoff = 0
// runs only when set to ON
basic.forever(function () {
    if (onoff == 1) {
        if (input.temperature() < 50 && input.soundLevel() > 80) {
            sendAlert()
        }
    }
})
