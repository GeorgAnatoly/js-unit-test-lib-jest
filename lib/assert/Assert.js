class Assert {
    static equals(input, expected){
        return () => {
            expect(input).toBe(expected);
        }
    }

    static type(input, expectedType) {
        return () => {
            expect(typeof input).toBe(expectedType);
        }
    }
}

module.exports = Assert;