/*******************************************************************************
 * Functions for REKAIJON Humidity Sensor.
 *
 * Company: Invoke
 *******************************************************************************/

namespace REKAIJON {
    /**
    * Select Pins for to identify the line.
    * @param Humidity read Pin.
    */

    //% group="Humidity Sensor"
    //% weight=19
    //% blockGap=40
    //% blockId=rekaijon_read_humiditysensor
    //% block="Humidity read Pin %humiditypin"

    export function humiditysensorread(humidity: DigitalPin): int16 {

        if (pins.digitalReadPin(humidity)) {
            return 1;
        }
        else {
            return 0;
        }
    }
}