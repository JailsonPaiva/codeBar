document.getElementById('flip-button').onclick = function() { front = !front; };
let front = false;

var constraints = { video: { facingMode: (front? "user" : "environment"),
width: { max: 720},
height: {max: 350 } } };

navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
    console.log(stream);
    const video = document.querySelector('#video');
    video.srcObject = stream;
    video.play();
//     video.onloadedmetadata = function(e) {
//   };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.


