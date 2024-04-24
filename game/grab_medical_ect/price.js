images.requestScreenCapture(false);
sleep(500);
var img = captureScreen();
let text = ocr(img, [490, 580, 120, 50]);
log(text);


