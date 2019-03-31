class Validation {
    static isNull(input) {
        return !input && typeof input === "object";
    }
}

module.exports = Validation;