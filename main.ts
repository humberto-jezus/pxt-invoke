/**
 * Board initialization and helper function.
 */

// I2C slave address for ATMEGA328P.
const I2C_ADDRESS = 0x08;

// Register address.
const REG_REVISION = 0;
const REG_SERVO_1 = 1;
const REG_SERVO_2 = 2;
const REG_M1A = 5;
const REG_M1B = 6;
const REG_M2A = 7;
const REG_M2B = 8;



/**
 * Blocks for REKAIJON servos and motors driver.
 */
//% weight=10 color=#ff9000 icon="\uf085" block="INVOKE"
//% groups=['DC Motors', 'Servos', 'HC-SR04', 'Line Sensor', 'Humidity Sensor', 'Color Sensor', 'Display','Water Sensor']
namespace REKAIJON {
    
    // Brake the motors.
    stopMotor(MotorSelection.M1);
    stopMotor(MotorSelection.M2);

    // Disable the servos.
    stopServo(ServoSelection.S1);
    stopServo(ServoSelection.S2);
    
    /**
   * I2C read from the register of ATMEGA328P.
   * @param register Register address.
   */
    //% blockHidden=true
    //% blockId=rekaijon_i2c_read
    export function i2cRead(register: number): number {
        let value = 0;
        pins.i2cWriteNumber(I2C_ADDRESS, register, NumberFormat.UInt8LE, true);
        value = pins.i2cReadNumber(I2C_ADDRESS, NumberFormat.UInt8LE);
        return value;
    }

    /**
     * Limit the range of a number.
     * @param value The number we want to limit.
     * @param min Minimum value of the number.
     * @param max Maximum value of the number.
     */
    //% blockHidden=true
    //% blockId=rekaijon_limit
    export function limit(value: number, min: number, max: number): number {
        if (value < min) {
            value = min;
        }
        else if (value > max) {
            value = max;
        }
        return value;
    }



    /**
     * I2C write to the register of ATMEGA328P.
     * @param register Register address.
     * @param data Data to write.
     */
    //% blockHidden=true
    //% blockId=rekaijon_i2c_write
    export function i2cWrite(register: number, data: number): void {
        let buffer = pins.createBuffer(2);
        buffer[0] = register;
        buffer[1] = data;
        pins.i2cWriteBuffer(I2C_ADDRESS, buffer);
    }
}