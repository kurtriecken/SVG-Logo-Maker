const {Shape, Circle, Triangle, Square} = require('./shapes.js');

describe('Shape', () => {
    describe('Instantiate', () => {
        it('should be an instance of Shape class', () => {
            const shape = new Shape();
            expect(shape).toBeInstanceOf(Shape);
        });
    });

    describe('Render', () => {
        it('should return an empty string', () => {
            const shape = new Shape();
            expect(shape.render()).toBe('');
        });
    });
});

describe('Circle', () => {
    describe('Instantiate', () => {
        it('should be an instance of Circle class', () => {
            const circle = new Circle();
            expect(circle).toBeInstanceOf(Circle);
        });
    });
    
    describe('Color', () => {
        it('should track the input color', () => {
            const circle = new Circle('blue');
            expect(circle.color).toBe('blue');
        });
    });

    describe('Render', () => {
        it('should return the render string', () => {
            const circle = new Circle('blue');
            expect(circle.render()).toBe('<circle cx="50%" cy="50%" r="75" fill="blue"/>')
        });
    });
});

describe('Triangle', () => {
    describe('Instantiate', () => {
        it('should be an instance of Triangle class', () => {
            const triangle = new Triangle();
            expect(triangle).toBeInstanceOf(Triangle);
        });
    });
    
    describe('Color', () => {
        it('should track the input color', () => {
            const triangle = new Triangle('blue');
            expect(triangle.color).toBe('blue');
        });
    });

    describe('Render', () => {
        it('should return the render string', () => {
            const triangle = new Triangle('blue');
            expect(triangle.render()).toBe('<polygon points="75,175 150,25 225,175" fill="blue"/>')
        });
    });
});

describe('Square', () => {
    describe('Instantiate', () => {
        it('should be an instance of Square class', () => {
            const square = new Square();
            expect(square).toBeInstanceOf(Square);
        });
    });
    
    describe('Color', () => {
        it('should track the input color', () => {
            const square = new Square('blue');
            expect(square.color).toBe('blue');
        });
    });

    describe('Render', () => {
        it('should return the render string', () => {
            const square = new Square('blue');
            expect(square.render()).toBe('<rect x="25%" y="25" width="150" height="150" fill="blue"/>')
        });
    });
});

// describe('BlogPost', () => {
//     // TODO: Add a comment describing this test.
//     describe('Instantiate', () => {
//       it('should be an instance of BlogPost class', () => {
//         const blogpost = new BlogPost();
  
//         expect(blogpost).toBeInstanceOf(BlogPost);
//       });
//     });
