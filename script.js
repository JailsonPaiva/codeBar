const flipButton = document.getElementById('flip-button')
const video = document.querySelector('video');
let front = false;

flipButton.addEventListener('click', () => {
    front = !front;
    console.log('camera mudada')
})

const constraints = { video: { facingMode: "environment",
width: 350, height: 350,} };

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
    console.log(mediaStream);
    video.srcObject  = mediaStream;
    video.play();
//     video.onloadedmetadata = function(e) {
//   };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.

const camera = document.querySelector("#camera")

camera.addEventListener("click", () => {
    const canvas = document.querySelector("#canvas")

    canvas.height = "200px"
    canvas.width = "200px"
    const context = canvas.getContext("2d")
    context.drawImage(video, 0, 0)
})
