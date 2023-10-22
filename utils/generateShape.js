const {Circle, Triangle, Square} = require('../lib/shapes.js');
const Characters = require('../lib/text.js');
// const Triangle = require('../lib/shapes');
// const Square = require('../lib/shapes');



function generateSVG(data) {
    // Call whatever functions are needed to generate the text and shape svg code
    // console.log(data.shape);

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

    // console.log(data.text);
    // console.log(data.textColor);


    let characters = new Characters(data.text, data.textColor, data.shape);
    let innerText = characters.render();

    console.log(innerText);

    let text = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    
    ${shapeText} 

    ${innerText}
    
    </svg>`;

    // console.log(text);

    return text;
}

module.exports = generateSVG;
//