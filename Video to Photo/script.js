const videoInput = document.getElementById('video-input');
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureBtn = document.getElementById('capture-btn');
const ctx = canvas.getContext('2d');

videoInput.addEventListener('change', () => {
    const file = videoInput.files[0];
    const url = URL.createObjectURL(file);
    video.src = url;
    video.play();
});

captureBtn.addEventListener('click', () => {
    const scaleFactor = 2; // Increase this value for larger images
    canvas.width = video.videoWidth * scaleFactor;
    canvas.height = video.videoHeight * scaleFactor;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imgData = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'photo.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});