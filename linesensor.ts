/*******************************************************************************
 * Functions for REKAIJON Line Sensor.
 *
 * Company: Invoke
 *******************************************************************************/

namespace REKAIJON 
{
    /**
    * Select Pins for to identify the line.
    * @param Line Sensor read Pin.
    */

    //% group="Line Sensor"
    //% weight=19
    //% blockGap=40
    //% blockId=rekaijon_read_linesensor
    //% block="Line sensor read Pin %linepin"

    export function linesensorread(linepin: AnalogPin): int16 {
    
        if(pins.analogReadPin(linepin)>=100)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
}