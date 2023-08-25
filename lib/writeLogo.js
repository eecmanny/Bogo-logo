const { Circle, Square, Triangle } = require("./generateColor");

//BSC had me add but didn't work
// import { Circle, Square, Triangle } from "./generateColor";

class Logo {
    constructor() {
        this.shape = "";
        this.text = "";
        // this.textColor = textColor;
    }
    setShape(shape) {
        this.shape = shape.render();
    }
    setText(logoText, logoColor) {
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoColor}">${logoText}</text>`

    }
    // setTextColor(textColor) {
    //     this.textColor = textColor;
    // }
    render() {


        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          ${this.shape}${this.text}</svg>`
    }
}
//     render() {
//         return `<svg width="300" height="200">`
//         if (answer.shape == "Circle") {
//             return 
//             `<circle cx="150" cy="100" r="80" fill="${this.color}"/>
//             <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`

//         } 
//         else if (answer.shape == "Trianlge") {
//             return 
//             `<polygon points="100,10 1,200 200,200" fill="${this.color}"/>
//             <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`

//         } 
//         else if (answer.shape == "Square") {
//             return 
//             `<rect width="250" height="150" style="fill:"${this.color}"
//             <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
//         }         
//         `</svg>`
//       }
// }






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