import {extract, verify} from "../index";


test('Verify identifier', () => {
    expect(verify('devaH(deva)SMNP1E')).toBe(true);
});

test('Get liGga from identifier', () => {
    expect(extract('devaH(deva)SMNP1E', 'liGga')).toBe('P');
});

test('Get vibhakti from identifier', () => {
    expect(extract('devaH(deva)SMNP1E', 'vibhakti')).toBe(1);
});

test('Get vacana from identifier', () => {
    expect(extract('devaH(deva)SMNP1E', 'vacana')).toBe('E');
});

test('Get mULa from identifier devAnAm(deva)SMNP6B', () => {
    expect(extract('devAnAm', 'mULa')).toBe('devAnAm');
});

test('Get mULa from identifier devAnAm(deva)SMNP6B', () => {
    expect(extract('devAnAm(deva)SMNP6B', 'PRAKARA')).toBe('SMN');
});

test('Get mULa from identifier devAnAm(deva)SMNP6', () => {
    expect(extract('devAnAm(deva)SMNP6', 'PRAKARA')).toBe('SMN');
});

test('Get mULa from identifier devAnAm(deva)SMNP', () => {
    expect(extract('devAnAm(deva)SMNP', 'PRAKARA')).toBe('SMN');
});

test('Get mULa from identifier (deva)SMNP', () => {
    expect(extract('(deva)SMNP', 'PRAKARA')).toBe('SMN');
});

