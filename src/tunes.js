export const stranger_tune = `setcps(140/60/4)

samples('github:algorave-dave/samples')
samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
samples('https://raw.githubusercontent.com/Mittans/tidal-drum-machines/main/machines/tidal-drum-machines.json')

const gain_patterns = [
  "2",
  "{0.75 2.5}*4",
  "{0.75 2.5!9 0.75 2.5!5 0.75 2.5 0.75 2.5!7 0.75 2.5!3 <2.5 0.75> 2.5}%16",
]

const drum_structure = [
  "~",
  "x*4",
  "{x ~!9 x ~!5 x ~ x ~!7 x ~!3 < ~ x > ~}%16",
]

const basslines = [
  "[[eb1, eb2]!16 [f2, f1]!16 [g2, g1]!16 [f2, f1]!8 [bb2, bb1]!8]/8",
  "[[eb1, eb2]!16 [bb2, bb1]!16 [g2, g1]!16 [f2, f1]!4 [bb1, bb2]!4 [eb1, eb2]!4 [f1, f2]!4]/8"
]

const arpeggiator1 = [
   "{e4 b3 g4 e5 b4 g5 e4 b4}%16",      
  "{f4 c4 a4 f5 c5 a5 f4 c5}%16",      
  "{g4 d4 b4 g5 d5 b5 g4 d5}%16",      
  "{a4 e4 c5 a5 e5 c6 a4 e5 c5 a4}%16" 
]


const arpeggiator2 = [
  "{d4 bb3 eb3 d3 bb2 eb2}%16",
  "{c4 bb3 f3 c3 bb2 f2}%16",
  "{d4 bb3 g3 d3 bb2 g2}%16",
  "{d5 bb4 g4 d4 bb3 g3 d4 bb3 eb3 d3 bb2 eb2}%16",
]

const pattern = 0
const bass = 0


bassline:
note(pick(basslines, bass))
.sound("supersaw")
.postgain(2)
.room(0.6)
.lpf(700)
.room(0.4)
.postgain(pick(gain_patterns, pattern))


main_arp:
note(pick(arpeggiator1, "<0 1 2 3>/2"))
.sound("supersaw")
.lpf(300)
.adsr("0:0:.5:.1")
.room(0.6)
.lpenv(3.3)
.postgain(pick(gain_patterns, pattern))


<p1_Radio>drums:
stack(
  s("tech:5")
  .postgain(6)
  .pcurve(2)
  .pdec(1)
  .struct(pick(drum_structure, pattern)),

  s("sh").struct("[x!3 ~!2 x!10 ~]")
  .postgain(0.5).lpf(7000)
  .bank("RolandTR808")
  .speed(0.8).jux(rev)
  .room(sine.range(0.1,0.4))
  .gain(0.6),

  s("{~ ~ rim ~ cp ~ rim cp ~!2 rim ~ cp ~ < rim ~ >!2}%8 *2")
  .bank("[KorgDDM110, OberheimDmx]")
  .speed(1.2)
  .postgain(.25),
)


<p1_Radio>drums2:
stack(
  s("[~ hh]*4").bank("RolandTR808").room(0.3).speed(0.75).gain(1.2),

  s("hh").struct("x*16").bank("RolandTR808")
  .gain(0.6)
  .jux(rev)
  .room(sine.range(0.1,0.4))
  .postgain(0.5),

  s("[psr:[2|5|6|7|8|9|12|24|25]*16]?0.1")
  .gain(0.1)
  .postgain(pick(gain_patterns, pattern))
  .hpf(1000)
  .speed(0.5)
  .rarely(jux(rev)),
)


guitar:
note("<eb4 f4 g4 bb4 eb5 g5 bb5 f5 eb5 g4>/8")
.sound("guitar")
.room(0.5)
.lpf(1500)
.adsr("0.02:0.2:0.6:0.2")
.speed("<1 0.95 1.05>")
.gain(1.3)
.chop(16)
.jux(rev)
.postgain(pick(gain_patterns, pattern))
// @version 1.2

// Remixed and reproduced from Algorave Dave’s original patch:
// https://www.youtube.com/watch?v=ZCcpWzhekEY
// all(x => x.gain(mouseX.range(0,1)))
// all(x => x.log())`;