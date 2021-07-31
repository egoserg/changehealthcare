function RangeException (message) {
    this.message = message;
    this.name = "RangeException";
}

exports.generateRange = (size: number): Array<number> => {
    try {
        this.validation(size);

        const tempArray = new Array(size - 1);
        return Array.from(tempArray, (el, i) => tempArray.length - i);
    } catch (error) {
        throw error;
    }
};

exports.validation = (n: any): void => {
    const sizeRange = parseInt(n);

    if (n != sizeRange) {
        throw new RangeException('Range size is invalid');
    }

    if (sizeRange <= 1 || sizeRange >= 1000) {
        throw new RangeException('Range size must be in the range from 1 to 1000');
    }
};