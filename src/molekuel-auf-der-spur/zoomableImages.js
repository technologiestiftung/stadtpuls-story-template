/*
  We define a few unique classes that correspond to the css
  so we only hav to change them in one place
*/
const NOSCROLL_CLASS = `zoomable-image-open`;
const TRIGGER_CLASS = `zoomable-image-trigger`;
const CONTAINER_CLASS = `zoomable-image-container`;
const BACKDROP_CLASS = `zoomable-image-backdrop`;
const IMG_CLASS = `zoomable-image-img`;

// Grab all images that have the trigger class
const imagesToZoom = Array.from(document.getElementsByClassName(TRIGGER_CLASS));

// For each image, set the click handler that zooms on an image (see below onImageClick function)
imagesToZoom.forEach((img) => {
  img.addEventListener('click', (evt) => onImageClick(evt.target));
});

/**
 * Opens the given image in a fullscreen mode
 * @param {HTMLImageElement} img
 */
function onImageClick(img) {
  // Before anything, delete all remainings of old zoomed images
  clearZoomableImages();

  // Grap the src attribute of the original image
  const imgSrc = img.getAttribute('src');

  // Create a new container dv element to place our div
  const container = document.createElement('div');
  // Add the relevant class for the styles
  container.classList.add(CONTAINER_CLASS);
  // When it is clicked, we should clear the zoomed in images again
  container.addEventListener('click', clearZoomableImages);

  // Create a backdrop for the dark translucent background color
  const backdrop = document.createElement('div');
  // Add the relevant class for the styles
  backdrop.classList.add(BACKDROP_CLASS);

  // Create the new image shown inside the container
  const innerImg = document.createElement('img');
  // Add the relevant class for the styles
  innerImg.classList.add(IMG_CLASS);
  // Add the same src attribute as the original image
  innerImg.setAttribute('src', imgSrc);

  // Add the image in the container
  container.appendChild(innerImg);
  // Add the backdrop in the container
  container.appendChild(backdrop);
  // Add the no-scroll class to the body to disable scrolling when the zoom is active
  document.body.classList.add(NOSCROLL_CLASS);
  // Add the container to the end of the body
  document.body.appendChild(container);
}

function clearZoomableImages() {
  // Gather all the container elements in the document
  const containers = Array.from(
    document.getElementsByClassName(CONTAINER_CLASS)
  );
  // Delete each of the elements
  containers.forEach((container) => container.remove());
  // Remove the no-scroll class from the body that prevents scrolling
  document.body.classList.remove(NOSCROLL_CLASS);
}
