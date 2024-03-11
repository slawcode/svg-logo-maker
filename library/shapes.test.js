// Example test provided in README challenge instructions
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// Importing Shapes class from ./library/shapes.js
const Shapes = require('./library/shapes');

// Circle shape test
describe('Circle test', () => {
    test('test circle renders correctly' () => {
        const Shapes = new Circle(),
        shapes.setColour =('blue'),
        expect(shapes.render()).toEqual('<circle cx="150" cy="115" r="80" fill="#ca00ca">')),
    });
});

// Triangle shape test
describe('Triangle test', () => {
    test('test circle renders correctly' () => {
        const Shapes = new Circle(),
        shapes.setColour =('blue'),
        expect(shapes.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue>')),
    });
});

// Square shape test
describe('Square test', () => {
    test('test circle renders correctly' () => {
        const Shapes = new Circle(),
        shapes.setColour =('blue'),
        expect(shapes.render()).toEqual('<>')),
    });
});
