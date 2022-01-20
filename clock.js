const midiAccess = await navigator.requestMIDIAccess();
const input = midiAccess.inputs.values().next().value;
const state = document.createElement("p");
document.body.appendChild(state);
const timerEvents = {
  CLOCK: 0xf8,
  START: 0xfa,
  CONTINUE: 0xfb,
  STOP: 0xfc,
};
input.onmidimessage = (event) => {
  const data = event.data[0];
  switch (data) {
    case timerEvents.START: {
      state.innerText = "started";
      return;
    }
    case timerEvents.STOP: {
      state.innerText = "stopped";
      return;
    }
    case timerEvents.CONTINUE: {
      state.innerText = "continued";
      return;
    }
    case timerEvents.CLOCK: {
      console.log("tick");
      return;
    }
    default:
      return;
  }
};
