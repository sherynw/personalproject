let cam;

function setup() {
  createCanvas(640, 480);
  cam = createCapture(VIDEO);
  cam.size(640, 480);
  cam.hide(); // Hide the HTML video element
}

function draw() {
  background(0);
  image(cam, 0, 0);

  // Apply a filter (example: grayscale)
  filter(GRAY);
  
  // Other options: THRESHOLD, INVERT, POSTERIZE, BLUR, ERODE, DILATE
}