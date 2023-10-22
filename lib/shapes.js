// class ForumItem {
//     constructor(authorName, text, createdOn) {
//       this.authorName = authorName;
//       this.text = text;
//       this.createdOn = createdOn;
//     }
  
//     printMetaData() {
//       return `Created by ${this.authorName} on ${this.createdOn}`;
//     }
//   }


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
        return `<circle cx="50%" cy="50%" r="75" fill="${this.color}" stroke="black" stroke-width="2"/>`
    }
};

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<polygon points="75,175 150,25 225,175" fill="${this.color}" stroke-width="2" stroke="black"/>`
    }
};

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<rect x="25%" y="25" width="150" height="150" stroke="black" fill="${this.color}" stroke-width="2"/>`
    }
};
//   module.exports = ForumItem;