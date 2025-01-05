# author: Sam Boysel <sboysel@gmail.com>
# adapted from https://github.com/infused-kim/kb_think_corney
.PHONY: all install ergogen pcbs gerbers

all: ergogen

install:
	@echo "Installing ergogen..."
	npm install

ergogen: ./ergogen/config.yaml
	@echo "Clean up ergogen..."
	rm -rf ./ergogen/output
	@echo "Running ergogen..."
	npx ergogen ./ergogen -o ./ergogen/output
	@echo "Post-processing..."
	sed -i 's/page A3/page A4/' ./ergogen/output/pcbs/risha.kicad_pcb

pcbs: ergogen
	cp -i ./ergogen/output/pcbs/risha.kicad_pcb ./risha.kicad_pcb

gerbers: substrate_left.kicad_pcb
	@echo "Cleaning up old gerbers..."
	rm -rf prod
	mkdir -p prod
	touch prod/.gitignore
	@echo "Generating gerbers..."
	mkdir -p prod/
	kicad-cli pcb export gerbers risha.kicad_pcb -o prod/
	@echo "Generating drill files..."
	kicad-cli pcb export drill risha.kicad_pcb -o prod/
	@echo "Compressing gerbers..."
	rm prod/risha.zip
	zip -jr prod/risha.zip prod/
