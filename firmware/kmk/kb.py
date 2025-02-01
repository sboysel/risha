import board

from storage import getmount

from kmk.kmk_keyboard import KMKKeyboard as _KMKKeyboard
from kmk.scanners.keypad import KeysScanner

# set side based on drive names
name = str(getmount('/').label)
isRight = True if name.endswith('R') else False

# GP0: matrix_pinky_bottom
# GP1: matrix_pinky_home
# GP2: matrix_pinky_top
# GP3: matrix_ring_bottom
# GP4: matrix_ring_home
# GP5: matrix_ring_top
# GP6: matrix_middle_bottom
# GP7: matrix_middle_home
# GP8: matrix_middle_top
# GP9: matrix_index_top
# GP10: matrix_index_home
# GP11: matrix_index_bottom
# GP13: matrix_inner_bottom
# GP14: matrix_inner_home
# GP15: matrix_inner_top
# GP26: thumbfan_far_home
# GP27: thumbfan_middle_home
# GP28: thumbfan_near_home


# GPIO to key mapping, Left
_KEY_CFG_LEFT = [
    board.GP2, board.GP5, board.GP8,  board.GP9,  board.GP15,
    board.GP1, board.GP4, board.GP7,  board.GP10, board.GP14,
    board.GP0, board.GP3, board.GP6,  board.GP11, board.GP13,
                          board.GP28, board.GP27, board.GP26 
]

# GPIO to key mapping, Left
_KEY_CFG_RIGHT = [
    board.GP15, board.GP9,  board.GP8, board.GP5, board.GP2,
    board.GP14, board.GP10, board.GP7, board.GP4, board.GP1,
    board.GP13, board.GP11, board.GP6, board.GP3, board.GP0,
    board.GP26, board.GP27, board.GP28
]

class KMKKeyboard(_KMKKeyboard):
    def __init__(self):
        # create and register the scanner
        self.matrix = KeysScanner(
            pins = _KEY_CFG_RIGHT if isRight == True else _KEY_CFG_LEFT,
            value_when_pressed = false
        )

    # flake8: noqa
    # fmt: off
    coord_mapping = [
         0,  1,  2,  3,  4,   18, 19, 20, 21, 22,
         5,  6,  7,  8,  9,   23, 24, 25, 26, 27,
        10, 11, 12, 13, 14,   28, 29, 30, 31, 32,
                15, 16, 17,   33, 34, 35
    ]
