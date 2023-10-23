class Shape {
    constructor(color) {
        this.color = color;
    }

    render() {
        return '';
    }
};

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<circle cx="50%" cy="50%" r="75" fill="${this.color}"/>`
    }
};

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<polygon points="75,175 150,25 225,175" fill="${this.color}"/>`
    }
};

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<rect x="25%" y="25" width="150" height="150" fill="${this.color}"/>`
    }
};
module.exports = {
    Shape: Shape,
    Square: Square, 
    Circle: Circle, 
    Triangle: Triangle
};