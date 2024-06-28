/*******************************************************************************
 * Functions for REKAIJON Water Sensor.
 *
 * Company: Invoke
 *******************************************************************************/

namespace REKAIJON {
    /**
    * Select Pins for to identify the water.
    * @param Water Sensor read Pin.
    */

    //% group="Water Sensor"
    //% weight=19
    //% blockGap=40
    //% blockId=rekaijon_read_watersensor
    //% block="Water Sensor read Pin %waterpin"

    export function watersensorread(waterpin: DigitalPin): int16 {

        if (pins.digitalReadPin(waterpin)) {
            return 1;
        }
        else {
            return 0;
        }
    }
}