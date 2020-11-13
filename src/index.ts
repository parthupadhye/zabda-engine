import {verifyIdentifier, extractLiGga, extractVacana,
    extractVibhakti, extractMULa, extractPrakAra } from './extractors';
import {conjugate} from "./tidanta";
import {decline} from "./subanta";

export function verify ( identifier: string ): boolean {
    return verifyIdentifier ( identifier );
}

export function inflectPhrase ( phrase: string ): string{
    const identifiers: string[] = phrase.split(" ");
    const words = [];
    for ( const identifier of identifiers ){
        const word = inflect(identifier);
        words.push ( word );
    }
    return words.join(" ");
}

export function extract ( identifier: string, property: string ): any {
    if ( !verifyIdentifier (identifier ) ){
        if ( property.toUpperCase() === 'MULA' ){
            return identifier
        }
        return '';
    }
    switch ( property.toUpperCase() ) {
        case 'LIGGA' : return extractLiGga ( identifier );
        case 'VIBHAKTI' : return extractVibhakti ( identifier );
        case 'VACANA' : return extractVacana ( identifier );
        case 'MULA' : return extractMULa ( identifier );
        case 'PRAKARA' : return extractPrakAra ( identifier );
    }
    return '';
}

function inflect ( pada: string, params=[] ): string {
    let identifier = pada;
    if ( params.length === 0 ){
        if ( !verifyIdentifier (identifier ) ){
            return identifier;
        }
    } else {
        if ( !verifyIdentifier (identifier ) ){
            return identifier;
        } else {
            let ident = '(' + pada + ')';
            ident += params.join('');
            identifier = ident;
        }
    }
    const prakara = extractPrakAra ( identifier );
    switch ( prakara.toUpperCase() ) {
        case "SMN": return decline(identifier);
        case "VSN": return decline(identifier);
        case "AVY": return extractMULa ( identifier );
        case "KPD": return conjugate( identifier );
    }
    return identifier;
}
