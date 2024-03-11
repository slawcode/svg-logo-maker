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
    constructor(text, textColour, shapeColour )
}

// Triangle class inherits properties defined in Shapes class
class Triangle extends Shapes {
    constructor(text, textColour, shapeColour)
}

// Square class inherits properties defined in Shapes class
class Square extends Shapes {
    constructor(text, textColour, shapeColour)
}
module.exports = Shapes;