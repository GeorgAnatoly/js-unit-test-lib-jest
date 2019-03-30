# JavaScript Library for use with Jest
The purpose of this library is to simplify testing with Jest
by wrapping Jest test objects in typical static Assert.etc()
methods.

### Usage
Compatible with tests run on NodeJS using JEST.

### Current Functionality
Invoke a Jest test method via:

Assert.*method*(*input* \<,*expected*\>);
    
Implemented methods:

Equality:
  * Assert.areEqual(*input*, *expected*)

Type Check:
  * Assert.is*Type*(*input*)
    * example: Assert.isBoolean(*input*);

*\"Truthiness\"*:
  * Assert.isTrue(*input*)
  * Assert.isFalse(*input*)

#### Authors
Blake Olinger - *Initial Author* - [email](mailto:finalyetifive@gmail.com)