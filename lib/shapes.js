class Shape {
    constructor() {
        this.color = '';
    }

    colorChoice(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="75"  y="50" height="150" width="150" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    }
}

module.exports = { Circle, Square, Triangle };
