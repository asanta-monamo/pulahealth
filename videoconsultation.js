let mediaStream = null;

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startConsultation');
    const videoContainer = document.getElementById('video-container');
    const video = document.getElementById('video');

    startButton.addEventListener('click', function() {
        videoContainer.style.display = 'block';

        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function(stream) {
                    video.srcObject = stream;
                    mediaStream = stream; 
                    startButton.textContent = "Stop Video Consultation"; 
                })
                .catch(function(error) {
                    console.error("Error accessing camera: ", error);
                    alert("Unable to access your camera. Please check permissions and try again.");
                });
        } else {
            alert("getUserMedia is not supported by your browser.");
        }
    });

    startButton.addEventListener('dblclick', function() {
        if (mediaStream) {
            mediaStream.getTracks().forEach(track => track.stop());
            video.srcObject = null;
            videoContainer.style.display = 'none';
            startButton.textContent = "Start Video Consultation"; 
        }
    });
});

