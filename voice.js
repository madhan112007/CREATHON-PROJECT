let element = document.getElementById("voice");
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();
recognition.lang = "en-GB";
recognition.continuous = true;

// Start recognition on click
document.onclick = () => {
  recognition.start();
};

// Handle results
recognition.onresult = (event) => {
  // Use the latest result only
  const result = event.results[event.results.length - 1][0].transcript;
  element.innerText = result; // Replace previous text with the new result
};

// Handle errors
recognition.onerror = (event) => {
  console.error("Speech recognition error", event.error);
};