all: output/pcbs/risha_pcb.kicad_pcb \
	output/pcbs/risha_pcb_front.jpg \
	output/pcbs/risha_pcb_back.jpg \
	img/risha_pcb_front_small.jpg

output/pcbs/risha_pcb.kicad_pcb: risha.yaml
	npm run gen

output/pcbs/risha_pcb_front.jpg: output/pcbs/risha_pcb.kicad_pcb 
	pcbdraw plot \
		--side front \
		--style gatema-green \
		$< $@
	mkdir -p img 
	cp $@ img/$(notdir $@)

output/pcbs/risha_pcb_back.jpg: output/pcbs/risha_pcb.kicad_pcb
	pcbdraw plot \
		--side back \
		--style gatema-green \
		$< $@
	mkdir -p img 
	cp $@ img/$(notdir $@)

img/risha_pcb_front_small.jpg: output/pcbs/risha_pcb_front.jpg
	mkdir -p img
	convert $< -resize 25% $@

# output/pcbs/risha_pcb_front.svg: output/pcbs/risha_pcb.kicad_pcb 
# 	kicad-cli pcb export svg -l '*' -o $@ $<

# output/pcbs/risha_pcb_front.pdf: output/pcbs/risha_pcb.kicad_pcb 
# 	kicad-cli pcb export pdf -l '*' -o $@ $<

clean:
	rm -rf output/pcbs/risha_pcb.kicad_pcb \
		img/risha_pcb_front.jpg \
		img/risha_pcb_back.jpg \
		output/pcbs/risha_pcb_front.jpg \
		output/pcbs/risha_pcb_back.jpg \
		img/risha_pcb_front_small.jpg
