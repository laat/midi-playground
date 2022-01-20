const btn = document.createElement("button");
btn.textContent = "Send";
document.body.appendChild(btn);

const midiAccess = await navigator.requestMIDIAccess();
const output = midiAccess.outputs.values().next().value;

btn.addEventListener("mousedown", () => {
  var noteOnMessage = [0x90, 60, 0x7f]; // note on, middle C, full velocity
  output.send(noteOnMessage); // sends the message.
});
btn.addEventListener("mouseup", () => {
  var noteOnMessage = [0x80, 60, 0x0]; // note on, middle C, full velocity
  output.send(noteOnMessage); // sends the message.
});
