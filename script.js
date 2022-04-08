const flipButton = document.getElementById('flip-button')
let front = false;

flipButton.addEventListener('click', () => {
    front = !front;
    console.log('camera mudada')
})

const constraints = { video: { facingMode: (front? "user" : "environment"),
width: { max: 720},
height: {max: 350 },} };

navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
    console.log(stream);
    const video = document.querySelector('#video');
    video.srcObject = stream;
    video.onloadedmetadata = function(e) {
        video.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.


