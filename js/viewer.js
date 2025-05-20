// viewer.js
// You can add JS hooks here if you want to respond to model events,
// e.g., change the camera angle on button clicks, toggle auto-rotate, etc.

const model = document.querySelector('model-viewer');
const externalArButton = document.getElementById('external-ar-button');

model.addEventListener('load', () => {
    console.log('Model has loaded successfully');
});

externalArButton.addEventListener('click', async () => {
    try {
        await model.activateAR();
    } catch (error) {
        console.error('AR activation failed:', error);
        alert('AR mode failed to start. Please make sure your device supports AR and you have granted the necessary permissions.');
    }
});

// Check if AR is available
model.addEventListener('ar-status', (event) => {
    externalArButton.style.display = event.detail.supported ? 'block' : 'none';
});

// Hide button while in AR mode
model.addEventListener('ar-tracking', (event) => {
    if (event.detail.tracking) {
        externalArButton.style.display = 'none';
    }
});

// Remove auto-rotate interval as it might interfere with AR experience
// setInterval(() => {
//   model.autoRotate = !model.autoRotate;
// }, 5000);
