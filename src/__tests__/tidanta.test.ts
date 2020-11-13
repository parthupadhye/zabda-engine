import {conjugate} from "../tidanta";

test('Conjugate identifier (bhU|1.0001|P)LATPE', () => {
    expect(conjugate('(bhU|1.0001|P)LATPE')).toBe('bhavati');
});

test('Conjugate identifier (anu|bhU|1.0001|P)LATPE', () => {
    expect(conjugate('(anu|bhU|1.0001|P)LATPE')).toBe('anubhavati');
});

