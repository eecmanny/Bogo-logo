const { Circle, Square, Triangle } = require("./generateColor");


class Logo {
    constructor() {
        this.shape = "";
        this.text = "";
    }
    setShape(shape) {
        this.shape = shape.render();
    }
    setText(logoText, logoColor) {
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoColor}">${logoText}</text>`

    }

    render() {


        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          ${this.shape}${this.text}</svg>`
    }
}

module.exports = Logo