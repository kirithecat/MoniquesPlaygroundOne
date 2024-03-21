import { evenOrOdd } from "../EvenOrOdd.js";
import { equal } from 'assert';

it('Even number test (2)', function() {
    const result = evenOrOdd(2);
    const expectedResult = "Even";
    equal(result, expectedResult);
});

it('Even number test (0)', function() {
    const result = evenOrOdd(0);
    const expectedResult = "Even";
    equal(result, expectedResult);
});

it('Even number test (3)', function() {
    const result = evenOrOdd(3);
    const expectedResult = "Odd";
    equal(result, expectedResult);
});