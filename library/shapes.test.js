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
        Shapes.setColour =('blue'),
        expect(Shapes.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue" />
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">EKO</text>')),
    });
});

// Triangle shape test
describe('Triangle test', () => {
    test('test circle renders correctly' () => {
        const Shapes = new Circle(),
        Shapes.setColour =('blue'),
        expect(Shapes.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue>')),
    });
});

// Square shape test
describe('Square test', () => {
    test('test circle renders correctly' () => {
        const Shapes = new Circle(),
        Shapes.setColour =('blue'),
        expect(Shapes.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="pink">')),
    });
});
