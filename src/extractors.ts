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
    let tagStr = identifier.split(')')[1];
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
    let triples = Math.floor( tagstr.length/3 );
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
    let triples = Math.floor( tagstr.length/3 );
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
    let triples = Math.floor( tagstr.length/3 );
    if ( triples < 1 ){
        return 0;
    }
    let vibhakti = '1';
    switch ( mod ){
        case 0: vibhakti = tagstr.substr(tagstr.length-2,1); break;
        case 2: vibhakti = tagstr.substr(tagstr.length-1,1); break;
    }
    return parseInt(vibhakti);
}

export function extractPrakAra ( identifier: string ):string {
    if ( !verifyIdentifier (identifier ) ){
        return '';
    }
    const tagstr = extractTagStr ( identifier );
    const mod = tagstr.length % 3;
    let triples = Math.floor( tagstr.length/3 );
    if ( triples == 1 ){
        return tagstr.substr(0, 3);
    }
    return tagstr.substr(tagstr.length-(6-mod), 3);
}

export function getUniques ( array: string[] ): string[] {
    const output: string[] = [];
    for ( let i=0; i< array.length; i++ ){
        if ( !isInArray(array[i], output) ) {
            output.push ( array[i] );
        }
    }
    return output
}

export function isInArray ( item: string, array: string[] ): boolean {
    for ( let i=0; i< array.length; i++ ) {
        if ( array[i] == item ) {
            return true;
        }
    }
    return false;
}
