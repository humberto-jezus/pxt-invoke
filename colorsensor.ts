/*******************************************************************************
 * Functions for REKAIJON Color Sensor.
 *
 * Company: Invoke
 *******************************************************************************/

enum ColorSelection {
    RED = 1,
    BLUE = 2,
    GREEN = 3,
};

namespace REKAIJON {
    
   
    /**
    * Select Pins for to identify the color.
    * @param Pin S2.
    * @param Pin S3.
    */

    //% group="Color Sensor"
    //% weight=19
    //% blockGap=40
    //% blockId=rekaijon_read_colorsensor
    //% block="Read Color %color\n Pin Out %outpin\n Pin S2 %s2pin\n Pin S3 %s3pin"

    export function colorsensorread(color: ColorSelection, outpin: DigitalPin,s2pin: DigitalPin, s3pin: DigitalPin): int16 {

        let colorvalue = 0;
        switch(color)
        {
            case ColorSelection.RED:
                pins.digitalWritePin(s2pin,0);
                pins.digitalWritePin(s3pin,0);
            break;

            case ColorSelection.BLUE:
                pins.digitalWritePin(s2pin,0);
                pins.digitalWritePin(s3pin,1);
                break;
            
            case ColorSelection.GREEN:
                pins.digitalWritePin(s2pin,1);
                pins.digitalWritePin(s3pin,0);
                break;

        }    

        if(pins.digitalReadPin(outpin)) 
        {
            colorvalue = pins.pulseIn(outpin,PulseValue.High);
        }
        return colorvalue;
    }
}