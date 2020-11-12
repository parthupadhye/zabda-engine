import {
    verifyIdentifier, extractLiGga, extractVacana,
    extractVibhakti, extractMULa, extractPrakAra, getUniques, isInArray
} from './extractors';
import {ENDINGS, SUBANTA_DATA, SUBANTA_PRATYAYAS} from "./data/subanta";

export function identifySubanta ( word: string ): string {
    const identifiers: string[] = [];
    const sdata = SUBANTA_DATA;
    for ( let i=0; i< sdata.length; i++ ){
        const sub = sdata[i];
        const forms = sub['forms'].split(";")
        const zword = sub['word'];
        for ( let f=0; f< forms.length; f++ ){
            const form = forms[f];
            if ( word.substring(word.length-form.length) === form ) {
                if ( form.length > 0 ){
                    const pre = word.substring(0, word.length-form.length);
                    let mULa = pre + sub['word'];
                    let liGga = sub['linga'];
                    const vindex = f % 3;
                    const vibhakti = ( f - vindex )/3 + 1;
                    let vacana = 'E';
                    if ( vindex === 1 ){
                        vacana = 'D';
                    } else if ( vindex === 2 ){
                        vacana = 'B';
                    }
                    let identifier = word + '(' + pre + sub['word'] + ')SMN' + liGga + vibhakti + vacana;
                    if ( !isInArray(identifier[i], identifiers) ) {
                        identifiers.push(identifier)
                    }
                }
            }
        }
    }

    const otherIdentifiers = identifyFromPratyayas( word );
    for ( let f=0; f< otherIdentifiers.length; f++ ){
        const identifier = otherIdentifiers[f];
        if ( !isInArray(identifier, identifiers) ) {
            identifiers.push(identifier)
        }
    }

    const uniques = getUniques(identifiers)

    return identifiers.join(', ');
}

export function decline ( identifier: string ): string {
    const mULa = extractMULa ( identifier.trim() );
    let liGga = extractLiGga ( identifier.trim() );
    let vibhakti = extractVibhakti ( identifier.trim() );
    let vacana = extractVacana ( identifier.trim() );
    if ( liGga.length===0 ) liGga = "P";
    if ( vibhakti ===0 ) vibhakti = 1;
    if ( vacana.length===0 ) vacana = "E";

    let vindex = 0;
    if ( vacana === 'D') {
        vindex = 1;
    } else if ( vacana === 'B') {
        vindex = 2;
    }
    const index = (vibhakti-1)*3 + vindex;
    const sdata = SUBANTA_DATA;
    for ( let i=0; i< sdata.length; i++ ){
        const sub = sdata[i];
        if ( mULa.substring(mULa.length-sub['word'].length) === sub['word'] ){
            const pre = mULa.substring(0, mULa.length-sub['word'].length)
            if ( sub['word'] === mULa && sub['linga'] == liGga ) {
                const forms = sub['forms'].split(";")
                if ( forms.length > 0 ){
                    return pre + forms[index].split('-')[0].trim();
                }
            }
        }
    }
    for ( let i=0; i< ENDINGS.length; i++ ){
        const ending = ENDINGS[i];
        if ( mULa.substring(mULa.length-ending.length) === ending ) {
            const subForm = liGga.toLowerCase() + '_' + ending;
            const forms: string[] = getDeclensions( subForm)
            if ( forms.length > 0 ){
                const root = mULa.substring(0,mULa.length-ending.length)
                return root + forms[index].split('-')[0].trim();
            }
        }
    }
    return identifier;
}

function getDeclensions( subForm: string ): string[] {
    for ( let i =0; i< SUBANTA_PRATYAYAS.length; i++ ) {
        if ( SUBANTA_PRATYAYAS[i].name === subForm ) {
            return SUBANTA_PRATYAYAS[i].value;
        }
    }
    return [];
}

function identifyFromPratyayas ( word: string ): string[] {
    const identifiers: string[] = [];
    for ( let i =0; i< SUBANTA_PRATYAYAS.length; i++ ) {
        const forms = SUBANTA_PRATYAYAS[i].value;
        for ( let f=0; f< forms.length; f++ ){
            const form = forms[f];
            if ( word.substring( word.length - form.length ) === form ) {
                const liGga = SUBANTA_PRATYAYAS[i].name.split('_')[0].toUpperCase();
                const ending = SUBANTA_PRATYAYAS[i].name.split('_')[1];
                const mULa = word.substring( 0, word.length - form.length ) + ending;
                const vindex = f % 3;
                const vibhakti = ( f - vindex )/3 + 1;
                let vacana = 'E';
                if ( vindex === 1 ){
                    vacana = 'D';
                } else if ( vindex === 2 ){
                    vacana = 'B';
                }
                const identifier = word + '(' + mULa + ')SMN' + liGga + vibhakti + vacana;
                identifiers.push ( identifier );
            }
        }
    }
    return identifiers;
}
