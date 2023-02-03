# drawing-shapes

getShapeFunc() is used to determine what shape is to be drawn (rectangle or triangle). It gets called from one of four functions: drawRect10, drawRect20, drawTri10, or drawTri20, each of which provides a displacement parameter.

drawRect is a function that draws a rectangle given a width, height, and displacement. This function gets called from getShapeFunc().

drawTriangle is a function that draws a triangle given a height and displacement. This function gets called from getShapeFunc().

drawRect10, drawRect20, drawTri10, or drawTri20 is called to begin the drawing process by passing the height and width parameters through to the above functions.



