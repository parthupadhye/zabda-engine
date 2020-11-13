import {
    extractLiGga, extractVacana,
    extractVibhakti, extractMULa
} from './extractors';
import {ENDINGS, SUBANTA_DATA, SUBANTA_PRATYAYAS} from "./data/subanta";

/* tslint:disable:no-string-literal */
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
    for ( const sub of sdata ){
        if ( mULa.substring(mULa.length-sub['word'].length) === sub['word'] ){
            const pre = mULa.substring(0, mULa.length-sub['word'].length)
            if ( sub['word'] === mULa && sub['linga'] === liGga ) {
                const forms = sub['forms'].split(";")
                if ( forms.length > 0 ){
                    return pre + forms[index].split('-')[0].trim();
                }
            }
        }
    }
    for ( const ending of ENDINGS ) {
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
    for ( const pratyaya of SUBANTA_PRATYAYAS ) {
        if ( pratyaya.name === subForm ) {
            return pratyaya.value;
        }
    }
    return [];
}
/* tslint:disable:no-string-literal */
