import {extractKriyaDhatu, extractKriyaDhatuIndex, extractPrakAra, extractTagStr} from "../extractors";
import {extractLiGga} from "../extractors";
import {extractVacana} from "../extractors";
import {extractVibhakti} from "../extractors";
import {extractMULa} from "../extractors";

test('Get tagstr from identifier', () => {
    expect(extractTagStr('devaH(deva)SMNP1E')).toBe('SMNP1E');
});

test('Get tagstr from identifier', () => {
    expect(extractTagStr('devaH')).toBe('');
});

test('Get liGga from identifier latA(latA)SMNS1E', () => {
    expect(extractLiGga('latA(latA)SMNS1E')).toBe('S');
});

test('Get liGga from identifier latA', () => {
    expect(extractLiGga('latA')).toBe('');
});

test('Get liGga from identifier (latA)SMN', () => {
    expect(extractLiGga('(latA)SMNS')).toBe('S');
});

test('Get vibhakti from identifier', () => {
    expect(extractVibhakti('devAnAm(deva)SMNP6B')).toBe(6);
});

test('Get vibhakti from identifier', () => {
    expect(extractVibhakti('devAnAm')).toBe(0);
});

test('Get vibhakti from identifier', () => {
    expect(extractVibhakti('(deva)SMNP6B')).toBe(6);
});

test('Get vacana from identifier', () => {
    expect(extractVacana('devAnAm(deva)SMNP6B')).toBe('B');
});

test('Get vacana from identifier', () => {
    expect(extractVacana('devAnAm')).toBe('');
});

test('Get vacana from identifier', () => {
    expect(extractVacana('(deva)SMNP6B')).toBe('B');
});

test('Get mULa from identifier (deva)SMNP6B', () => {
    expect(extractMULa('(deva)SMNP6B')).toBe('deva');
});

test('Get mULa from identifier devAnAm(deva)SMNP6B', () => {
    expect(extractMULa('devAnAm(deva)SMNP6B')).toBe('deva');
});

test('Get mULa from identifier devAnAm', () => {
    expect(extractMULa('devAnAm')).toBe('devAnAm');
});

test('Get PrakAra from identifier devAnAm(deva)SMNP6B', () => {
    expect(extractPrakAra('devAnAm(deva)SMNP6B')).toBe('SMN');
});

test('Get PrakAra from identifier devAnAm', () => {
    expect(extractPrakAra('devAnAm')).toBe('');
});

test('Get Dhatu from identifier (bhU|1.0001|P)LATPE', () => {
    expect(extractKriyaDhatu('(bhU|1.0001|P)LATPE')).toBe('bhU');
});

test('Get Dhatu Index from identifier (bhU|1.0001|P)LATPE', () => {
    expect(extractKriyaDhatuIndex('(bhU|1.0001|P)LATPE')).toBe('01.0001');
});


