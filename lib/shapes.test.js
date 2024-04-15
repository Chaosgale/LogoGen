const { Circle, Square, Triangle } = require('./shapes');

// Circle Shape
describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new Circle();
      let color = ('red')
      shape.colorChoice(color);
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}"/>`);
    });
  });
  // Square Shape
  describe('Square', () => {
      test('renders correctly', () => {
        const shape = new Square();
        let color =('blue')
        shape.colorChoice(color);
        expect(shape.render()).toEqual(`<rect x="75"  y="50" height="150" width="150" fill="${color}"/>`);
      });
    });
  // Triangle Shape
  describe('Triangle', () => {
      test('renders correctly', () => {
        const shape = new Triangle();
        let color =('pink')
        shape.colorChoice(color);
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}"/>`);
      });
    });
    