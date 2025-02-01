# Flashing Guide

1. copy [CircuitPython](https://circuitpython.org/board/waveshare_rp2040_zero/) to RP2040 Zero
    ```sh
    wget https://downloads.circuitpython.org/bin/waveshare_rp2040_zero/en_US/adafruit-circuitpython-waveshare_rp2040_zero-en_US-8.2.4.uf2
    cp adafruit-circuitpython-waveshare_rp2040_zero-en_US-8.2.4.uf2 /run/media/sam/RPI-RP2/
    ```
2. Rename RP2040 Zeroes to end in `L` and `R`
    ```
    sudo umount /dev/sdb1
    sudo fatlabel /dev/sdb1 RISHAL
    ```
    Repeat for `RISHAR`
3. Copy `kmk_firmware/kmk` directory to each RP2040 Zero
    ```sh
    rm /run/media/sam/RISHAL/code.py
    cp -avr ~/repos/kmk_firmware/kmk /run/media/sam/RISHAL
    cp ~/repos/risha/firmware/kmk/kb.py /run/media/sam/RISHAL 
    cp ~/repos/risha/firmware/kmk/main.py /run/media/sam/RISHAL 
    ```
    Repeat for `RISHAR`
4. Copy board firmware to each RP2040 Zero. Use Piantor firmware as a starting point
    - https://raw.githubusercontent.com/cairnm/kmk_firmware/piantor/boards/beekeeb/piantor/kb.py
    - https://raw.githubusercontent.com/cairnm/kmk_firmware/piantor/boards/beekeeb/piantor/main.py 

## docs

- https://circuitpython.org/board/weact_studio_pico/
- http://kmkfw.io/docs/split_keyboards/
