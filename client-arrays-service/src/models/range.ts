function RangeException (message) {
    this.message = message;
    this.name = "RangeException";
}

module.exports.generate = (size: number): Array<number> => {
    try {
        if (this.validation(size)) {
            const tempArray = new Array(size - 1);
            return Array.from(tempArray, (el, i) => tempArray.length - i);
        }
    } catch (error) {
        throw error;
    }
};

module.exports.validation = (n: any): Boolean => {

    const sizeRange = parseInt(n);

    if (typeof sizeRange === 'undefined') {
        throw new RangeException('Range size is mandatory field');
    }

    if (typeof sizeRange !== 'number' || isNaN(sizeRange) || n != sizeRange) {
        throw new RangeException('Range size is invalid');
    }

    if (sizeRange < 1 || sizeRange > 1000) {
        throw new RangeException('Range size must be in the range from 1 to 1000');
    }

    return true;
};