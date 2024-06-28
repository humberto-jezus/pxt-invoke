// testes vão aqui; isto não será compilado quando este pacote for usado como uma extensão.
let sonar = 0
let humidity = 0
let linesensor = 0
basic.forever(function () {

    //-------------------MOTOR TEST------------------------//
    // Run Motor 1 forward at 50% speed for 1 second.
   /* REKAIJON.runMotor(MotorSelection.M1, MotorDirection.Forward, 127)
    basic.pause(1000)
    REKAIJON.stopMotor(MotorSelection.M1)

    // Run Motor 2 backward at 100% speed for 1 second.
    REKAIJON.runMotor(MotorSelection.M2, MotorDirection.Backward, 255)
    basic.pause(1000)
    REKAIJON.stopMotor(MotorSelection.M2)


    // Move Servo 1 to 0 degree.
    REKAIJON.setServoPos(ServoSelection.S1, 180)
    basic.pause(1000)

    // Disable Servo 1.
    REKAIJON.stopServo(ServoSelection.S1)


    // Move Servo 2 to 180 degrees.
    REKAIJON.setServoPos(ServoSelection.S2, 180)
    basic.pause(1000)

    // Disable Servo 2.
    REKAIJON.stopServo(ServoSelection.S2)*/

    //-----------------------ULTRASONIC SENSOR TEST-----------------
    /*sonar = REKAIJON.ultrassonicRead(DigitalPin.P1,DigitalPin.P0)
    basic.showNumber(sonar)*/
    
    //-----------------------HUMIDITY SENSOR TEST------------------
    humidity = REKAIJON.humiditysensorread(DigitalPin.P1)
    if(humidity >= 1)
    {
        basic.showNumber(6);
    }
    else
    {
        basic.showNumber(0)
    }

    basic.pause(100)

    // TESTE Display OLED
    REKAIJON.init(60)
    let contador = 0
    contador = contador + 1
    REKAIJON.showNumber(
        20,
        0,
        contador,
        1
    )
    basic.pause(1000)

})

