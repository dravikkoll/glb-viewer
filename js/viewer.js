// viewer.js
// You can add JS hooks here if you want to respond to model events,
// e.g., change the camera angle on button clicks, toggle auto-rotate, etc.

const modelViewer = document.querySelector('model-viewer');
const arButton = document.getElementById('external-ar-button');

// Function to activate AR
const viewInAR = async (modelUrl) => {
  try {
    console.log('Attempting to activate AR...');
    modelViewer.src = modelUrl; // Set the model URL dynamically
    await modelViewer.activateAR(); // Activate AR mode
    console.log('AR activated successfully');
  } catch (error) {
    console.error('Error activating AR:', error);
    alert('AR mode is not supported on this device or browser.');
  }
};

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

// Add click event listener to the AR button
arButton.addEventListener('click', () => {
  const modelUrl = modelViewer.getAttribute('src'); // Get the current model URL
  viewInAR(modelUrl); // Trigger AR functionality
});
