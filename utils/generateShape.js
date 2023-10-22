const {Circle, Triangle, Square} = require('../lib/shapes.js');
// const Triangle = require('../lib/shapes');
// const Square = require('../lib/shapes');



function generateSVG(data) {
    // Call whatever functions are needed to generate the text and shape svg code
    console.log(data.shape);

    let text = '';
    let shape;

    // if (data.shape == 'Triangle') {
    //     let shape = new Triangle(data.shapeColor);
    //     text = shape.render();
    // }
    // else if (data.shape == 'Circle') {
    //     let shape = new Circle(data.shapeColor);
    //     text = shape.render();
    // }
    // else {
    //     let shape = new Square(data.shapeColor);
    //     text = shape.render();
    // }

    switch (data.shape) {
        case 'Triangle':
            console.log('You picked Triangle!');

            shape = new Triangle(data.shapeColor);
            text = shape.render();            
            break;
        case 'Circle':
            console.log('You picked Circle!');
            shape = new Circle(data.shapeColor);
            text = shape.render();
            break;
        case 'Square':
            console.log('You picked Square!');

            shape = new Square(data.shapeColor);
            text = shape.render();
            break;
    }


    console.log(text);

    return data.shape;
}

module.exports = generateSVG;
//<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"> ${variables go in here} </svg>