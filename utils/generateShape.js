const {Circle, Triangle, Square} = require('../lib/shapes.js');
const Characters = require('../lib/text.js');
// const Triangle = require('../lib/shapes');
// const Square = require('../lib/shapes');



function generateSVG(data) {

    // Variables and function call for shape string generation
    let shapeText = '';
    let shape;

    switch (data.shape) {
        case 'Triangle':
            shape = new Triangle(data.shapeColor);
            shapeText = shape.render();            
            break;
        case 'Circle':
            shape = new Circle(data.shapeColor);
            shapeText = shape.render();
            break;
        case 'Square':
            shape = new Square(data.shapeColor);
            shapeText = shape.render();
            break;
    }

    // Variables and function call for text string generation
    let characters = new Characters(data.text, data.textColor, data.shape);
    let innerText = characters.render();

    // Shape and text strings are implanted into prototype string using template literals and returned
    // Non-indented formatting is kept for clarity of generated SVG code
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    
${shapeText} 
    
${innerText}
        
</svg>`;;
}

module.exports = generateSVG;
