const { Circle, Square, Triangle } = require("./generateColor");

class Logo {
constructor(shape, text, textColor){
this.shape = shape;
this.text = text;
this.textColor = textColor;
    }
    setShape(shape) {
        this.shape = shape;
    }
    setShape(text) {
        this.text = text;
    }
    setShape(textColor) {
        this.textColor = textColor;
    }
//     render() {
//         return `<svg width="300" height="200">`
//         if (answer.shape == "Circle") {
//             return 
//             `<circle cx="150" cy="100" r="80" fill="${this.color}"/>
//             <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`

//         } 
//         if (answer.shape == "Trianlge") {
//             return 
//             `<polygon points="100,10 1,200 200,200" fill="${this.color}"/>
//             <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`

//         } 
//         if (answer.shape == "Square") {
//             return 
//             `<rect width="250" height="150" style="fill:"${this.color}"
//             <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
//         }         
//         `</svg>`
//       }
// }

render() {
    let shapeSvg = '';

    if (this.shape === "Circle") {
      shapeSvg = `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    } else if (this.shape === "Triangle") {
      shapeSvg = `<polygon points="100,10 1,200 200,200" fill="${this.color}"/>`;
    } else if (this.shape === "Square") {
      shapeSvg = `<rect width="250" height="150" fill="${this.color}" />`;
    }

    return `<svg width="300" height="200">
      ${shapeSvg}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

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


module.exports = Logo