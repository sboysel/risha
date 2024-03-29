all: erogen/pcbs/risha.kicad_pcb

erogen/pcbs/risha.kicad_pcb: risha.yaml
	npm run gen

clean:
	rm -rf ergogen 
	rm -rf prod/production
	rm -rf prod/*.csv
	rm -rf prod/*.ipc
	rm -rf prod/*.zip
	rm -rf prod/fp-info-cache
	rm -rf prod/*.kicad_prl
	rm -rf prod/*.kicad_pro
	rm -rf prod/*.round-tracks-config
