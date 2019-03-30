class Assert {
    static areEqual(input, expected){
        return test("areEqual", () => {
            expect(input).toBe(expected);
    });
    }

    static isBoolean(input) {
        return test("isBoolean", () => {
            expect(typeof input).toBe("boolean");
    });
    }

    static isNumber(input) {
        return test("isNumber", () => {
            expect(typeof input).toBe("number");
    });
    }

    static isUndefined(input) {
        return test("isUndefined", () => {
            expect(typeof input).toBe("undefined");
    })
    }

    static isString(input) {
        return test("isString", () => {
            expect(typeof input).toBe("string");
    })
    }

    static isObject(input) {
        return test("isObject", () => {
            expect(typeof input).toBe("object");
    })
    }

    static isSymbol(input) {
        return test("isSymbol", () => {
            expect(typeof input).toBe("symbol");
    })
    }

    static isFunction(input) {
        return test("isFunction", () => {
            expect(typeof input).toBe("function");
    })
    }

    static isNull(input) {
        return test("isNull", () => {
            expect((!input && typeof input === "object")).toBe(true);
    })
    }

    static isTrue(input) {
        return test("isTrue", () => {
            expect(input).toBe(true);
    })
    }

    static isFalse(input) {
        return test("isFalse", () => {
            expect(input).toBe(false);
    })
    }
}

module.exports = Assert;