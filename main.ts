let TDS = 0
basic.forever(function () {
    naturalScience.requstdata()
    TDS = naturalScience.getTDS()
    naturalScience.setOLEDShowNumber(1, 5, 1, TDS)
    if (TDS < 20) {
        naturalScience.microIoT_setIndexColor(naturalScience.microIoT_ledRange(1, 4), 0x00ff00)
        naturalScience.setOLEDShowString(1, 16, 2, "Purified water")
    }
    if (TDS > 10 && TDS < 200) {
        naturalScience.microIoT_setIndexColor(naturalScience.microIoT_ledRange(1, 4), 0xffff00)
        naturalScience.setOLEDShowString(1, 16, 2, "Tap water")
    }
    if (TDS > 200) {
        naturalScience.microIoT_setIndexColor(naturalScience.microIoT_ledRange(1, 4), 0xff0000)
        naturalScience.setOLEDShowString(1, 16, 2, "sewage")
    }
    naturalScience.clearOLED(1, 5, 1)
    naturalScience.clearOLEDRow(1)
})
