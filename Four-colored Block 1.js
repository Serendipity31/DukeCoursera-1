//Four-colored Block 1
//Turns quadrants of square into red, green, blue, and magenta (clock-wise from upper left)

var image = new SimpleImage(200,200);

for (var pixel of image.values()) {
    if (pixel.getY() > 100) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(255);
    }
    
    if (pixel.getX() <= 100) {
        pixel.setRed(255);
    }
    
    if (pixel.getX() > 100) {
        if (pixel.getY() <= 100) {
            pixel.setRed(0);
        pixel.setGreen(255);
        pixel.setBlue(0);
        }
    }
    
 }

 print(image);