input.onButtonPressed(Button.A, function () {
    RainbowSparkleUnicorn.Light.turnOn(lightPins.P8)
})
input.onButtonPressed(Button.B, function () {
    RainbowSparkleUnicorn.Light.turnOff(lightPins.P8)
})
comment.comment("To use the board you must add this block below as the first block")
RainbowSparkleUnicorn.start()
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
RainbowSparkleUnicorn.Light.turnAllOn()
basic.showIcon(IconNames.Heart)
