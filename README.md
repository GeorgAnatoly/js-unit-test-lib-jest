# JavaScript Library for use with Jest
The purpose of this library is to simplify testing with Jest
by wrapping Jest test objects in typical static Assert.etc()
methods.

### Usage
Compatible with tests run on NodeJS using JEST.

### Current Functionality
Invoke a Jest test method via:
Assert.*method*(*input*, *expected*, *message = \"\"*);
    
Implemented methods:
  * Assert.equals(input, expected);
  * Assert.type(input, expectedType);

#### Authors
Blake Olinger - *Initial Author* - [email](mailto:finalyetifive@gmail.com)