// 2 short, 4 long flashes per specification of mildew pd
function sendAlert (repeat: number, delay: number) {
    for (let index = 0; index < repeat; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(delay)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(delay)
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
// runs only when set to ON
basic.forever(function () {
    if (onoff == 1) {
        if (input.lightLevel() < 50) {
            if (input.temperature() < 50 && input.temperature() > 10 && input.soundLevel() > 80) {
                sendAlert(2, 500)
                basic.pause(2000)
                sendAlert(4, 1000)
            }
        }
    }
})
