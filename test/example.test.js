// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getAdd, getSub, getMult, getDiv, getExp } from '../utils.js';


const test = QUnit.test;

// Addition Tests

test('should return 10 when provided 6 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getAdd(6, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return 22 when provided 14 and 8', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 22;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getAdd(14, 8);
 
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// Subtractions Tests

test('should return 7 when provided 9 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 7;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSub(9, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return 5 when provided 9 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSub(9, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// Multiplication Tests

test('should return 64 when provided 16 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 64;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getMult(16, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// Division Tests

test('should return 4 when provided 20 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getDiv(20, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// Exponential Tests

test('should return 8 when provided 2 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getExp(2, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

