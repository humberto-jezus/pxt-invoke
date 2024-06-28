"""

Board initialization and helper function.

"""
# I2C slave address for ATMEGA328P.
I2C_ADDRESS = 0x08
# Register address.
REG_REVISION = 0
REG_SERVO_1 = 1
REG_SERVO_2 = 2
REG_M1A = 5
REG_M1B = 6
REG_M2A = 7
REG_M2B = 8
"""

Blocks for REKAIJON servos and motors driver.

"""
# % weight=10 color=#ff9000 icon="\uf085" block="INVOKE"
# % groups=['DC Motors', 'Servos', 'HC-SR04', 'Line Sensor', 'Humidity Sensor', 'Color Sensor', 'Display','Water Sensor']
@namespace
class REKAIJON:
    # Brake the motors.
    REKAIJON.stop_motor(MotorSelection.M1)
    REKAIJON.stop_motor(MotorSelection.M2)
    # Disable the servos.
    REKAIJON.stop_servo(ServoSelection.S1)
    REKAIJON.stop_servo(ServoSelection.S2)
    """
    
    I2C read from the register of ATMEGA328P.
    @param register Register address.
    
    """
    # % blockHidden=true
    # % blockId=rekaijon_i2c_read
    def i2cRead(register: number):
        value = 0
        pins.i2c_write_number(I2C_ADDRESS, register, NumberFormat.UINT8_LE, True)
        value = pins.i2c_read_number(I2C_ADDRESS, NumberFormat.UINT8_LE)
        return value
    """
    
    Limit the range of a number.
    @param value The number we want to limit.
    @param min Minimum value of the number.
    @param max Maximum value of the number.
    
    """
    # % blockHidden=true
    # % blockId=rekaijon_limit
    def limit(value2: number, min2: number, max2: number):
        if value2 < min2:
            value2 = min2
        elif value2 > max2:
            value2 = max2
        return value2
    """
    
    I2C write to the register of ATMEGA328P.
    @param register Register address.
    @param data Data to write.
    
    """
    # % blockHidden=true
    # % blockId=rekaijon_i2c_write
    def i2cWrite(register2: number, data: number):
        buffer = bytearray(2)
        buffer[0] = register2
        buffer[1] = data
        pins.i2c_write_buffer(I2C_ADDRESS, buffer)