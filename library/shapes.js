// Parent class Shapes created with constructor which initializes text, textColour and shapeColour values
class Shapes {
    constructor(text, textColour, shapeColour) {
    this.text = text;
    this.textColour = textColour;
    this.shapeColour = shapeColour;
   }
}

// Circle class inherits properties defined in Shapes class
class Circle extends Shapes {
    render() {
        return '<circle cx="150" cy="115" r="80" fill="${this.text}>fill="${this.color}fill="${this.color}';
    }
}

// Triangle class inherits properties defined in Shapes class
class Triangle extends Shapes {
    render() {
        return '<polygon points="150, 18 244, 182 56, 182" fill="${this.text}>fill="${this.color}fill="${this.color}';
    }
}

// Square class inherits properties defined in Shapes class
class Square extends Shapes {
    render() {
        return '<fill="${this.text}>fill="${this.color}fill="${this.color}';
    }
}

// Exports classes 
module.exports = Shapes;