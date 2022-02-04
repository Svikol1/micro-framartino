input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("C5 C5 G G C5 C5 C5 - ", 240)
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("C C D D E E C - ", 240)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("G A G F E E C - ", 240)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("E E F F G G G - ", 240)
    }
})
