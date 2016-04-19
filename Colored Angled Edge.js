//Colored Angled Edge
//Takes left edge of red square and turns border of 20 pixels black, with diagonals on top and bottom
var image = new SimpleImage(200,200);

for (var pixel of image.values()) {
    pixel.setRed(255);
    pixel.setGreen(0);
    pixel.setBlue(0);
}

 for (var pixel of image.values()) {
    if (pixel.getX() <= 20) {
        if (pixel.getY() <= 20) {
            if (pixel.getX() < pixel.getY()) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
            }
        }
        
        if (pixel.getY() > 20) {
            if (pixel.getY() <= 180) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
            }
        }
        
        if (pixel.getY() > 180) {
            if (pixel.getX() < 200 - pixel.getY()) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
            }
        }
    }  
    
}

print(image);