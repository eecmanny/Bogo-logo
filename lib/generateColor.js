class Shape {
  constructor() {
    this.color = "";

  }

  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
  }

}


class Square extends Shape {
  render() {
    return `<rect width="250" height="150" fill="${this.color}" />`
  }
}


class Triangle extends Shape {
  render() {
    return `<polygon points="100,10 1,200 200,200" fill="${this.color}" />`
  }
}

module.exports = {
  Triangle,
  Square,
  Circle
}
