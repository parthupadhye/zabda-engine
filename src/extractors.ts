export function verifyIdentifier ( identifier: string ): boolean {
    if ( identifier.indexOf('(') < 0 ){
        return false;
    }
    return true;
}
export function extractTagStr ( identifier: string ):string {
    if ( !verifyIdentifier (identifier ) ){
        return '';
    }
    const tagStr = identifier.split(')')[1];
    return tagStr;
}
export function extractMULa ( identifier: string ):string {
    if ( !verifyIdentifier (identifier ) ){
        return identifier;
    }
    return  identifier.split(')')[0].split('(')[1];

}
export function extractLiGga ( identifier: string ):string {
    if ( !verifyIdentifier (identifier ) ){
        return '';
    }
    const tagstr = extractTagStr ( identifier );
    const mod = tagstr.length % 3;
    const triples = Math.floor( tagstr.length/3 );
    if ( triples < 1 ){
        return '';
    }
    let liGga = 'P';
    switch ( mod ){
        case 0: liGga = tagstr.substr(tagstr.length-3,1); break;
        case 1: liGga = tagstr.substr(tagstr.length-1,1); break;
        case 2: liGga = tagstr.substr(tagstr.length-2,1); break;
    }
    return liGga;
}
export function extractVacana ( identifier: string ):string {
    if ( !verifyIdentifier (identifier ) ){
        return '';
    }
    const tagstr = extractTagStr ( identifier );
    const mod = tagstr.length % 3;
    const triples = Math.floor( tagstr.length/3 );
    if ( triples < 1 ){
        return '';
    }
    let vacana = 'E';
    switch ( mod ){
        case 0: vacana = tagstr.substr(tagstr.length-1,1); break;
        case 1: vacana = ''; break;
        case 2: vacana = ''; break;
    }
    return vacana;
}
export function extractVibhakti ( identifier: string ):number {
    if ( !verifyIdentifier (identifier ) ){
        return 0;
    }
    const tagstr = extractTagStr ( identifier );
    const mod = tagstr.length % 3;
    const triples = Math.floor( tagstr.length/3 );
    if ( triples < 1 ){
        return 0;
    }
    let vibhakti = '1';
    switch ( mod ){
        case 0: vibhakti = tagstr.substr(tagstr.length-2,1); break;
        case 2: vibhakti = tagstr.substr(tagstr.length-1,1); break;
    }
    return parseInt(vibhakti, 10);
}

export function extractPrakAra ( identifier: string ):string {
    if ( !verifyIdentifier (identifier ) ){
        return '';
    }
    const tagstr = extractTagStr ( identifier );
    const mod = tagstr.length % 3;
    const triples = Math.floor( tagstr.length/3 );
    if ( triples === 1 ){
        return tagstr.substr(0, 3);
    }
    return tagstr.substr(tagstr.length-(6-mod), 3);
}

export function extractKriyaDhatu ( identifier: string ): string {
    if ( !verifyIdentifier (identifier ) ){
        return '';
    }
    const kpd = identifier.split(')')[0].split('(')[1];
    const kpdsplit = kpd.split('|')
    if ( kpdsplit.length === 3 ) {
        return kpdsplit[0];
    } else {
        return kpdsplit[1];
    }
}

export function extractKriyaUpapada ( identifier: string ): string {
    if ( !verifyIdentifier (identifier ) ){
        return '';
    }
    const kpd = identifier.split(')')[0].split('(')[1];
    const kpdsplit = kpd.split('|')
    let upapada = "";
    if ( kpdsplit.length > 3 ) {
        upapada = kpdsplit[0];
    }
    return upapada;
}

export function extractKriyaDhatuIndex ( identifier: string ): string {
    if ( !verifyIdentifier (identifier ) ){
        return '';
    }
    if ( !verifyIdentifier (identifier ) ){
        return '';
    }
    const kpd = identifier.split(')')[0].split('(')[1];
    const kpdsplit = kpd.split('|')
    let dhatuIndex = "";
    if ( kpdsplit.length === 3 ) {
        dhatuIndex = kpdsplit[1];
    } else {
        dhatuIndex = kpdsplit[2];
    }
    let kindex = dhatuIndex;
    if ( dhatuIndex.length < 7 ) {
        kindex = "0" + dhatuIndex;
    }
    return kindex;
}

export function extractKriyaPrayoga ( identifier: string ): string {
    if ( !verifyIdentifier (identifier ) ){
        return '';
    }
    if ( !verifyIdentifier (identifier ) ){
        return '';
    }
    const kpd = identifier.split(')')[0].split('(')[1];
    const kpdsplit = kpd.split('|')
    if ( kpdsplit.length === 3 ) {
        return kpdsplit[2];
    } else {
        return kpdsplit[3];
    }
}

export function extractKriyaLakara ( identifier: string ): string {
    if ( !verifyIdentifier (identifier ) ){
        return '';
    }
    const tagstr = extractTagStr ( identifier );
    if ( tagstr.length === 5 ){
        return tagstr.substr(0,3);
    }
    return ''
}

export function extractKriyaPuruSa ( identifier: string ): string {
    if ( !verifyIdentifier (identifier ) ){
        return '';
    }
    const tagstr = extractTagStr ( identifier );
    if ( tagstr.length === 5 ){
        return tagstr.substr(3,1);
    }
    return ''
}

export function extractKriyaPuruSaIndex ( identifier: string ): number {
    const vacana = extractKriyaPuruSa(identifier);
    switch ( vacana ) {
        case "P" : return 0;
        case "M" : return 1;
        case "U" : return 2;
    }
    return -1;
}

export function extractKriyaVacana ( identifier: string ): string {
    if ( !verifyIdentifier (identifier ) ){
        return '';
    }
    const tagstr = extractTagStr ( identifier );
    if ( tagstr.length === 5 ){
        return tagstr.substr(4,1);
    }
    return ''
}

export function extractKriyaVacanaIndex ( identifier: string ): number {
    const vacana = extractKriyaVacana(identifier);
    switch ( vacana ) {
        case "E" : return 0;
        case "D" : return 1;
        case "B" : return 2;
    }
    return -1;
}

export function getUniques ( array: string[] ): string[] {
    const output: string[] = [];
    for ( const item of array ) {
        if ( !isInArray(item, output) ) {
            output.push ( item );
        }
    }
    return output
}

export function isInArray ( obj: string, array: string[] ): boolean {
    for ( const item of array ) {
        if ( obj === item ) {
            return true;
        }
    }
    return false;
}
