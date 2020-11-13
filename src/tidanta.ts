import {
    extractKriyaDhatuIndex,
    extractKriyaPrayoga,
    extractKriyaLakara, extractKriyaPuruSaIndex, extractKriyaVacanaIndex, extractKriyaUpapada
} from './extractors';
import {TIDANTA} from "./data/tidanta";

export function conjugate ( identifier: string ): string {
    const upapada = extractKriyaUpapada(identifier);
    const dhatuIndex = extractKriyaDhatuIndex(identifier);
    const prayoga = extractKriyaPrayoga(identifier);
    const lakara = extractKriyaLakara(identifier);
    const purusaIndex = extractKriyaPuruSaIndex(identifier);
    const vacanaIndex = extractKriyaVacanaIndex(identifier);
    const lakaraName = createLakaraDataName (lakara, prayoga);

    // @ts-ignore
    const lforms = TIDANTA[dhatuIndex][lakaraName];
    if ( lforms.length === 0 ){
        return '';
    }
    const forms = ( lforms + '' ).split(';');
    const findex = purusaIndex*3+vacanaIndex;
    // @ts-ignore
    const kpd = forms[findex].split('-')[0];
    return upapada+kpd.trim();
}

export function getLakaraList(): string[] {
    return ["LAT", "LIT", "LUT", "LRT", "LOT", "LNG", "VDG", "ASG", "LUG", "LRG" ]
}

export function createLakaraDataName ( lakara: string, prayoga: string ): string {
    const ldname = prayoga.toLowerCase()[0];
    switch ( lakara ){
        case "LAT" : return ldname + 'lat';
        case "LIT" : return ldname + 'lit';
        case "LUT" : return ldname + 'lut';
        case "LRT" : return ldname + 'lrut';
        case "LOT" : return ldname + 'lot';
        case "LNG" : return ldname + 'lang';
        case "VDG" : return ldname + 'vidhiling';
        case "ASG" : return ldname + 'ashirling';
        case "LUG" : return ldname + 'lung';
        case "LRG" : return ldname + 'lrung';
    }
    return ldname + 'lat';
}
