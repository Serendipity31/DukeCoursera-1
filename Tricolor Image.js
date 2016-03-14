// Puts vertical colored bands over image

var image = new SimpleImage("chapel.png");
print(image);

for (var p of image.values()) {
    if (p.getX() <77) {
        p.setGreen(0);
        p.setBlue(0);
        p.setRed(255);
    }
    if (p.getX() >77 && p.getX() <= (77 *2 )) {
        p.setGreen(255);
        p.setBlue(0);
        p.setRed(0);
    }
    if (p.getX() > (77 * 2) && p.getX() <= (77 * 3)) {
        p.setGreen(0);
        p.setBlue(255);
        p.setRed(0);
    }
}
print(image);