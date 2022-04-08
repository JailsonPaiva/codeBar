const flipButton = document.getElementById('flip-button')
const video = document.querySelector('#video');
let front = false;

flipButton.addEventListener('click', () => {
    front = !front;
    console.log('camera mudada')
})

const constraints = { video: { facingMode: (front? "user" : "environment"),
width: 350, height: 350, video: true } };

navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
    console.log(stream);
    video.srcObject = stream;
    video.onloadedmetadata = function(e) {
        video.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.


