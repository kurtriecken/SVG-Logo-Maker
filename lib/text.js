class Characters {
    constructor(text, color, shape) {
        this.text = text.toUpperCase();
        this.color = color;
        this.shape = shape;
    }


    render() {
        // console.log(this.text);
        // console.log(this.color);
        let returnString = `<text x="50%" y="53%" text-anchor="middle" dominant-baseline="middle" style="color: ${this.color}; font-size: 3.7em; font-weight: bolder">${this.text}</text>`;

        if (this.shape == 'Triangle') {
            switch (this.text.length) {
                case 1:
                    returnString = `<text x="50%" y="67%" text-anchor="middle" dominant-baseline="middle" style="color: ${this.color}; font-size: 3.5em; font-weight: bolder">${this.text}</text>`
                    break;
                case 2:
                    returnString = `<text x="50%" y="68%" text-anchor="middle" dominant-baseline="middle" style="color: ${this.color}; font-size: 2.7em; font-weight: bolder">${this.text}</text>`
                    break;
                case 3:
                    returnString = `<text x="50%" y="78%" text-anchor="middle" dominant-baseline="middle" style="color: ${this.color}; font-size: 2.7em; font-weight: bolder">${this.text}</text>`
                    break;
            }
        }


        console.log(returnString);
        return returnString;
    }
}


module.exports = Characters;