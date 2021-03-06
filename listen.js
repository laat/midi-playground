const midiAccess = await navigator.requestMIDIAccess();
const input = midiAccess.inputs.values().next().value;
input.onmidimessage = (event) => {
  var str =
    "MIDI message received at timestamp " +
    event.timeStamp +
    "[" +
    event.data.length +
    " bytes]: ";
  for (var i = 0; i < event.data.length; i++) {
    str += "0x" + event.data[i].toString(16) + " ";
  }
  console.log(str);
};
