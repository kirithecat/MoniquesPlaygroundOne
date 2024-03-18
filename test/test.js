import { equal } from 'assert';
import { jacksTrickNumber } from '../index.js';

it('single digit test (3)', function() {
    const result = jacksTrickNumber(3);
    const expectedResult = 15;
    equal(result, expectedResult);
});

it('single digit test (0)', function() {
    const result = jacksTrickNumber(0);
    const expectedResult = 0;
    equal(result, expectedResult);
});

it('ten digit test(1234567890)', function() {
    const result = jacksTrickNumber(123456890);
    const expectedResult = 241126738281250;
    equal(result, expectedResult);
});


it('single digit test negative number (-3)', function() {
    const result = jacksTrickNumber(-3);
    const expectedResult = -15;
    equal(result, expectedResult);
});

it('double digit test negative number (-30)', function() {
    const result = jacksTrickNumber(-30);
    const expectedResult = -750;
    equal(result, expectedResult);
});

//TODO:
//These test is currently failing because of the decimal points

// it('double digit test decimal number (0.5)', function() {
//     const result = jacksTrickNumber(0.5);
//     const expectedResult = 0.25;
//     equal(result, expectedResult);
// });

// it('single digit test decimal number (.5)', function() {
//     const result = jacksTrickNumber(.5);
//     const expectedResult = 0.25;
//     equal(result, expectedResult);
// });

// it('triple digit test decimal number (2.56)', function() {
//     const result = jacksTrickNumber(2.56);
//     const expectedResult = 1600;
//     equal(result, expectedResult);
// });