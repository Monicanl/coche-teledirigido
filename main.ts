radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 300) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        basic.pause(500)
    }
    if (receivedNumber == 500) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        basic.pause(500)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "Ay") {
        if (value < -100) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, value + 4)
        }
        if (value < 100) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, value + 4)
        }
        if (value > -100 && value < 100) {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
})
radio.setGroup(1)
