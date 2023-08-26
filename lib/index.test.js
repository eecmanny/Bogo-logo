const Validate = require('../index.js');
const { Triangle, Square, Circle } = require('./generateColor.js');

describe('Logo', () => {
  test("Does trianlge work", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="100,10 1,200 200,200" fill="blue" />');
  })
})

describe('Logo', () => {
  test("Does square work", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect width="250" height="150" fill="blue" />');
  })
})

describe('Logo', () => {
  test("Does circle work", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
  })
})
