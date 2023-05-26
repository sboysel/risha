function lets_pico_mx_top_plate_extrude_8_outline_fn(){
    return new CSG.Path2D([[139.875,-190.5],[139.875,-100.0125]]).appendArc([142.875,-97.0125],{"radius":3,"clockwise":true,"large":false}).appendPoint([242.875,-97.0125]).appendArc([245.875,-100.0125],{"radius":3,"clockwise":true,"large":false}).appendPoint([245.875,-190.5]).appendArc([242.875,-193.5],{"radius":3,"clockwise":true,"large":false}).appendPoint([142.875,-193.5]).appendArc([139.875,-190.5],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[226.35,-187.975],[240.35,-187.975]]).appendPoint([240.35,-173.975]).appendPoint([226.35,-173.975]).appendPoint([226.35,-187.975]).close().innerToCAG()
.union(
    new CSG.Path2D([[207.3,-187.975],[221.3,-187.975]]).appendPoint([221.3,-173.975]).appendPoint([207.3,-173.975]).appendPoint([207.3,-187.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.6,-121.3],[235.6,-121.3]]).appendPoint([235.6,-107.3]).appendPoint([221.6,-107.3]).appendPoint([221.6,-121.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.6,-140.35],[235.6,-140.35]]).appendPoint([235.6,-126.35]).appendPoint([221.6,-126.35]).appendPoint([221.6,-140.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.6,-159.4],[235.6,-159.4]]).appendPoint([235.6,-145.4]).appendPoint([221.6,-145.4]).appendPoint([221.6,-159.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.55,-121.3],[216.55,-121.3]]).appendPoint([216.55,-107.3]).appendPoint([202.55,-107.3]).appendPoint([202.55,-121.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.55,-140.35],[216.55,-140.35]]).appendPoint([216.55,-126.35]).appendPoint([202.55,-126.35]).appendPoint([202.55,-140.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.55,-159.4],[216.55,-159.4]]).appendPoint([216.55,-145.4]).appendPoint([202.55,-145.4]).appendPoint([202.55,-159.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.5,-121.3],[197.5,-121.3]]).appendPoint([197.5,-107.3]).appendPoint([183.5,-107.3]).appendPoint([183.5,-121.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.5,-140.35],[197.5,-140.35]]).appendPoint([197.5,-126.35]).appendPoint([183.5,-126.35]).appendPoint([183.5,-140.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.5,-159.4],[197.5,-159.4]]).appendPoint([197.5,-145.4]).appendPoint([183.5,-145.4]).appendPoint([183.5,-159.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.45,-121.3],[178.45,-121.3]]).appendPoint([178.45,-107.3]).appendPoint([164.45,-107.3]).appendPoint([164.45,-121.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.45,-140.35],[178.45,-140.35]]).appendPoint([178.45,-126.35]).appendPoint([164.45,-126.35]).appendPoint([164.45,-140.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.45,-159.4],[178.45,-159.4]]).appendPoint([178.45,-145.4]).appendPoint([164.45,-145.4]).appendPoint([164.45,-159.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.4,-121.3],[159.4,-121.3]]).appendPoint([159.4,-107.3]).appendPoint([145.4,-107.3]).appendPoint([145.4,-121.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.4,-140.35],[159.4,-140.35]]).appendPoint([159.4,-126.35]).appendPoint([145.4,-126.35]).appendPoint([145.4,-140.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.4,-159.4],[159.4,-159.4]]).appendPoint([159.4,-145.4]).appendPoint([145.4,-145.4]).appendPoint([145.4,-159.4]).close().innerToCAG()
)).extrude({ offset: [0, 0, 8] });
}


function lets_pico_mx_top_plate_extrude_6_outline_fn(){
    return new CSG.Path2D([[139.875,-190.5],[139.875,-100.0125]]).appendArc([142.875,-97.0125],{"radius":3,"clockwise":true,"large":false}).appendPoint([242.875,-97.0125]).appendArc([245.875,-100.0125],{"radius":3,"clockwise":true,"large":false}).appendPoint([245.875,-190.5]).appendArc([242.875,-193.5],{"radius":3,"clockwise":true,"large":false}).appendPoint([142.875,-193.5]).appendArc([139.875,-190.5],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[226.35,-187.975],[240.35,-187.975]]).appendPoint([240.35,-173.975]).appendPoint([226.35,-173.975]).appendPoint([226.35,-187.975]).close().innerToCAG()
.union(
    new CSG.Path2D([[207.3,-187.975],[221.3,-187.975]]).appendPoint([221.3,-173.975]).appendPoint([207.3,-173.975]).appendPoint([207.3,-187.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.6,-121.3],[235.6,-121.3]]).appendPoint([235.6,-107.3]).appendPoint([221.6,-107.3]).appendPoint([221.6,-121.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.6,-140.35],[235.6,-140.35]]).appendPoint([235.6,-126.35]).appendPoint([221.6,-126.35]).appendPoint([221.6,-140.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.6,-159.4],[235.6,-159.4]]).appendPoint([235.6,-145.4]).appendPoint([221.6,-145.4]).appendPoint([221.6,-159.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.55,-121.3],[216.55,-121.3]]).appendPoint([216.55,-107.3]).appendPoint([202.55,-107.3]).appendPoint([202.55,-121.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.55,-140.35],[216.55,-140.35]]).appendPoint([216.55,-126.35]).appendPoint([202.55,-126.35]).appendPoint([202.55,-140.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.55,-159.4],[216.55,-159.4]]).appendPoint([216.55,-145.4]).appendPoint([202.55,-145.4]).appendPoint([202.55,-159.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.5,-121.3],[197.5,-121.3]]).appendPoint([197.5,-107.3]).appendPoint([183.5,-107.3]).appendPoint([183.5,-121.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.5,-140.35],[197.5,-140.35]]).appendPoint([197.5,-126.35]).appendPoint([183.5,-126.35]).appendPoint([183.5,-140.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.5,-159.4],[197.5,-159.4]]).appendPoint([197.5,-145.4]).appendPoint([183.5,-145.4]).appendPoint([183.5,-159.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.45,-121.3],[178.45,-121.3]]).appendPoint([178.45,-107.3]).appendPoint([164.45,-107.3]).appendPoint([164.45,-121.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.45,-140.35],[178.45,-140.35]]).appendPoint([178.45,-126.35]).appendPoint([164.45,-126.35]).appendPoint([164.45,-140.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.45,-159.4],[178.45,-159.4]]).appendPoint([178.45,-145.4]).appendPoint([164.45,-145.4]).appendPoint([164.45,-159.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.4,-121.3],[159.4,-121.3]]).appendPoint([159.4,-107.3]).appendPoint([145.4,-107.3]).appendPoint([145.4,-121.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.4,-140.35],[159.4,-140.35]]).appendPoint([159.4,-126.35]).appendPoint([145.4,-126.35]).appendPoint([145.4,-140.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.4,-159.4],[159.4,-159.4]]).appendPoint([159.4,-145.4]).appendPoint([145.4,-145.4]).appendPoint([145.4,-159.4]).close().innerToCAG()
)).extrude({ offset: [0, 0, 6] });
}




                function lets_pico_case_fn() {
                    

                // creating part 0 of case lets_pico
                let lets_pico__part_0 = lets_pico_mx_top_plate_extrude_8_outline_fn();

                // make sure that rotations are relative
                let lets_pico__part_0_bounds = lets_pico__part_0.getBounds();
                let lets_pico__part_0_x = lets_pico__part_0_bounds[0].x + (lets_pico__part_0_bounds[1].x - lets_pico__part_0_bounds[0].x) / 2
                let lets_pico__part_0_y = lets_pico__part_0_bounds[0].y + (lets_pico__part_0_bounds[1].y - lets_pico__part_0_bounds[0].y) / 2
                lets_pico__part_0 = translate([-lets_pico__part_0_x, -lets_pico__part_0_y, 0], lets_pico__part_0);
                lets_pico__part_0 = rotate([0,0,0], lets_pico__part_0);
                lets_pico__part_0 = translate([lets_pico__part_0_x, lets_pico__part_0_y, 0], lets_pico__part_0);

                lets_pico__part_0 = translate([0,0,0], lets_pico__part_0);
                let result = lets_pico__part_0;
                
            

                // creating part 1 of case lets_pico
                let lets_pico__part_1 = lets_pico_mx_top_plate_extrude_6_outline_fn();

                // make sure that rotations are relative
                let lets_pico__part_1_bounds = lets_pico__part_1.getBounds();
                let lets_pico__part_1_x = lets_pico__part_1_bounds[0].x + (lets_pico__part_1_bounds[1].x - lets_pico__part_1_bounds[0].x) / 2
                let lets_pico__part_1_y = lets_pico__part_1_bounds[0].y + (lets_pico__part_1_bounds[1].y - lets_pico__part_1_bounds[0].y) / 2
                lets_pico__part_1 = translate([-lets_pico__part_1_x, -lets_pico__part_1_y, 0], lets_pico__part_1);
                lets_pico__part_1 = rotate([0,0,0], lets_pico__part_1);
                lets_pico__part_1 = translate([lets_pico__part_1_x, lets_pico__part_1_y, 0], lets_pico__part_1);

                lets_pico__part_1 = translate([0,0,0], lets_pico__part_1);
                result = result.subtract(lets_pico__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return lets_pico_case_fn();
            }

        