import board

from kb import KMKKeyboard, isRight
keyboard = KMKKeyboard()

from kmk.keys import KC
from kmk.modules.split import Split, SplitSide, SplitType
from kmk.modules.layers import Layers; keyboard.modules.append(Layers())
from kmk.modules.holdtap import HoldTap; keyboard.modules.append(HoldTap())
from kmk.modules.mouse_keys import MouseKeys; keyboard.modules.append(MouseKeys())
from kmk.modules.power import Power; keyboard.modules.append(Power())
from kmk.modules.tapdance import TapDance; keyboard.modules.append(TapDance())
from kmk.extensions.media_keys import MediaKeys; keyboard.extensions.append(MediaKeys())
from kmk.modules.capsword import CapsWord; keyboard.modules.append(CapsWord())

keyboard.tap_time = 100

split_side = SplitSide.RIGHT if isRight else SplitSide.LEFT

split = Split(
    split_side=split_side,
    split_type=SplitType.UART,
    split_flip=True,
    split_target_left=SplitSide.LEFT,
    # uart_flip=True,
    data_pin=board.GP12,
    # data_pin2=board.GP0,
    use_pio=True,
)
keyboard.modules.append(split)


# === layer tap ---------------------------------------------------------------
# NAV (layer 1)
LT_TAB = KC.LT(1, KC.TAB, prefer_hold=True, tap_interrupted=False, tap_time=200)
LT_SPC = KC.LT(1, KC.SPC, prefer_hold=True, tap_interrupted=False, tap_time=200)
# NUM (layer 2)
LT_BSPC = KC.LT(2, KC.BSPC, prefer_hold=True, tap_interrupted=False, tap_time=200)
# SYM (layer 3)
LT_ENT = KC.LT(3, KC.ENT, prefer_hold=True, tap_interrupted=False, tap_time=200)
# FUN (layer 4)
LT_DEL = KC.LT(4, KC.DEL, prefer_hold=True, tap_interrupted=False, tap_time=200)
# MEDIA (layer 5)
LT_ESC = KC.LT(5, KC.ESC, prefer_hold=True, tap_interrupted=False, tap_time=200)

# === home row mods ------------------------------------------------------------
MT_A = KC.HT(KC.A, KC.LGUI, prefer_hold=False, tap_interrupted=True, tap_time=200)
MT_S = KC.HT(KC.S, KC.LALT, prefer_hold=False, tap_interrupted=True, tap_time=200)
MT_D = KC.HT(KC.D, KC.LCTL, prefer_hold=False, tap_interrupted=True, tap_time=200)
MT_F = KC.HT(KC.F, KC.LSFT, prefer_hold=False, tap_interrupted=True, tap_time=200)

MT_J = KC.HT(KC.J, KC.LSFT, prefer_hold=False, tap_interrupted=True, tap_time=200)
MT_K = KC.HT(KC.K, KC.LCTL, prefer_hold=False, tap_interrupted=True, tap_time=200)
MT_L = KC.HT(KC.L, KC.LALT, prefer_hold=False, tap_interrupted=True, tap_time=200)
MT_QUOT = KC.HT(KC.QUOT, KC.LGUI, prefer_hold=False, tap_interrupted=True, tap_time=200)

# === keymap -------------------------------------------------------------------
keyboard.keymap = [
    # QWERTY
    [
        KC.Q,    KC.W,    KC.E,    KC.R,    KC.T,       KC.Y,   KC.U,    KC.I,    KC.O,    KC.P,
        MT_A,    MT_S,    MT_D,    MT_F,    KC.G,       KC.H,   MT_J,    MT_K,    MT_L,    MT_QUOT,
        KC.Z,    KC.X,    KC.C,    KC.V,    KC.B,       KC.N,   KC.M,    KC.COMM, KC.DOT,  KC.SLSH,
                          LT_ESC,  LT_SPC,  LT_TAB,     LT_ENT, LT_BSPC, LT_DEL,
    ],                  
    #                     MEDIA             NAV         NUM     SYM      FUN
    # NAV
    [
        KC.NO,   KC.NO,   KC.NO,   KC.NO,   KC.NO,      KC.NO,  KC.NO,   KC.NO,   KC.NO,   KC.NO,
        KC.LGUI, KC.LALT, KC.LCTL, KC.LSFT, KC.NO,      KC.ESC, KC.LEFT, KC.DOWN, KC.UP,   KC.RGHT,
        KC.NO,   KC.RALT, KC.NO,   KC.NO,   KC.NO,      KC.INS, KC.HOME, KC.PGDN, KC.PGUP, KC.END,
                          KC.NO,   KC.NO,   KC.NO,      KC.ENT, KC.BSPC, KC.DEL, 
    ],
    # NUM
    [
        KC.LBRC, KC.N7,   KC.N8,   KC.N9,   KC.RBRC,    KC.NO,  KC.NO,   KC.NO,   KC.NO,   KC.NO,
        KC.SCLN, KC.N4,   KC.N5,   KC.N6,   KC.EQL,     KC.NO,  KC.LSFT, KC.LCTL, KC.LALT, KC.LGUI,
        KC.GRV,  KC.N1,   KC.N2,   KC.N3,   KC.BSLS,    KC.NO,  KC.NO,   KC.NO,   KC.RALT, KC.NO,
                          KC.DOT,  KC.N0,   KC.MINS,    KC.NO,  KC.NO,   KC.NO,
    ],
    # SYM
    [
        KC.LCBR, KC.AMPR, KC.ASTR, KC.LPRN, KC.RCBR,    KC.NO,  KC.NO,   KC.NO,   KC.NO,   KC.NO,
        KC.COLN, KC.DLR,  KC.PERC, KC.CIRC, KC.PLUS,    KC.NO,  KC.LSFT, KC.LCTL, KC.LALT, KC.LGUI,
        KC.TILD, KC.EXLM, KC.AT,   KC.HASH, KC.PIPE,    KC.NO,  KC.NO,   KC.NO,   KC.RALT, KC.NO,
                          KC.LPRN, KC.RPRN, KC.UNDS,    KC.NO,  KC.NO,   KC.NO,
    ],
    # FUN
    [
        KC.F12,  KC.F7,   KC.F8,   KC.F9,   KC.PSCR,    KC.NO,  KC.NO,   KC.NO,   KC.NO,   KC.NO,
        KC.F11,  KC.F4,   KC.F5,   KC.F6,   KC.SLCK,    KC.NO,  KC.LSFT, KC.LCTL, KC.LALT, KC.LGUI,
        KC.F10,  KC.F1,   KC.F2,   KC.F3,   KC.PAUS,    KC.NO,  KC.NO,   KC.NO,   KC.RALT, KC.NO,
                          KC.APP,  KC.SPC,  KC.TAB,     KC.NO,  KC.NO,   KC.NO,
    ],
    # MEDIA
    [
        KC.NO,   KC.NO,   KC.NO,   KC.NO,   KC.NO,      KC.NO,     KC.NO,   KC.NO,   KC.NO,   KC.NO,
        KC.LGUI, KC.LALT, KC.LCTL, KC.LSFT, KC.NO,      KC.PS_TOG, KC.MPRV, KC.VOLD, KC.VOLU, KC.MNXT,
        KC.NO,   KC.RALT, KC.NO,   KC.NO,   KC.NO,      KC.HID,    KC.NO,   KC.NO,   KC.NO,   KC.NO,
                          KC.NO,   KC.NO,   KC.NO,      KC.MSTP,   KC.MPLY, KC.MUTE,
    ],
]

layer_names_list = [
    'QWERTY', 'NAV', 'NUM', 'SYM', 'FUN', 'MEDIA',
]

if __name__ == '__main__':
    keyboard.go()
