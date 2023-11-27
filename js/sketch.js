//////////////////////////
/* EDIT VARIABLES BELOW */
const CCSLIDER1 = 0;
const CCSLIDER2 = 0;
const CCSLIDER3 = 0;
const CCSLIDER4 = 0;
const CCSLIDER5 = 0;
const CCSLIDER6 = 0;
const CCSLIDER7 = 0;
const CCSLIDER8 = 0;
const CCSLIDER9 = 0;
let myController;
let fillColour;
let r, g, b, a;
//////////////////////////
// built in P5 function gets called at the beginning
function setup() {
    createCanvas(innerWidth, innerHeight);
    background(0);
    WebMidi
        .enable()
        .then(onEnabled)
        .catch(err => alert(err));
}
// gets called by MIDI library once MIDI enabled
function onEnabled() {
    // Display available MIDI input devices
    if (WebMidi.inputs.length < 1) {
        console.log("No device detected.");
    } else {
        WebMidi.inputs.forEach((device, index) => {
            console.log(`${index}: ${device.name}`);
        });
    }
    myController = WebMidi.inputs[0];
    myController.channels[1].addListener("noteon", noteOn);
    myController.channels[1].addListener("controlchange", allCC);

}
// gets called when a MIDI note its intercepted 
function noteOn(e) {
    // console.log(e.note.name, e.note.accidental || null, e.note.octave);
    let pos = returnXY(e.note.name, e.note.accidental || '', e.note.octave);
    // console.log(pos)
    let hSpace = width / 16;
    let vSpace = height / 16;
    drawNote(pos.x * width + hSpace, pos.y * height + vSpace);
}
// gets called when a MIDI control change message is intercepted
function allCC(e) {
    console.log(e.controller.number);
    let ratio = e.data[2] / 127
    switch (e.controller.number) {
        case CCSLIDER1: 
            break;
        case CCSLIDER2: 
            break;
        case CCSLIDER3: 
            break;
        case CCSLIDER4: 
            break;
        case CCSLIDER5: 
            break;
        case CCSLIDER6: 
            break;
        case CCSLIDER7: 
            break;
        case CCSLIDER8: 
            break;
        case CCSLIDER9:
            break;
    }
}
// compose RGBA colour from variables r, g, b, a
function calcColour() {
    fillColour = color('rgba(' + r + ',' + g + ',' + b + ',' + a + ')')
}
// gets triggered when the space bar is pressed
function keyPressed(){
    if(key == ' '){
        drawNote(random(width), random(height))
    }
}
//////////////////////////////
//////////////////////////////
/* EDIT DRAWING FUNCTIONS BELOW */
//////////////////////////////
//////////////////////////////
function drawNote(x, y) {    
}
function draw() {

}
