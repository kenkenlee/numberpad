sensors.actuator_keyborad_pin(DigitalPin.P2, DigitalPin.P8)
basic.forever(function () {
    if (sensors.actuator_keyborad_read() == "*") {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # # # .
            # . # . #
            `)
    }
    if (sensors.actuator_keyborad_read() == "#") {
        basic.showLeds(`
            . # . # .
            # # # # #
            . # . # .
            # # # # #
            . # . # .
            `)
    }
    if (sensors.actuator_keyborad_read() == "1") {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (sensors.actuator_keyborad_read() == "2") {
        basic.showLeds(`
            . # # . .
            # . . # .
            . . # # .
            . # . . .
            # # # # .
            `)
    }
    if (sensors.actuator_keyborad_read() == "3") {
        basic.showLeds(`
            # # # # .
            . . . # .
            . # # # .
            . . . # .
            # # # # .
            `)
    }
    if (sensors.actuator_keyborad_read() == "4") {
        basic.showLeds(`
            # . # . .
            # . # . .
            # # # # .
            . . # . .
            . . # . .
            `)
    }
    if (sensors.actuator_keyborad_read() == "5") {
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # # .
            . . . # .
            # # # # .
            `)
        if (sensors.actuator_keyborad_read() == "6") {
            basic.showLeds(`
                # # # # .
                # . . . .
                # # # # .
                # . . # .
                # # # # .
                `)
        }
        if (sensors.actuator_keyborad_read() == "7") {
            basic.showLeds(`
                # # # # .
                # . . # .
                . . # # .
                . # . . .
                . # . . .
                `)
        }
        if (sensors.actuator_keyborad_read() == "8") {
            basic.showLeds(`
                # # # # .
                # . . # .
                # # # # .
                # . . # .
                # # # # .
                `)
        }
        if (sensors.actuator_keyborad_read() == "9") {
            basic.showLeds(`
                # # # # .
                # . . # .
                # # # # .
                . . . # .
                # # # # .
                `)
        }
        if (sensors.actuator_keyborad_read() == "0") {
            basic.showLeds(`
                # # # # .
                # . . # .
                # . . # .
                # . . # .
                # # # # .
                `)
        }
        if (sensors.actuator_keyborad_read() == "a") {
            basic.showLeds(`
                . # # # #
                . # . . #
                . # # # #
                . # . . #
                . # . . #
                `)
        }
        if (sensors.actuator_keyborad_read() == "b") {
            basic.showLeds(`
                . # # # .
                . # . . #
                . # # # .
                . # . . #
                . # # # .
                `)
        }
        if (sensors.actuator_keyborad_read() == "c") {
            basic.showLeds(`
                . # # # #
                . # . . .
                . # . . .
                . # . . .
                . # # # #
                `)
        }
        if (sensors.actuator_keyborad_read() == "d") {
            basic.showLeds(`
                . # # # .
                . # . . #
                . # . . #
                . # . . #
                . # # # .
                `)
        }
    }
})
