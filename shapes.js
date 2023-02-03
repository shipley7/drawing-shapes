//Function which returns specified shape function. 'RECT' for rectangle 'TRI' for triangle. 
function getShapeFunc(shape) { 
    if (shape === "RECT") 
        return drawRect; 
    else 
        return drawTriangle; 
} 
 
//Bind rectangles to their selected displacements 
const drawRect10 = (width, height) => getShapeFunc('RECT')(width, height, 10); 
const drawRect20 = (width, height) => getShapeFunc('RECT')(width, height, 20); 
 
//Draws a rectangle 
const drawRect = function (width, height, displacement) { 
        let rectangle = ""; 
 
        for (let h = 0; h < height; h++) { 
            // create new line 
            let line = "\n"; 
 
            // create offset 
            let offset = ""; 
            for (let o = 0; o < displacement; o++) 
                offset += " "; 
            //append it to the new line 
            line += offset; 
 
            //draw number of stars in that line equal to the width 
            for (let w = 0; w < width; w++) 
                line += "*"; 
 
            //append the line to the rectangle 
            rectangle += line; 
 
        } 
        console.log(rectangle); 
} 
//Bind triangles to their selected displacements 
const drawTri10 = (height) => getShapeFunc('TRI')(height, 10); 
const drawTri20 = (height) => getShapeFunc('TRI')(height, 20); 
 
//Draws triangles 
const drawTriangle = function (height, displacement) { 
    let triangle = ""; 
 
    //for each line 
    for (let h = 0; h < height; h++) { 
        //create a new line 
        let line = "\n"; 
 
        //create the offset. Note addition of displacement 
        let offset = ""; 
        for (let offLength = height - (h + 1) + displacement; offLength > 0; offLength--) 
            offset += " "; 
        //append the created offset to the line 
        line += offset; 
 
        // draw a number of stars equals to the line number 
        for (let s = 0; s < h + 1; s++) 
            line += "*"; 
 
        //append the new line to the triangle 
        triangle += line; 
    } 
 
    console.log(triangle); 
} 
 
//Print out. 
console.log('10 displacement rectangles:\n'); 
drawRect10(7, 10); 
drawRect10(10, 20); 
console.log('\n20 displacement rectangles:\n'); 
drawRect20(7, 10); 
drawRect20(10, 20); 
console.log('\n10 displacement triangles:\n'); 
drawTri10(10); 
drawTri10(5); 
console.log('\n20 displacement triangles:\n'); 
drawTri20(10); 
drawTri20(5); 