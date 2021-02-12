input.onButtonPressed(Button.A, function () {
    RainbowSparkleUnicorn.Light.breathe(
    breathLightPins.P15,
    1000,
    1000,
    500,
    500
    )
})
input.onButtonPressed(Button.B, function () {
    RainbowSparkleUnicorn.Light.turnOff(lightPins.P15)
})
comment.comment("To use the board you must add this block below as the first block")
RainbowSparkleUnicorn.start()
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
RainbowSparkleUnicorn.Light.turnAllOn()
basic.showIcon(IconNames.Heart)
