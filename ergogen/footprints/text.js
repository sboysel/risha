module.exports = {
  params: {
    side: 'F',
    text: '',
    h_size: 1,
    v_size: 1,
    thickness: 0.15,
    justify: '',
    knockout: false,
    face: '',
    layer: 'SilkS'
  },
  body: p => {
    knockout = p.knockout == true && ` knockout` || '';
    face = p.face != '' && ` (face "${p.face}") ` || '';
    justify = p.justify != '' && `(justify ${p.justify})` || '';
    
    return `
            (gr_text "${p.text}" ${p.at} (layer ${p.side}.${p.layer}${knockout})
                (effects (font ${face}(size ${p.h_size} ${p.v_size}) (thickness ${p.thickness})) ${justify})
            )
        `
  }
}
