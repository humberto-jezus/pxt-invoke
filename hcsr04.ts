/*******************************************************************************
 * Functions for REKAIJON HC-SR04.
 *
 * Company: Invoke
 *******************************************************************************/

// PIN Selection.
enum MotorSelection {
    P0 = DigitalPin.P0,
    P1 = DigitalPin.P1,
    P2 = DigitalPin.P2,
    P9 = DigitalPin.P9,
    P12 = DigitalPin.P12,
    P13 = DigitalPin.P13,
    P14 = DigitalPin.P14,
    P15 = DigitalPin.P15,
    P16 = DigitalPin.P16,
};

namespace REKAIJON {

    /**
    * Select Pins for to read the distance in cm.
    * @param Pin Trig.
    * @param Pin Echo.
    */

    //% group="HC-SR04"
    //% weight=19
    //% blockGap=40
    //% blockId=rekaijon_read_HCSR04
    //% block="Pin Trig %trig \nPin Echo %echo \ndistance %dist"
   
    export function ultrassonicRead(trig: DigitalPin, echo: DigitalPin): int16 {
        let distance = 0;
        pins.digitalWritePin(trig,0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 1);
        pins.digitalWritePin(echo, 0)
        distance = Math.idiv(pins.pulseIn(echo, PulseValue.High), 58);
        basic.pause(100);
        return distance;

    }

}
