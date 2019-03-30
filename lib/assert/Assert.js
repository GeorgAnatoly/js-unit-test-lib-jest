class Assert {
    static equals(input, expected, message = ""){
        return test(message, () => {
            expect(input).toBe(expected);
        });
    }

    static type(input, expectedType, message = "") {
        return test(message, () => {
            expect(typeof input).toBe(expectedType);
        });
    }
}

module.exports = Assert;