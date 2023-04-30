all: output/pcbs/mosaic_pcb.kicad_pcb \
	output/pcbs/mosaic_pcb_front.jpg \
	output/pcbs/mosaic_pcb_back.jpg \
	img/mosaic_pcb_front_small.jpg

output/pcbs/mosaic_pcb.kicad_pcb: mosaic.yaml
	npm run gen

output/pcbs/mosaic_pcb_front.jpg: output/pcbs/mosaic_pcb.kicad_pcb 
	pcbdraw plot \
		--side front \
		--style gatema-green \
		$< $@
	mkdir -p img 
	cp $@ img/$(notdir $@)

output/pcbs/mosaic_pcb_back.jpg: output/pcbs/mosaic_pcb.kicad_pcb
	pcbdraw plot \
		--side back \
		--style gatema-green \
		$< $@
	mkdir -p img 
	cp $@ img/$(notdir $@)

img/mosaic_pcb_front_small.jpg: output/pcbs/mosaic_pcb_front.jpg
	mkdir -p img
	convert $< -resize 25% $@

# output/pcbs/mosaic_pcb_front.svg: output/pcbs/mosaic_pcb.kicad_pcb 
# 	kicad-cli pcb export svg -l '*' -o $@ $<

# output/pcbs/mosaic_pcb_front.pdf: output/pcbs/mosaic_pcb.kicad_pcb 
# 	kicad-cli pcb export pdf -l '*' -o $@ $<

clean:
	rm -rf output/pcbs/mosaic_pcb.kicad_pcb \
		img/mosaic_pcb_front.jpg \
		img/mosaic_pcb_back.jpg \
		output/pcbs/mosaic_pcb_front.jpg \
		output/pcbs/mosaic_pcb_back.jpg \
		img/mosaic_pcb_front_small.jpg
