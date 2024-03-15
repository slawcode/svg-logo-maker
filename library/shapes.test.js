// Example test provided in README challenge instructions
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// Importing Shapes class from ./library/shapes.js
const { Circle, Triangle, Square} = require('./shapes');

// Circle shape test
describe('Circle test', () => {
    test('test circle renders correctly' () => {
        const shape = new Circle(),
        shape.setColour =('blue'),
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="115" r="80" fill="${this.shapeColour}"/>
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColour}">${this.text}</text></svg>`),
    });
});

// Triangle shape test
describe('Triangle test', () => {
    test('test circle renders correctly' () => {
        const shape = new Triangle(),
        Triangle.setColour =('blue'),
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColour}"/><text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColour}">${this.text}</text></svg>`),
    });
});

// Square shape test
describe('Square test', () => {
    test('test circle renders correctly' () => {
        const shape = new Square(),
        shape.setColour =('blue'),
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="73" y="40" width="160" height="160" fill="${this.shapeColour}"/><text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColour}">${this.text}</text></svg>`),
    });
});
