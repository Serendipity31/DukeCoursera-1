//First javascript code
// Within Duke JS environment, changes chapel image to black and whiteSpace
//http://www.dukelearntoprogram.com/course1/example/index.php

var image = new SimpleImage("chapel.png");
for (var pixel of image.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setBlue(avg);
    pixel.setGreen(avg);
}
print(image);