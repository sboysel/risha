all: choc/pcbs/risha-choc.kicad_pcb mx/pcbs/risha-mx.kicad_pcb

choc/pcbs/risha-choc.kicad_pcb: choc/risha-choc.yaml
	npm run choc

mx/pcbs/risha-mx.kicad_pcb: mx/risha-mx.yaml
	npm run mx

clean:
	rm -rf choc/pcbs/risha-choc.kicad_pcb
	rm -rf mx/pcbs/risha-mx.kicad_pcb