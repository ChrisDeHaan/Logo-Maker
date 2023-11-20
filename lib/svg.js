class Svg {
    constructor() {
        this.text = '';
        this.shape = '';
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }

    setText(text, textColor) {
        if (text.length <= 3) {
            this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
        } else {
            throw new Error('Text must not exceed 3 characters.')
        }
    }

    setShape(shape) {
        this.shape = shape.render()
    }
}

module.exports = Svg