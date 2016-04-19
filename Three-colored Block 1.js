//Three-colored Block 1
//Creates block with three colors occupying different shapes within square

// The key is to see it as overlapping shapes rather than as coordinates that need chaning.
// First, the whole square is red. Then a smaller square 'over' that (really within it) is turned to green.
// Then finally, the bottom third is overlain with blue.

var image = new SimpleImage(200,200);

for (var pixel of image.values()) {
    pixel.setRed(255);
    
    if (pixel.getY() > (200 / 3)) {
        if (pixel.getX() > (200 / 3)) {
            pixel.setRed(0);
            pixel.setGreen(255);
            pixel.setBlue(0);
        }
    }
    
    if (pixel.getY() > (2* (200 / 3))) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(255);
    }
}

 print(image);