all: mx/pcbs/lets_pico_mx.kicad_pcb # mx/cases/lets_pico.stl

mx/pcbs/lets_pico_mx.kicad_pcb: mx/lets_pico_mx.yaml
	npm run mx

mx/cases/lets_pico.jscad: mx/pcbs/lets_pico_mx.kicad_pcb

# mx/cases/lets_pico.stl: mx/cases/lets_pico.jscad
# 	npx jscad mx/cases/lets_pico.jscad -o mx/cases/lets_pico.stl

clean:
	rm -rf mx/pcbs/lets_pico_mx.kicad_pcb
	rm -rf mx/cases/lets_pico.stl
	rm -rf mx/cases/lets_pico.jscad
	rm -rf mx/outlines/*.dxf