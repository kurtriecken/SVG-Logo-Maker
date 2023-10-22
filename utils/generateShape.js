const {Circle, Triangle, Square} = require('../lib/shapes.js');
// const Triangle = require('../lib/shapes');
// const Square = require('../lib/shapes');



function generateSVG(data) {
    // Call whatever functions are needed to generate the text and shape svg code
    // console.log(data.shape);

    let shapeText = '';
    let shape;

    switch (data.shape) {
        case 'Triangle':
            console.log('You picked Triangle!');

            shape = new Triangle(data.shapeColor);
            shapeText = shape.render();            
            break;
        case 'Circle':
            console.log('You picked Circle!');
            shape = new Circle(data.shapeColor);
            shapeText = shape.render();
            break;
        case 'Square':
            console.log('You picked Square!');

            shape = new Square(data.shapeColor);
            shapeText = shape.render();
            break;
    }

    let text = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    
    ${shapeText} 
    
    </svg>`;

    // console.log(text);

    return text;
}

module.exports = generateSVG;
//