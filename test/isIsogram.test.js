import { equal } from 'assert';
import { isIsogram } from '../isIsogram.js';

it('Is an Isogram - Dermatoglyphics', () => {
    const result = isIsogram('Dermatoglyphics');
    const expectedResult = true;
    equal(result, expectedResult);
});

it('Is an Isogram - ant', () => {
    const result = isIsogram('ant');
    const expectedResult = true;
    equal(result, expectedResult);
});

it('Not an Isogram - aba', () => {
    const result = isIsogram('aba');
    const expectedResult = false;
    equal(result, expectedResult);
});

it('Not an Isogram, different casing - Aba', () => {
    const result = isIsogram('Aba');
    const expectedResult = false;
    equal(result, expectedResult);
});

it('Not an Isogram, same characters next to each other - goose', () => {
    const result = isIsogram('goose');
    const expectedResult = false;
    equal(result, expectedResult);
});

it('Not an Isogram, same characters next to each other, different casing - GoOse', () => {
    const result = isIsogram('GoOse');
    const expectedResult = false;
    equal(result, expectedResult);
});

