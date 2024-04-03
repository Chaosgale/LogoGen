class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color) {
        super();
        this.setColor(color);
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}">`;
    }
}

class Square extends Shape {
    constructor(color) {
        super();
        this.setColor(color);
    }

    render() {
        return `<rect x="75"  y="50" height="150" width="150" fill="${this.color}">`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super();
        this.setColor(color);
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}">`;
    }
}

module.exports = { Circle, Square, Triangle };
