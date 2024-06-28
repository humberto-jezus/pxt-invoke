/*******************************************************************************
 * Functions for REKAIJON servos and motors driver.
 *
 * Company: Invoke
 *******************************************************************************/

// Motor Selection.
enum MotorSelection {
    M1 = 0,
    M2 = 1,

    //% block="M1&M2"
    M1_M2 = 1000,
};

// Motor direction.
enum MotorDirection {
    //% block="forward"
    Forward = 0,

    //% block="backward"
    Backward = 1
};

// Servo Selection.
enum ServoSelection {
    S1 = REG_SERVO_1,
    S2 = REG_SERVO_2,

    //% block="S1&S2"
    S1_S2 = 1000,
};

namespace REKAIJON {

    /**
     * Stop motor
     * @param motor Motor channel. eg: Motor.M1, Motor.M2
     */
    //% group="DC Motors"
    //% weight=20
    //% blockGap=8
    //% blockId=rekaijon_stop_motor
    //% block="stop motor %motor"
    export function stopMotor(motor: MotorSelection): void {
        switch (motor) {
            case MotorSelection.M1:
                REKAIJON.i2cWrite(REG_M1A, 0);
                REKAIJON.i2cWrite(REG_M1B, 0);
                break;

            case MotorSelection.M2:
                REKAIJON.i2cWrite(REG_M2A, 0);
                REKAIJON.i2cWrite(REG_M2B, 0);
                break;

            case MotorSelection.M1_M2:
                REKAIJON.i2cWrite(REG_M1A, 0);
                REKAIJON.i2cWrite(REG_M1B, 0);
                REKAIJON.i2cWrite(REG_M2A, 0);
                REKAIJON.i2cWrite(REG_M2B, 0);
                break;
        }
    }


    /**
     * Run the motor forward or backward (Speed = 0-255).
     * @param motor Motor Selection.
     * @param direction Motor direction.
     * @param speed Motor speed (0-255). eg: 128
     */
    //% group="DC Motors"
    //% weight=19
    //% blockGap=40
    //% blockId=rekaijon_run_motor
    //% block="run motor %motor %direction at speed %speed"
    //% speed.min=0 speed.max=255
    export function runMotor(motor: MotorSelection, direction: MotorDirection, speed: number): void {
        speed = REKAIJON.limit(speed, 0, 255);
        switch (motor) {
            case MotorSelection.M1:
                if (direction == MotorDirection.Forward) {
                    REKAIJON.i2cWrite(REG_M1A, speed);
                    REKAIJON.i2cWrite(REG_M1B, 0);
                }
                else {
                    REKAIJON.i2cWrite(REG_M1A, 0);
                    REKAIJON.i2cWrite(REG_M1B, speed);
                }
                break;

            case MotorSelection.M2:
                if (direction == MotorDirection.Forward) {
                    REKAIJON.i2cWrite(REG_M2A, speed);
                    REKAIJON.i2cWrite(REG_M2B, 0);
                }
                else {
                    REKAIJON.i2cWrite(REG_M2A, 0);
                    REKAIJON.i2cWrite(REG_M2B, speed);
                }
                break;

            case MotorSelection.M1_M2:
                if (direction == MotorDirection.Forward) {
                    REKAIJON.i2cWrite(REG_M1A, speed);
                    REKAIJON.i2cWrite(REG_M1B, 0);
                    REKAIJON.i2cWrite(REG_M2A, speed);
                    REKAIJON.i2cWrite(REG_M2B, 0);
                }
                else {
                    REKAIJON.i2cWrite(REG_M1A, 0);
                    REKAIJON.i2cWrite(REG_M1B, speed);
                    REKAIJON.i2cWrite(REG_M2A, 0);
                    REKAIJON.i2cWrite(REG_M2B, speed);
                }
                break;
        }
    }


    /**
     * Disable the servo.
     * @param servo Servo Selection.
     */
    //% group="Servos"
    //% weight=18
    //% blockGap=8
    //% blockId=rekaijon_stop_servo
    //% block="disable servo %servo"
    export function stopServo(servo: ServoSelection): void {
        if (servo == ServoSelection.S1_S2) {
            REKAIJON.i2cWrite(ServoSelection.S1, 0);
            REKAIJON.i2cWrite(ServoSelection.S2, 0);
        }
        else {
            REKAIJON.i2cWrite(servo, 0);
        }
    }

    /**
     * Set the position for servo (0-180 degrees).
     * @param servo Servo Selection.
     * @param position Servo positon. eg: 90
     */
    //% group="Servos"
    //% weight=17
    //% blockGap=40
    //% blockId=rekaijon_set_servo_position
    //% block="set servo %servo position to %position degrees"
    //% position.min=0 position.max=180
    export function setServoPos(servo: ServoSelection, position: number): void {
        position = REKAIJON.limit(position, 0, 180);

        let pulseWidth = position * 20 / 18 + 50
        if (servo == ServoSelection.S1_S2) {
            REKAIJON.i2cWrite(ServoSelection.S1, pulseWidth);
            REKAIJON.i2cWrite(ServoSelection.S2, pulseWidth);
        }
        else {
            REKAIJON.i2cWrite(servo, pulseWidth);
        }
    }

}
