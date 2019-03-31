# JavaScript Library for use with Jest
The purpose of this library is to simplify testing with Jest
by wrapping Jest test objects in typical static Assert.etc()
methods.

### Usage
Compatible with tests run on NodeJS using Jest.\
Also offers some comparable methods for general use\
without test runner functionality.

### Jest Functionality
Invoke a Jest test method via:

Assert.*method*(*input* \<,*expected*\>);
    
Implemented methods:

Equality:
  * Assert.areEqual(*input*, *expected*)
  * Assert.arraysAreEqual(*array*, *array2*)

Type Check:
  * Assert.is*Type*(*input*)
    * example: Assert.isBoolean(*input*);

*\"Truthiness\"*:
  * Assert.isTrue(*input*)
  * Assert.isFalse(*input*)

### General Classes
###### Arrays:
Arrays.compareArrays(*array*, *array2*)
  * compares two arrays for equality
  
###### Validation
Validation.isNull(*input*);
  * generically checks input returns if null

#### Authors
Blake Olinger  - [email](mailto:finalyetifive@gmail.com)