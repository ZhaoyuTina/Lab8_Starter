// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// matches valid phone numbers
test('isPhoneNumber test 1', () => {
    expect(functions.isPhoneNumber("110-101-2022")).toBe(true);
});

test('isPhoneNumber test 2', () => {
    expect(functions.isPhoneNumber("100184-1092")).toBe(true);
});

test('isPhoneNumber test 3', () => {
    expect(functions.isPhoneNumber("123abc3456")).toBe(false);
});

test('isPhoneNumber test 4', () => {
    expect(functions.isPhoneNumber("11212239678")).toBe(false);
});

// matches valid emails
test('isEmail test 1', () => {
    expect(functions.isEmail("laowang@ucsd.edu")).toBe(true);
});

test('isEmail test 2', () => {
    expect(functions.isEmail("spot@outlook.com")).toBe(true);
});

test('isEmail test 3', () => {
    expect(functions.isEmail("abaaba")).toBe(false);
});

test('isEmail test 4', () => {
    expect(functions.isEmail("loveCapoo@Cappoo.bugcat")).toBe(false);
});

// check strong password
test('isStrongPassword test 1', () => {
    expect(functions.isStrongPassword("catcapoo1234")).toBe(true);
});

test('isStrongPassword test 2', () => {
    expect(functions.isStrongPassword("NengnaAforcse")).toBe(true);
});

test('isStrongPassword test 3', () => {
    expect(functions.isStrongPassword("0biaji")).toBe(false);
});

test('isStrongPassword test 4', () => {
    expect(functions.isStrongPassword("icecream~")).toBe(false);
});

// matches dates form
test('isDate test 1', () => {
    expect(functions.isDate("11/16/2022")).toBe(true);
});

test('isDate test 2', () => {
    expect(functions.isDate("11/18/2022")).toBe(true);
});

test('isDate test 3', () => {
    expect(functions.isDate("2001/11/2021")).toBe(false);
});

test('isDate test 4', () => {
    expect(functions.isDate("tada10/21")).toBe(false);
});

// matches hex formax
test('isHexColor test 1', () => {
    expect(functions.isHexColor("E599F1")).toBe(true);
});

test('isHexColor test 2', () => {
    expect(functions.isHexColor("b58")).toBe(true);
});

test('isHexColor test 3', () => {
    expect(functions.isHexColor("88888518")).toBe(false);
});

test('isHexColor test 4', () => {
    expect(functions.isHexColor("149149149")).toBe(false);
});