const Validation = require("../validation/Validation");

class Arrays {
    static compareArrays(array, array2){
        if(array === array2)
            return true;

        if(Validation.isNull(array)||
            Validation.isNull(array2))
            return false;

        if(array.length !== array2.length)
            return false;

        for(let index = 0; index < array.length; ++index) {
            if (array[index] !== array2[index])
                return false;
        }

        return true;
    }
}

module.exports = Arrays;