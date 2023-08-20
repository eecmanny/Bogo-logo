class Logo {
  constructor(type) {
    this.type = type;
  }

  getLogo() {
    return "This method should be overridden by subclasses.";
  }
}

class Circle extends Logo {
  constructor(shape, color) {
    super("Circle");
    //this.shape = shape;
    this.color = color;
  }

  getLogo() {
    return `<circle cx="150" cy="100" r="80" fill="${this.Color}"/>`
  }
}

class Square extends Logo {
  constructor(shape, color) {
    super("Square");
    //this.shape = shape;
    this.color = color;
  }

  getLogo() {
    return `<rect width="250" height="150" fill="${this.Color}" />`
  }
}

class Triangle extends Logo {
  constructor(shape, color) {
    super("Triangle");
    //this.shape = shape;
    this.color = color;
  }

  getLogo() {
    return `<polygon points="100,10 1,200 200,200" fill="${this.Color}" />`

  }
}








// // // Creating instances of the subclasses
const circle = new Circle('Circle', `${this.Color}`);
const square = new Square('Square', `${this.Color}`);
const triangle = new Triangle('Triangle', `${this.Color}`);

// // // Using polymorphism to calculate the area of different shapes
// // function calculateArea(shape) {
// //   console.log(`${shape.type} Area: ${shape.getLogo()}`);
// // }

// // calculateArea(circle); // Output: "Circle Area: 78.53981633974483"
// // calculateArea(square); // Output: "Square Area: 16"
// // calculateArea(triangle); // Output: "Square Area: 16"

//  // Circle
// `<svg width="300" height="200">
// <circle cx="150" cy="100" r="80" fill="${data.Color}"/>
// <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
// </svg>` 

// // Circle
// `<svg width="300" height="200">
// <circle cx="150" cy="100" r="80" fill="green"/>
// <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
// </svg>`


// // Rectangle
// `<svg width="300" height="200">
//   <rect width="250" height="150" fill="${data.Color}" />
// </svg>`


// // Rectangle
// `<svg width="300" height="200">
//   <rect width="250" height="150" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
// </svg>`

// // Triangle
// `<svg height="300" width="200">
//   <polygon points="100,10 1,200 200,200" fill="${data.Color}" />
// </svg>`

// // Triangle
// `<svg height="300" width="200">
//   <polygon points="100,10 1,200 200,200" style="fill:lime;stroke:purple;stroke-width:1" />
// </svg>`


// // ## Badges
// // ${data.badges}

module.exports = Logo;
