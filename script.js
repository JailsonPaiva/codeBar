import quagga  from './quagga.min.js';

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
    const context = canvas.getContext("2d")

    canvas.height = video.videoHeight
    canvas.width = video.videoWidth
    context.drawImage(video, 0, 0)
})


quagga.init({
    inputStream : {
        name : "Live",
        type : "LiveStream",
        target: document.querySelector('video')    // Or '#yourElement' (optional)
    },
    decoder : {
        readers : ["code_128_reader"]
    }
    }, function(err) {
        if (err) {
            console.log(err);
            return
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
    }
);
