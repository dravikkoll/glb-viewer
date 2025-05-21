// viewer.js
// You can add JS hooks here if you want to respond to model events,
// e.g., change the camera angle on button clicks, toggle auto-rotate, etc.

const modelViewer = document.querySelector('model-viewer');
const arButton = document.getElementById('external-ar-button');

// Wait for the model-viewer to load
modelViewer.addEventListener('load', () => {
  console.log('Model Viewer Loaded');
  console.log('AR Supported:', modelViewer.canActivateAR); // Debug log

  // Check if AR is supported
  if (modelViewer.canActivateAR) {
    arButton.style.display = 'block'; // Show the button if AR is supported
  } else {
    arButton.style.display = 'none'; // Hide the button if AR is not supported
    console.warn('AR is not supported on this device or browser.');
  }
});

arButton.addEventListener('click', async () => {
  try {
    console.log('Attempting to activate AR...');
    await modelViewer.activateAR(); // Activate AR mode
    console.log('AR activated successfully');
  } catch (error) {
    console.error('Error activating AR:', error);
    alert('AR mode is not supported on this device or browser.');
  }
});
