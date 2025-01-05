module.exports = {
  params: {
    value: 'PLACEHOLDER',
    designator: '**',
    side: 'F',
  },
  body: p => {
    return `
    
        (module ${p.value} (layer ${p.side}.Cu)

            ${p.at /* parametric position */}
            (fp_text reference "${p.ref}" (at 0 0 0) (layer "${p.side}.Fab")
              (effects (font (size 1 1) (thickness 0.15)))
            )
        )
    
        `
  }
}
