import {decline} from "../subanta";

test('Decline identifier (deva)SMNP6B', () => {
    expect(decline('(deva)SMNP6B')).toBe('devAnAm');
});

test('Decline identifier (vizvadeva)SMNP6B', () => {
    expect(decline('(vizvadeva)SMNP6B')).toBe('vizvadevAnAm');
});

test('Decline identifier (a)SMNP6B', () => {
    expect(decline('(a)SMNP6B')).toBe('AnAm');
});

test('Decline identifier (vizvadeva)SMNP6B', () => {
    expect(decline('(vizvadeva)SMNP6B')).toBe('vizvadevAnAm');
});

test('Decline identifier (etad)SMNN2B', () => {
    expect(decline('(etad)SMNN2B')).toBe('etAni');
});

test('Decline identifier (kRta)SMNP6E', () => {
    expect(decline('(kRta)SMNP6E')).toBe('kRtasya');
});
