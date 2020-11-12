import {decline, identifySubanta} from "../subanta";

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

test('Identify Subanta devau', () => {
    let values = "devau(deva)SMNP1D, devau(deva)SMNP2D, devau(devi)SMNP7E, "
    values += "devau(deva)SMNP8D, devau(devo)SMNP1D, devau(devau)SMNP1E, devau(devu)SMNP7E, devau(devI)SMNS1D, "
    values += "devau(devI)SMNS2D, devau(devI)SMNS8D, devau(deva)SMNN8D, devau(devi)SMNS7E, devau(devau)SMNS1E, devau(devu)SMNS7E, "
    values += "devau(devau)SMNN1E, devau(devt)SMNS2D"

    expect(identifySubanta('devau')).toBe(values);
});

test('Identify Subanta vizvadevAnAm', () => {
    let values = "vizvadevAnAm(vizvadeva)SMNP6B, vizvadevAnAm(vizvadevAno)SMNP2E, vizvadevAnAm(vizvadevAnI)SMNS7E, vizvadevAnAm(vizvadevAnA)SMNS2E, "
    values += "vizvadevAnAm(vizvadevA)SMNS6B, vizvadevAnAm(vizvadeva)SMNN6B, vizvadevAnAm(vizvadevAan2)SMNN6B, vizvadevAnAm(vizvadevAnc)SMNS6B"
    expect(identifySubanta('vizvadevAnAm')).toBe(values);
});

test('Identify Subanta guNau', () => {
    let values = "guNau(guNi)SMNP7E, guNau(guNa)SMNP1D, guNau(guNa)SMNP2D, guNau(guNa)SMNP8D, "
    values += "guNau(guNo)SMNP1D, guNau(guNau)SMNP1E, guNau(guNu)SMNP7E, "
    values += "guNau(guNI)SMNS1D, guNau(guNI)SMNS2D, guNau(guNI)SMNS8D, guNau(guNa)SMNN8D, "
    values += "guNau(guNi)SMNS7E, guNau(guNau)SMNS1E, guNau(guNu)SMNS7E, guNau(guNau)SMNN1E, "
    values += "guNau(guNt)SMNS2D"
    expect(identifySubanta('guNau')).toBe(values);
});
