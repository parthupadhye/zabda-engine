export const ENDINGS = ['as', 'vat', 'mat', 'vAn', 'in', 'jan', 'an', 'c', 's','z', 'u', 'o','rut', 'R', 'Rt', 'RRt', 'i', 'n', 'I', 'A', 'a', 'i', 'u', 't'];

export const SUBANTA_PRATYAYAS = [
    { 'name':'p_a', 'value': ["aH", "au", "AH","am", "au", "An","ena", "AbhyAm", "aiH","Aya", "AbhyAm", "ebhyaH","At", "AbhyAm", "ebhyaH","asya", "ayoH", "AnAm","e", "ayoH", "eSu", "a", "au", "AH"]},
    { 'name':'p_o', 'value': ["auH", "au", "AvH", "Am", "Avau", "AH", "avA", "obhyAm", "obhiH", "ave", "obhyAm", "obhyaH", "oH","obhyAm", "obhyAH", "avi", "avoH", "avAm", "avi", "avoH", "oSu", "auH", "Avu", "AvaH"]},
    { 'name':'p_R', 'value': ["R", "arau", "aaH", "aram", "arau", "rn", "rA", "RbhyAm", "RbhyaH", "re", "RbhyAm", "RbhyaH", "uH","RbhyAm", "RbhyaH", "uH", "roH", "RNAm", "ari", "roH", "RSu", "aH", "arau", "araH"]},
    { 'name':'p_i', 'value': ["iH", "I", "ayaH", "im", "I", "In", "inA", "ibhyAm", "ibhiH", "aye", "ibhyAm", "ibhiH", "eH","ibhyAm", "ibhiH", "eH", "yoH", "InAm", "au", "yoH", "isu", "e", "I", "ayaH"]},
    { 'name':'p_u', 'value': ["u", "UH", "avaH", "um", "U", "Un", "unA", "ubhyAm", "ubhiH", "ave", "ubhyAm", "ubhiH", "oH", "ubhyAm", "ubhiH", "oH", "voH", "UnAm", "au", "voH", "uSu", "oH", "U", "avaH"]},
    { 'name':'p_n', 'value': ["A", "Anau", "AnaH", "Anam", "Anau", "anaH", "anA", "abhyAm", "abhiH", "ane", "abhyAm","abhiH", "anaH", "abhyAm", "abhiH", "anaH", "anoH", "anAm", "ani", "anoH", "asu", "an", "Anau","AnaH"]},
    { 'name':'s_I', 'value': ["I", "au", "aH", "Im", "au", "IH", "A", "IbhyAm", "IbhiH", "ai", "IbhyAm", "IbhyaH", "AH", "IbhyAm", "IbhyaH", "AH", "oH", "InAm", "Am", "OH", "ISu", "i", "au", "aH"]},
    { 'name':'s_A', 'value': ["A", "e", "AH", "Am", "e", "AH", "ayA", "AbhyAm", "AbhiH", "Ayai", "AbhyAm", "AbhyaH", "AyAH", "AbhyAm", "AbhyaH", "AyAH", "ayoH", "AnAm", "AyAm", "ayoH", "Asu", "e", "e", "AH"]},
    { 'name':'n_a', 'value': ["am", "e", "Ani","am", "e", "Ani","ena", "AbhyAm", "aiH","Aya", "AbhyAm", "ebhyaH","At", "AbhyAm", "ebhyaH","asya", "ayoH", "AnAm","e", "ayoH", "eSu", "a", "au", "AH"]},
    { 'name':'s_i', 'value': ["iH", "I", "ayaH", "im", "I", "IH", "iyA", "ibhyAm", "ibhiH", "aye", "ibhyAm", "ibhyaH", "eH","ibhyAm", "ibhyaH", "eH", "yoH", "InAm", "au", "yoH", "isu", "e", "I", "ayaH"]},
    { 'name':'n_i', 'value': ["iH", "iNI", "INi", "i", "iNI", "INi", "iNA", "ibhyAm", "ibhiH", "iNe", "ibhyAm", "ibhiH", "iNaH","ibhyAm", "ibhiH", "iNaH", "iNoH", "INAm", "iNi", "iNoH", "iSu", "i", "iNI", "INi"]},
    { 'name':'s_u', 'value': ["u", "UH", "avaH", "um", "U", "UH", "vA", "ubhyAm", "ubiH" , "ave", "ubhyAm", "ubhiH", "oH", "ubhyAm", "ubhyaH", "oH", "voH", "UnAm", "au", "voH", "uSu", "o", "U", "avaH"]},
    { 'name':'n_u', 'value': ["u", "unI", "uni", "um", "unI", "uni", "unA", "ubhyAm", "ubhiH", "une", "ubhyAm", "ubhiH", "unaH", "ubhyAm", "ubhiH", "anH", "unoH", "UnAm", "uni", "unoH", "uSu", "o", "unI", "uni"]},
    { 'name':'m_R', 'value': ["A", "arau", "arah", "aram", "arau", "Rn", "rA", "RbhyAm", "RbhiH", "re", "RbhyAm", "RbhyaH", "uH", "RbhyAm", "RbhyaH", "uH", "roH", "RnAm", "ari", "roH", "RSu", "aH", "arau", "araH"]},
    { 'name':'s_R', 'value': ["A", "arau", "arah", "aram", "arau", "RH", "rA", "RbhyAm", "RbhiH", "re", "RbhyAm", "RbhyaH", "uH", "RbhyAm", "RbhyaH", "uH", "roH", "RnAm", "ari", "roH", "RSu", "aH", "arau", "araH"]},
    { 'name':'p_rut', 'value': ['rut','rutau','rutaH','rutam','rutau','rutaH','rutA','rudbhyAm','rudbhiH','rute','rudbhyAm','rudbhyaH','rutaH','rudbhyAm','rudbhyaH','rutaH','rutoH','tAM','ruti', 'rutoH','rutsu','rut','rutau','rutaH']},
    { 'name':'p_Rt', 'value': ['rut','rutau','rutaH','rutam','rutau','rutaH','rutA','rudbhyAm','rudbhiH','rute','rudbhyAm','rudbhyaH','rutaH','rudbhyAm','rudbhyaH','rutaH','rutoH','tAM','ruti', 'rutoH','rutsu','rut','rutau','rutaH']},
    { 'name':'p_RRt', 'value': ['rut','rutau','rutaH','rutam','rutau','rutaH','rutA','rudbhyAm','rudbhiH','rute','rudbhyAm','rudbhyaH','rutaH','rudbhyAm','rudbhyaH','rutaH','rutoH','tAM','ruti', 'rutoH','rutsu','rut','rutau','rutaH']},
    { 'name':'s_t', 'value': ['t', 'tau','taH','tam','au','aH','tA','dbhyAm','dbhiH','te','dbhyAm','dbhyaH','taH','dbhyAm','dbhyaH','taH','toH','tAM','ti', 'toH','tsu','t','tau','taH']},
    { 'name':'n_t', 'value': ['t','at','anti','t','atI','anti','A','dbhyAm','dbhiH','te','dbhyAm','dbhyaH','taH','dbhyAm','dbhyaH','taH','toH','tAM','ti', 'toH','tsu','t','tau','anti']},
    { 'name':'p_as', 'value': ['AH','asau','asaH','asam','asau','asaH','asA','obhyAm','obhiH','ase','obhyAm','obhyaH','asaH','obhyAm','obhyaH','asaH','asoH','asAM','asi', 'asoH','asu','aH','asau','asaH']},
    { 'name':'s_as', 'value': ['AH','asau','asaH','asam','asau','asaH','asA','obhyAm','obhiH','ase','obhyAm','obhyaH','asaH','obhyAm','obhyaH','asaH','asoH','asAM','asi', 'asoH','asu','aH','asau','asaH']},
    { 'name':'n_as', 'value': ['AH','asI','asi','asam','asI','asi','asA','obhyAm','obhiH','ase','obhyAm','obhyaH','asaH','obhyAm','obhyaH','asaH','asoH','asAM','asi', 'asoH','asu','aH','asau','asaH']},
    { 'name':'p_vat', 'value': ['vAn','vantau','vantaH','vantam','vantau','vataH','vA','vadbhyAm','vadbhiH','vate','vadbhyAm','vadbhyaH','vataH','vadbhyAm','vadbhyaH','vataH','vataoH','vatAm','vati','vatoH','vatsu','van','vantau','vantaH']},
    { 'name':'p_mat', 'value': ['mAn','mantau','mantaH','mantam','mantau','mataH','mA','madbhyAm','madbhiH','mate','madbhyAm','madbhyaH','mataH','madbhyAm','madbhyaH','mataH','mataoH','matAm','mati','matoH','matsu','man','mantau','mantaH']},
    { 'name':'p_vAn', 'value': ['An','antau','antaH','antam','antau','ataH','A','adbhyAm','adbhiH','ate','adbhyAm','adbhyaH','ataH','adbhyAm','adbhyaH','ataH','ataoH','atAm','ati','atoH','atsu','an','antau','antaH']},
    { 'name':'s_in', 'value': ['I', 'inau', 'inaH', 'inam', 'inau', 'inaH', 'inA', 'ibhyAm', 'ibhiH', 'ine', 'ibhyAm', 'ibhyaH', 'inaH', 'ibhyAm', 'ibhyaH', 'inaH', 'inoH', 'inAm', 'ini', 'inoH', 'iSu', 'in', 'inau', 'inaH']},
    { 'name':'p_jan', 'value': ['jA', 'jAnau', 'janaH', 'jAnam', 'jAnau', 'janaH', 'jJA', 'jabhyAm', 'jabhyaH', 'jJe', 'ajbhyAm', 'jabhyaH', 'jJaH', 'jabhyAm', 'jabhyaH', 'jJaH', 'jJoH', 'jJAm', 'jJi-jani', 'jJoH', 'asu', 'an', 'anau', 'AnaH']},
    { 'name': 'p_an', 'value': ['A', 'Anau', 'anaH', 'Anam', 'Anau', 'anaH', 'anA', 'abhyAm', 'abhyaH', 'ane', 'abhyAm', 'abhyaH', 'anaH', 'abhyAm', 'abhyaH', 'anaH', 'anoH', 'anAm', 'ani', 'anoH', 'asu', 'an', 'anau', 'AnaH']},
    { 'name':'p_an2', 'value': ['A', 'Anau', 'anaH', 'Anam', 'Anau', 'anaH', 'A', 'abhyAm', 'abhyaH', 'e', 'abhyAm', 'abhyaH', 'aH', 'abhyAm', 'abhyaH', 'aH', 'anoH', 'anAm', 'ani', 'oH', 'asu', 'an', 'Anau', 'AnaH']},
    { 'name':'n_an', 'value': ['a', 'anI', 'Ani','a', 'anI', 'Ani',  'anA', 'abhyAm', 'abhiH', 'ane', 'abhyAm', 'abhyaH', 'anaH', 'abhyAm', 'abhyaH', 'anaH', 'anoH', 'anAm', 'ani', 'anoH', 'asu', 'a', 'anau', 'Ani']},
    { 'name':'n_an2', 'value': ['a', ' anI/nI', 'Ani','a', 'anI/nI', 'Ani',  'nA', 'abhyAm', 'abhiH', 'ne', 'abhyAm', 'abhyaH', 'naH', 'abhyAm', 'abhyaH', ' naH', 'noH', 'nAm', 'ni/ani', 'noH', 'asu', 'am/a', 'nI', 'Ani']},
    { 'name':'s_c', 'value': ['k-g', ' cau', 'acaH','cam', 'cau', 'acaH',  'cA', 'gbhyAm', 'gbhiH', 'ce', 'gbhyAm', 'gbhyaH', 'caH', 'gbhyAm', 'gbhyaH', 'caH', 'coH', 'Am', 'ci', 'coH', 'kSu', 'k-g', 'aau', 'caH']},
    { 'name':'s_z', 'value': ['k-g', 'azau', 'zaH','zam', 'zau', 'zaH',  'zA', 'gbhyAm', 'gbhiH', 'ze', 'gbhyAm', 'gbhyaH', 'zaH', 'gbhyAm', 'gbhyaH', 'zaH', 'zoH', 'zAm', 'zi', 'zoH', 'kSu', 'k-g', 'cau', 'caH']},
    { 'name':'p_j', 'value': ['k-g', 'jau', 'zaH','zam', 'zau', 'zaH',  'zA', 'gbhyAm', 'gbhiH', 'ze', 'gbhyAm', 'gbhyaH', 'zaH', 'gbhyAm', 'gbhyaH', 'zaH', 'zoH', 'zAm', 'zi', 'zoH', 'kSu', 'k-g', 'cau', 'caH']}
]

export const SUBANTA_DATA = [
    {
        "ind": "101002",
        "baseindex": "01.002",
        "word": "deva",
        "grp": "1",
        "index_in_grp": "2",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "devaH;devau;devAH;devam;devau;devAn;devena;devAbhyAm;devaiH;devAya;devAbhyAm;devebhyaH;devAt-devAd;devAbhyAm;devebhyaH;devasya;devayoH;devAnAm;deve;devayoH;deveSu;he deva;he devau;he devAH"
    },
    {
        "ind": "101003",
        "baseindex": "01.003",
        "word": "rAma",
        "grp": "1",
        "index_in_grp": "3",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "rAmaH;rAmau;rAmAH;rAmam;rAmau;rAmAn;rAmeNa;rAmAbhyAm;rAmaiH;rAmAya;rAmAbhyAm;rAmebhyaH;rAmAt-rAmAd;rAmAbhyAm;rAmebhyaH;rAmasya;rAmayoH;rAmANAm;rAme;rAmayoH;rAmeSu;he rAma;he rAmau;he rAmAH"
    },
    {
        "ind": "101004",
        "baseindex": "01.004",
        "word": "sarva",
        "grp": "1",
        "index_in_grp": "4",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "sarvaH;sarvau;sarve;sarvam;sarvau;sarvAn;sarveNa;sarvAbhyAm;sarvaiH;sarvasmai;sarvAbhyAm;sarvebhyaH;sarvasmAt-sarvasmAd;sarvAbhyAm;sarvebhyaH;sarvasya;sarvayoH;sarveSAm;sarvasmin;sarvayoH;sarveSu;he sarva;he sarvau;he sarve"
    },
    {
        "ind": "101005",
        "baseindex": "01.005",
        "word": "vizva",
        "grp": "1",
        "index_in_grp": "5",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "vizvaH;vizvau;vizve;vizvam;vizvau;vizvAn;vizvena;vizvAbhyAm;vizvaiH;vizvasmai;vizvAbhyAm;vizvebhyaH;vizvasmAt-vizvasmAd;vizvAbhyAm;vizvebhyaH;vizvasya;vizvayoH;vizveSAm;vizvasmin;vizvayoH;vizveSu;he vizva;he vizvau;he vizve"
    },
    {
        "ind": "101006",
        "baseindex": "01.006",
        "word": "vizva",
        "grp": "1",
        "index_in_grp": "6",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "vizvaH;vizvau;vizvAH;vizvam;vizvau;vizvAn;vizvena;vizvAbhyAm;vizvaiH;vizvAya;vizvAbhyAm;vizvebhyaH;vizvAt-vizvAd;vizvAbhyAm;vizvebhyaH;vizvasya;vizvayoH;vizvAnAm;vizve;vizvayoH;vizveSu;he vizva;he vizvau;he vizvAH"
    },
    {
        "ind": "101007",
        "baseindex": "01.007",
        "word": "priyavizva",
        "grp": "1",
        "index_in_grp": "7",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "priyavizvaH;priyavizvau;priyavizvAH;priyavizvam;priyavizvau;priyavizvAn;priyavizvena;priyavizvAbhyAm;priyavizvaiH;priyavizvAya;priyavizvAbhyAm;priyavizvebhyaH;priyavizvAt-priyavizvAd;priyavizvAbhyAm;priyavizvebhyaH;priyavizvasya;priyavizvayoH;priyavizvAnAm;priyavizve;priyavizvayoH;priyavizveSu;he priyavizva;he priyavizvau;he priyavizvAH"
    },
    {
        "ind": "101008",
        "baseindex": "01.008",
        "word": "katara",
        "grp": "1",
        "index_in_grp": "8",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "kataraH;katarau;katare;kataram;katarau;katarAn;katareNa;katarAbhyAm;kataraiH;katarasmai;katarAbhyAm;katarebhyaH;katarasmAt-katarasmAd;katarAbhyAm;katarebhyaH;katarasya;katarayoH;katareSAm;katarasmin;katarayoH;katareSu;he katara;he katarau;he katare"
    },
    {
        "ind": "101009",
        "baseindex": "01.009",
        "word": "yatara",
        "grp": "1",
        "index_in_grp": "9",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "yataraH;yatarau;yatare;yataram;yatarau;yatarAn;yatareNa;yatarAbhyAm;yataraiH;yatarasmai;yatarAbhyAm;yatarebhyaH;yatarasmAt-yatarasmAd;yatarAbhyAm;yatarebhyaH;yatarasya;yatarayoH;yatareSAm;yatarasmin;yatarayoH;yatareSu;he yatara;he yatarau;he yatare"
    },
    {
        "ind": "101010",
        "baseindex": "01.010",
        "word": "tatara",
        "grp": "1",
        "index_in_grp": "10",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "tataraH;tatarau;tatare;tataram;tatarau;tatarAn;tatareNa;tatarAbhyAm;tataraiH;tatarasmai;tatarAbhyAm;tatarebhyaH;tatarasmAt-tatarasmAd;tatarAbhyAm;tatarebhyaH;tatarasya;tatarayoH;tatareSAm;tatarasmin;tatarayoH;tatareSu;he tatara;he tatarau;he tatare"
    },
    {
        "ind": "101011",
        "baseindex": "01.011",
        "word": "ekatara",
        "grp": "1",
        "index_in_grp": "11",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "ekataraH;ekatarau;ekatare;ekataram;ekatarau;ekatarAn;ekatareNa;ekatarAbhyAm;ekataraiH;ekatarasmai;ekatarAbhyAm;ekatarebhyaH;ekatarasmAt-ekatarasmAd;ekatarAbhyAm;ekatarebhyaH;ekatarasya;ekatarayoH;ekatareSAm;ekatarasmin;ekatarayoH;ekatareSu;he ekatara;he ekatarau;he ekatare"
    },
    {
        "ind": "101012",
        "baseindex": "01.012",
        "word": "katama",
        "grp": "1",
        "index_in_grp": "12",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "katamaH;katamau;katame;katamam;katamau;katamAn;katamena;katamAbhyAm;katamaiH;katamasmai;katamAbhyAm;katamebhyaH;katamasmAt-katamasmAd;katamAbhyAm;katamebhyaH;katamasya;katamayoH;katameSAm;katamasmin;katamayoH;katameSu;he katama;he katamau;he katame"
    },
    {
        "ind": "101013",
        "baseindex": "01.013",
        "word": "yatama",
        "grp": "1",
        "index_in_grp": "13",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "yatamaH;yatamau;yatame;yatamam;yatamau;yatamAn;yatamena;yatamAbhyAm;yatamaiH;yatamasmai;yatamAbhyAm;yatamebhyaH;yatamasmAt-yatamasmAd;yatamAbhyAm;yatamebhyaH;yatamasya;yatamayoH;yatameSAm;yatamasmin;yatamayoH;yatameSu;he yatama;he yatamau;he yatame"
    },
    {
        "ind": "101014",
        "baseindex": "01.014",
        "word": "tatama",
        "grp": "1",
        "index_in_grp": "14",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "tatamaH;tatamau;tatame;tatamam;tatamau;tatamAn;tatamena;tatamAbhyAm;tatamaiH;tatamasmai;tatamAbhyAm;tatamebhyaH;tatamasmAt-tatamasmAd;tatamAbhyAm;tatamebhyaH;tatamasya;tatamayoH;tatameSAm;tatamasmin;tatamayoH;tatameSu;he tatama;he tatamau;he tatame"
    },
    {
        "ind": "101015",
        "baseindex": "01.015",
        "word": "ekatama",
        "grp": "1",
        "index_in_grp": "15",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "ekatamaH;ekatamau;ekatame;ekatamam;ekatamau;ekatamAn;ekatamena;ekatamAbhyAm;ekatamaiH;ekatamasmai;ekatamAbhyAm;ekatamebhyaH;ekatamasmAt-ekatamasmAd;ekatamAbhyAm;ekatamebhyaH;ekatamasya;ekatamayoH;ekatameSAm;ekatamasmin;ekatamayoH;ekatameSu;he ekatama;he ekatamau;he ekatame"
    },
    {
        "ind": "101016",
        "baseindex": "01.016",
        "word": "anya",
        "grp": "1",
        "index_in_grp": "16",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "anyaH;anyau;anye;anyam;anyau;anyAn;anyena;anyAbhyAm;anyaiH;anyasmai;anyAbhyAm;anyebhyaH;anyasmAt-anyasmAd;anyAbhyAm;anyebhyaH;anyasya;anyayoH;anyeSAm;anyasmin;anyayoH;anyeSu;he anya;he anyau;he anye"
    },
    {
        "ind": "101017",
        "baseindex": "01.017",
        "word": "anyatara",
        "grp": "1",
        "index_in_grp": "17",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "anyataraH;anyatarau;anyatare;anyataram;anyatarau;anyatarAn;anyatareNa;anyatarAbhyAm;anyataraiH;anyatarasmai;anyatarAbhyAm;anyatarebhyaH;anyatarasmAt-anyatarasmAd;anyatarAbhyAm;anyatarebhyaH;anyatarasya;anyatarayoH;anyatareSAm;anyatarasmin;anyatarayoH;anyatareSu;he anyatara;he anyatarau;he anyatare"
    },
    {
        "ind": "101018",
        "baseindex": "01.018",
        "word": "itara",
        "grp": "1",
        "index_in_grp": "18",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "itaraH;itarau;itare;itaram;itarau;itarAn;itareNa;itarAbhyAm;itaraiH;itarasmai;itarAbhyAm;itarebhyaH;itarasmAt-itarasmAd;itarAbhyAm;itarebhyaH;itarasya;itarayoH;itareSAm;itarasmin;itarayoH;itareSu;he itara;he itarau;he itare"
    },
    {
        "ind": "101019",
        "baseindex": "01.019",
        "word": "anyatama",
        "grp": "1",
        "index_in_grp": "19",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "anyatamaH;anyatamau;anyatamAH;anyatamam;anyatamau;anyatamAn;anyatamena;anyatamAbhyAm;anyatamaiH;anyatamAya;anyatamAbhyAm;anyatamebhyaH;anyatamAt-anyatamAd;anyatamAbhyAm;anyatamebhyaH;anyatamasya;anyatamayoH;anyatamAnAm;anyatame;anyatamayoH;anyatameSu;he anyatama;he anyatamau;he anyatamAH"
    },
    {
        "ind": "101020",
        "baseindex": "01.020",
        "word": "tva",
        "grp": "1",
        "index_in_grp": "20",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "tvaH;tvau;tve;tvam;tvau;tvAn;tvena;tvAbhyAm;tvaiH;tvasmai;tvAbhyAm;tvebhyaH;tvasmAt-tvasmAd;tvAbhyAm;tvebhyaH;tvasya;tvayoH;tveSAm;tvasmin;tvayoH;tveSu;he tva;he tvau;he tve"
    },
    {
        "ind": "101021",
        "baseindex": "01.021",
        "word": "sama",
        "grp": "1",
        "index_in_grp": "21",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "samaH;samau;same;samam;samau;samAn;samena;samAbhyAm;samaiH;samasmai;samAbhyAm;samebhyaH;samasmAt-samasmAd;samAbhyAm;samebhyaH;samasya;samayoH;sameSAm;samasmin;samayoH;sameSu;he sama;he samau;he same"
    },
    {
        "ind": "101022",
        "baseindex": "01.022",
        "word": "sama",
        "grp": "1",
        "index_in_grp": "22",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "samaH;samau;samAH;samam;samau;samAn;samena;samAbhyAm;samaiH;samAya;samAbhyAm;samebhyaH;samAt-samAd;samAbhyAm;samebhyaH;samasya;samayoH;samAnAm;same;samayoH;sameSu;he sama;he samau;he samAH"
    },
    {
        "ind": "101023",
        "baseindex": "01.023",
        "word": "sima",
        "grp": "1",
        "index_in_grp": "23",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "simaH;simau;sime;simam;simau;simAn;simena;simAbhyAm;simaiH;simasmai;simAbhyAm;simebhyaH;simasmAt-simasmAd;simAbhyAm;simebhyaH;simasya;simayoH;simeSAm;simasmin;simayoH;simeSu;he sima;he simau;he sime"
    },
    {
        "ind": "101024",
        "baseindex": "01.024",
        "word": "eka",
        "grp": "1",
        "index_in_grp": "24",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "ekaH;ekau;eke;ekam;ekau;ekAn;ekena;ekAbhyAm;ekaiH;ekasmai;ekAbhyAm;ekebhyaH;ekasmAt-ekasmAd;ekAbhyAm;ekebhyaH;ekasya;ekayoH;ekeSAm;ekasmin;ekayoH;ekeSu;he eka;he ekau;he eke"
    },
    {
        "ind": "101025",
        "baseindex": "01.025",
        "word": "aneka",
        "grp": "1",
        "index_in_grp": "25",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "anekaH;anekau;aneke;anekam;anekau;anekAn;anekena;anekAbhyAm;anekaiH;anekasmai;anekAbhyAm;anekebhyaH;anekasmAt-anekasmAd;anekAbhyAm;anekebhyaH;anekasya;anekayoH;anekeSAm;anekasmin;anekayoH;anekeSu;he aneka;he anekau;he aneke"
    },
    {
        "ind": "101026",
        "baseindex": "01.026",
        "word": "ubha",
        "grp": "1",
        "index_in_grp": "26",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "-;ubhau;-;-;ubhau;-;-;ubhAbhyAm;-;-;ubhAbhyAm;-;-;ubhAbhyAm;-;-;ubhayoH;-;-;ubhayoH;-;-;he ubhau;-"
    },
    {
        "ind": "101027",
        "baseindex": "01.027",
        "word": "ubhaya",
        "grp": "1",
        "index_in_grp": "27",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "ubhayaH;-;ubhaye;ubhayam;-;ubhayAn;ubhayena;-;ubhayaiH;ubhayasmai;-;ubhayebhyaH;ubhayasmAt-ubhayasmAd;-;ubhayebhyaH;ubhayasya;-;ubhayeSAm;ubhayasmin;-;ubhayeSu;he ubhayaH;-;he ubhaye"
    },
    {
        "ind": "101028",
        "baseindex": "01.028",
        "word": "nema",
        "grp": "1",
        "index_in_grp": "28",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "nemaH;nemau;neme-nemAH;nemam;nemau;nemAn;nemena;nemAbhyAm;nemaiH;nemasmai;nemAbhyAm;nemebhyaH;nemasmAt-nemasmAd;nemAbhyAm;nemebhyaH;nemasya;nemayoH;nemeSAm;nemasmin;nemayoH;nemeSu;he nema;he nemau;he neme-nemAH"
    },
    {
        "ind": "101029",
        "baseindex": "01.029",
        "word": "pUrva",
        "grp": "1",
        "index_in_grp": "29",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "pUrvaH;pUrvau;pUrve-pUrvAH;pUrvam;pUrvau;pUrvAn;pUrveNa;pUrvAbhyAm;pUrvaiH;pUrvasmai;pUrvAbhyAm;pUrvebhyaH;pUrvasmAt-pUrvasmAd-pUrvAt-pUrvAd;pUrvAbhyAm;pUrvebhyaH;pUrvasya;pUrvayoH;pUrveSAm;pUrvasmin-pUrve;pUrvayoH;pUrveSu;he pUrva;he pUrvau;he pUrve-pUrvAH"
    },
    {
        "ind": "101030",
        "baseindex": "01.030",
        "word": "para",
        "grp": "1",
        "index_in_grp": "30",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "paraH;parau;pare-parAH;param;parau;parAn;pareNa;parAbhyAm;paraiH;parasmai;parAbhyAm;parebhyaH;parasmAt-parasmAd-parAt-parAd;parAbhyAm;parebhyaH;parasya;parayoH;pareSAm;parasmin-pare;parayoH;pareSu;he para;he parau;he pare-parAH"
    },
    {
        "ind": "101031",
        "baseindex": "01.031",
        "word": "avara",
        "grp": "1",
        "index_in_grp": "31",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "avaraH;avarau;avare-avarAH;avaram;avarau;avarAn;avareNa;avarAbhyAm;avaraiH;avarasmai;avarAbhyAm;avarebhyaH;avarasmAt-avarasmAd-avarAt-avarAd;avarAbhyAm;avarebhyaH;avarasya;avarayoH;avareSAm;avarasmin-avare;avarayoH;avareSu;he avara;he avarau;he avare-avarAH"
    },
    {
        "ind": "101032",
        "baseindex": "01.032",
        "word": "dakSiNa",
        "grp": "1",
        "index_in_grp": "32",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "dakSiNaH;dakSiNau;dakSiNe-dakSiNAH;dakSiNam;dakSiNau;dakSiNAn;dakSiNena;dakSiNAbhyAm;dakSiNaiH;dakSiNasmai;dakSiNAbhyAm;dakSiNebhyaH;dakSiNasmAt-dakSiNasmAd-dakSiNAt-dakSiNAd;dakSiNAbhyAm;dakSiNebhyaH;dakSiNasya;dakSiNayoH;dakSiNeSAm;dakSiNasmin-dakSiNe;dakSiNayoH;dakSiNeSu;he dakSiNa;he dakSiNau;he dakSiNe-dakSiNAH"
    },
    {
        "ind": "101033",
        "baseindex": "01.033",
        "word": "uttara",
        "grp": "1",
        "index_in_grp": "33",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "uttaraH;uttarau;uttare-uttarAH;uttaram;uttarau;uttarAn;uttareNa;uttarAbhyAm;uttaraiH;uttarasmai;uttarAbhyAm;uttarebhyaH;uttarasmAt-uttarasmAd-uttarAt-uttarAd;uttarAbhyAm;uttarebhyaH;uttarasya;uttarayoH;uttareSAm;uttarasmin-uttare;uttarayoH;uttareSu;he uttara;he uttarau;he uttare-uttarAH"
    },
    {
        "ind": "101034",
        "baseindex": "01.034",
        "word": "apara",
        "grp": "1",
        "index_in_grp": "34",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "aparaH;aparau;apare-aparAH;aparam;aparau;aparAn;apareNa;aparAbhyAm;aparaiH;aparasmai;aparAbhyAm;aparebhyaH;aparasmAt-aparasmAd-aparAt-aparAd;aparAbhyAm;aparebhyaH;aparasya;aparayoH;apareSAm;aparasmin-apare;aparayoH;apareSu;he apara;he aparau;he apare-aparAH"
    },
    {
        "ind": "101035",
        "baseindex": "01.035",
        "word": "adhara",
        "grp": "1",
        "index_in_grp": "35",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "adharaH;adharau;adhare-adharAH;adharam;adharau;adharAn;adhareNa;adharAbhyAm;adharaiH;adharasmai;adharAbhyAm;adharebhyaH;adharasmAt-adharasmAd-adharAt-adharAd;adharAbhyAm;adharebhyaH;adharasya;adharayoH;adhareSAm;adharasmin-adhare;adharayoH;adhareSu;he adhara;he adharau;he adhare-adharAH"
    },
    {
        "ind": "101036",
        "baseindex": "01.036",
        "word": "sva",
        "grp": "1",
        "index_in_grp": "36",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "svaH;svau;sve-svAH;svam;svau;svAn;svena;svAbhyAm;svaiH;svasmai;svAbhyAm;svebhyaH;svasmAt-svasmAd-svAt-svAd;svAbhyAm;svebhyaH;svasya;svayoH;sveSAm;svasmin-sve;svayoH;sveSu;he sva;he svau;he sve-svAH"
    },
    {
        "ind": "101037",
        "baseindex": "01.037",
        "word": "sva",
        "grp": "1",
        "index_in_grp": "37",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "svaH;svau;svAH;svam;svau;svAn;svena;svAbhyAm;svaiH;svAya;svAbhyAm;svebhyaH;svAt-svAd;svAbhyAm;svebhyaH;svasya;svayoH;svAnAm;sve;svayoH;sveSu;he sva;he svau;he svAH"
    },
    {
        "ind": "101038",
        "baseindex": "01.038",
        "word": "antara",
        "grp": "1",
        "index_in_grp": "38",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "antaraH;antarau;antare-antarAH;antaram;antarau;antarAn;antareNa;antarAbhyAm;antaraiH;antarasmai;antarAbhyAm;antarebhyaH;antarasmAt-antarasmAd-antarAt-antarAd;antarAbhyAm;antarebhyaH;antarasya;antarayoH;antareSAm;antarasmin-antare;antarayoH;antareSu;he antara;he antarau;he antare-antarAH"
    },
    {
        "ind": "101039",
        "baseindex": "01.039",
        "word": "antara",
        "grp": "1",
        "index_in_grp": "39",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "antaraH;antarau;antarAH;antaram;antarau;antarAn;antareNa;antarAbhyAm;antaraiH;antarAya;antarAbhyAm;antarebhyaH;antarAt-antarAd;antarAbhyAm;antarebhyaH;antarasya;antarayoH;antarANAm;antare;antarayoH;antareSu;he antara;he antarau;he antarAH"
    },
    {
        "ind": "101040",
        "baseindex": "01.040",
        "word": "mAsapUrva",
        "grp": "1",
        "index_in_grp": "40",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "mAsapUrvaH;mAsapUrvau;mAsapUrvAH;mAsapUrvam;mAsapUrvau;mAsapUrvAn;mAsapUrveNa;mAsapUrvAbhyAm;mAsapUrvaiH;mAsapUrvAya;mAsapUrvAbhyAm;mAsapUrvebhyaH;mAsapUrvAt-mAsapUrvAd;mAsapUrvAbhyAm;mAsapUrvebhyaH;mAsapUrvasya;mAsapUrvayoH;mAsapUrvANAm;mAsapUrve;mAsapUrvayoH;mAsapUrveSu;he mAsapUrva;he mAsapUrvau;he mAsapUrvAH"
    },
    {
        "ind": "101041",
        "baseindex": "01.041",
        "word": "pUrvapara",
        "grp": "1",
        "index_in_grp": "41",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "pUrvaparaH;pUrvaparau;pUrvaparAH;pUrvaparam;pUrvaparau;pUrvaparAn;pUrvapareNa;pUrvaparAbhyAm;pUrvaparaiH;pUrvaparAya;pUrvaparAbhyAm;pUrvaparebhyaH;pUrvaparAt-pUrvaparAd;pUrvaparAbhyAm;pUrvaparebhyaH;pUrvaparasya;pUrvaparayoH;pUrvaparANAm;pUrvapare;pUrvaparayoH;pUrvapareSu;he pUrvapara;he pUrvaparau;he pUrvaparAH"
    },
    {
        "ind": "101042",
        "baseindex": "01.042",
        "word": "prathama",
        "grp": "1",
        "index_in_grp": "42",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "prathamaH;prathamau;prathame-prathamAH;prathamam;prathamau;prathamAn;prathameNa;prathamAbhyAm;prathamaiH;prathamAya;prathamAbhyAm;prathamebhyaH;prathamAt-prathamAd;prathamAbhyAm;prathamebhyaH;prathamasya;prathamayoH;prathamAnAm;prathame;prathamayoH;prathameSu;he prathama;he prathamau;he prathame-prathamAH"
    },
    {
        "ind": "101043",
        "baseindex": "01.043",
        "word": "carama",
        "grp": "1",
        "index_in_grp": "43",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "caramaH;caramau;carame-caramAH;caramam;caramau;caramAn;carameNa;caramAbhyAm;caramaiH;caramAya;caramAbhyAm;caramebhyaH;caramAt-caramAd;caramAbhyAm;caramebhyaH;caramasya;caramayoH;caramAnAm;carame;caramayoH;carameSu;he carama;he caramau;he carame-caramAH"
    },
    {
        "ind": "101044",
        "baseindex": "01.044",
        "word": "dvaya",
        "grp": "1",
        "index_in_grp": "44",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "dvayaH;dvayau;dvaye-dvayAH;dvayam;dvayau;dvayAn;dvayena;dvayAbhyAm;dvayaiH;dvayAya;dvayAbhyAm;dvayebhyaH;dvayAt-dvayAd;dvayAbhyAm;dvayebhyaH;dvayasya;dvayayoH;dvayAnAm;dvaye;dvayayoH;dvayeSu;he dvaya;he dvayau;he dvaye-dvayAH"
    },
    {
        "ind": "101045",
        "baseindex": "01.045",
        "word": "dvitaya",
        "grp": "1",
        "index_in_grp": "45",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "dvitayaH;dvitayau;dvitaye-dvitayAH;dvitayam;dvitayau;dvitayAn;dvitayena;dvitayAbhyAm;dvitayaiH;dvitayAya;dvitayAbhyAm;dvitayebhyaH;dvitayAt-dvitayAd;dvitayAbhyAm;dvitayebhyaH;dvitayasya;dvitayayoH;dvitayAnAm;dvitaye;dvitayayoH;dvitayeSu;he dvitaya;he dvitayau;he dvitaye-dvitayAH"
    },
    {
        "ind": "101046",
        "baseindex": "01.046",
        "word": "alpa",
        "grp": "1",
        "index_in_grp": "46",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "alpaH;alpau;alpe-alpAH;alpam;alpau;alpAn;alpena;alpAbhyAm;alpaiH;alpAya;alpAbhyAm;alpebhyaH;alpAt-alpAd;alpAbhyAm;alpebhyaH;alpasya;alpayoH;alpAnAm;alpe;alpayoH;alpeSu;he alpa;he alpau;he alpe-alpAH"
    },
    {
        "ind": "101047",
        "baseindex": "01.047",
        "word": "ardha",
        "grp": "1",
        "index_in_grp": "47",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "ardhaH;ardhau;ardhe-ardhAH;ardham;ardhau;ardhAn;ardheNa;ardhAbhyAm;ardhaiH;ardhAya;ardhAbhyAm;ardhebhyaH;ardhAt-ardhAd;ardhAbhyAm;ardhebhyaH;ardhasya;ardhayoH;ardhAnAm;ardhe;ardhayoH;ardheSu;he ardha;he ardhau;he ardhe-ardhAH"
    },
    {
        "ind": "101048",
        "baseindex": "01.048",
        "word": "katipaya",
        "grp": "1",
        "index_in_grp": "48",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "katipayaH;katipayau;katipayAH;katipayam;katipayau;katipayAn;katipayena;katipayAbhyAm;katipayaiH;katipayAya;katipayAbhyAm;katipayebhyaH;katipayAt-katipayAd;katipayAbhyAm;katipayebhyaH;katipayasya;katipayayoH;katipayAnAm;katipaye;katipayayoH;katipayeSu;he katipaya;he katipayau;he katipayAH"
    },
    {
        "ind": "101049",
        "baseindex": "01.049",
        "word": "dvitIya",
        "grp": "1",
        "index_in_grp": "49",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "dvitIyaH;dvitIyau;dvitIyAH;dvitIyam;dvitIyau;dvitIyAn;dvitIyena;dvitIyAbhyAm;dvitIyaiH;dvitIyasmai-dvitIyAya;dvitIyAbhyAm;dvitIyebhyaH;dvitIyasmAt-dvitIyasmAd-dvitIyAt-dvitIyAd;dvitIyAbhyAm;dvitIyebhyaH;dvitIyasya;dvitIyayoH;dvitIyAnAm;dvitIyasmin-dvitIye;dvitIyayoH;dvitIyeSu;he dvitIya;he dvitIyau;he dvitIyAH"
    },
    {
        "ind": "101050",
        "baseindex": "01.050",
        "word": "tRtIya",
        "grp": "1",
        "index_in_grp": "50",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "tRtIyaH;tRtIyau;tRtIyAH;tRtIyam;tRtIyau;tRtIyAn;tRtIyena;tRtIyAbhyAm;tRtIyaiH;tRtIyasmai-tRtIyAya;tRtIyAbhyAm;tRtIyebhyaH;tRtIyasmAt-tRtIyasmAd-tRtIyAt-tRtIyAd;tRtIyAbhyAm;tRtIyebhyaH;tRtIyasya;tRtIyayoH;tRtIyAnAm;tRtIyasmin-tRtIye;tRtIyayoH;tRtIyeSu;he tRtIya;he tRtIyau;he tRtIyAH"
    },
    {
        "ind": "101051",
        "baseindex": "01.051",
        "word": "nirjara",
        "grp": "1",
        "index_in_grp": "51",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "nirjaraH;nirjarau-nirjarasau;nirjarAH-nirjarasaH;nirjaram-nirjarasam;nirjarau-nirjarasau;nirjarAn-nirjarasaH;nirjareNa-nirjarasA;nirjarAbhyAm;nirjaraiH;nirjarAya-nirjarase;nirjarAbhyAm;nirjarebhyaH;nirjarAt-nirjarAd-nirjarasaH;nirjarAbhyAm;nirjarebhyaH;nirjarasya-nirjarasaH;nirjarayoH-nirjarasoH;nirjarANAm-nirjarasAm;nirjarasi-nirjari;nirjarayoH-nirjarasoH;nirjareSu;he nirjara;he nirjarau-nirjarasau;he nirjarAH-nirjarasaH"
    },
    {
        "ind": "101052",
        "baseindex": "01.052",
        "word": "pAda",
        "grp": "1",
        "index_in_grp": "52",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "pAdaH;pAdau;pAdAH;pAdam;pAdau;pAdAn-padaH;pAdena-padA;pAdAbhyAm-padbhyAm;pAdaiH-padbhiH;pAdAya-pade;pAdAbhyAm-padbhyAm;pAdebhyaH-padbhyaH;pAdAt-pAdAd-padaH;pAdAbhyAm-padbhyAm;pAdebhyaH-padbhyaH;pAdasya-padaH;pAdayoH-padoH;pAdAnAm-padAm;pAde-padi;pAdayoH-padoH;pAdeSu-patsu;he pAda;he pAdau;he pAdAH"
    },
    {
        "ind": "101053",
        "baseindex": "01.053",
        "word": "danta",
        "grp": "1",
        "index_in_grp": "53",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "dantaH;dantau;dantAH;dantam;dantau;dantAn-dataH;dantena-datA;dantAbhyAm-dadbhyAm;dantaiH-dadbhiH;dantAya-date;dantAbhyAm-dadbhyAm;dantebhyaH-dadbhyaH;dantAt-dantAd-dataH;dantAbhyAm-dadbhyAm;dantebhyaH-dadbhyaH;dantasya-dataH;dantayoH-datoH;dantAnAm-datAm;dante-dati;dantayoH-datoH;danteSu-datsu;he danta;he dantau;he dantAH"
    },
    {
        "ind": "101054",
        "baseindex": "01.054",
        "word": "mAsa",
        "grp": "1",
        "index_in_grp": "54",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "mAsaH;mAsau;mAsAH;mAsam;mAsau;mAsAn-mAsaH;mAsena-mAsA;mAsAbhyAm-mAbhyAm;mAsaiH-mAbhiH;mAsAya-mAse;mAsAbhyAm-mAbhyAm;mAsebhyaH-mAbhyaH;mAsAt-mAsAd-mAsaH;mAsAbhyAm-mAbhyAm;mAsebhyaH-mAbhyaH;mAsasya-mAsaH;mAsayoH-mAsoH;mAsAnAm-mAsAm;mAse-mAsi;mAsayoH-mAsoH;mAseSu-mAssu-mAHsu;he mAsa;he mAsau;he mAsAH"
    },
    {
        "ind": "101055",
        "baseindex": "01.055",
        "word": "yUSa",
        "grp": "1",
        "index_in_grp": "55",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "yUSaH;yUSau;yUSAH;yUSam;yUSau;yUSAn-yUSNaH;yUSeNa-yuSNA;yUSAbhyAm-yUSabhyAm;yUSaiH-yUSabhiH;yUSAya-yUSNe;yUSAbhyAm-yUSabhyAm;yUSebhyaH-yUSabhyaH;yUSAt-yuSAd-yUSNaH;yUSAbhyAm-yUSabhyAm;yUSebhyaH-yUSabhyaH;yUSasya-yURSNaH;yUSayoH-yURSNoH;yUSANAm-yUSNAm;yUSe-yUSNi-yUSaNi;yUSayoH-yURSNoH;yUSeSu-yUSasu;he yUSa;he yUSau;he yUSAH"
    },
    {
        "ind": "101056",
        "baseindex": "01.056",
        "word": "doSa",
        "grp": "1",
        "index_in_grp": "56",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "doSaH;doSau;doSAH;doSam;doSau;doSAn-doSNaH;doSeNa-doSNA;doSAbhyAm-doSabhyAm;doSaiH-doSabhiH;doSAya-doSNe;doSAbhyAm-doSabhyAm;doSebhyaH-doSabhyaH;doSAt-doSAd-doSNaH;doSAbhyAm-doSabhyAm;doSebhyaH-doSabhyaH;doSasya-doSNaH;doSayoH-doSNoH;doSANAm-doSNAm;doSe-doSNi-doSaNi;doSayoH-doSNoH;doSeSu-doSasu;he doSa;he doSau;he doSAH"
    },
    {
        "ind": "101057",
        "baseindex": "01.057",
        "word": "dvyahna",
        "grp": "1",
        "index_in_grp": "57",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "dvyahnaH;dvyahnau;dvyahnAH;dvyahnam;dvyahnau;dvyahnAn;dvyahnena;dvyahnAbhyAm;dvyahnaiH;dvyahnAya;dvyahnAbhyAm;dvyahnebhyaH;dvyahnAt-dvyahnAd;dvyahnAbhyAm;dvyahnebhyaH;dvyahnasya;dvyahnayoH;dvyahnAnAm;dvyahne-dvyahani-dvyahni;dvyahnayoH;dvyahneSu;he dvyahna;he dvyahnau;he dvyahnaH"
    },
    {
        "ind": "101058",
        "baseindex": "01.058",
        "word": "gRha",
        "grp": "1",
        "index_in_grp": "58",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "-;-;gRhAH;-;-;gRhAn;-;-;gRhaiH;-;-;gRhebhyaH;-;-;gRhebhyaH;-;-;gRhANAm;-;-;gRheSu;-;-;he gRhAH"
    },
    {
        "ind": "101059",
        "baseindex": "01.059",
        "word": "dAra",
        "grp": "1",
        "index_in_grp": "59",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "-;-;dArAH;-;-;dArAn;-;-;dAraiH;-;-;dArebhyaH;-;-;dArebhyaH;-;-;dArANAm;-;-;dAreSu;-;-;he dArAH"
    },
    {
        "ind": "101060",
        "baseindex": "01.060",
        "word": "jAra",
        "grp": "1",
        "index_in_grp": "60",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "-;-;jArAH;-;-;jArAn;-;-;jAraiH;-;-;jArebhyaH;-;-;jArebhyaH;-;-;jArANAm;-;-;jAreSu;-;-;he jArAH"
    },
    {
        "ind": "101061",
        "baseindex": "01.061",
        "word": "pAJcAla",
        "grp": "1",
        "index_in_grp": "61",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "pAJcAlaH;pAJcAlau;paJcAlAH;pAJcAlam;pAJcAlau;paJcAlAn;pAJcAlena;pAJcAlAbhyAm;paJcAlaiH;pAJcAlAya;pAJcAlAbhyAm;paJcAlebhyaH;pAJcAlAt-pAJcAlAd;pAJcAlAbhyAm;paJcAlebhyaH;pAJcAlasya;pAJcAlayoH;paJcAlAnAm;pAJcAle;pAJcAlayoH;paJcAleSu;he pAJcAla;he pAJcAlau;he paJcAlAH"
    },
    {
        "ind": "101062",
        "baseindex": "01.062",
        "word": "yAska",
        "grp": "1",
        "index_in_grp": "62",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "yAskaH;yAskau;yaskAH;yAskam;yAskau;yaskAn;yAskena;yAskAbhyAm;yaskaiH;yAskAya;yAskAbhyAm;yaskebhyaH;yAskAt-yAskAd;yAskAbhyAm;yaskebhyaH;yAskasya;yAskayoH;yaskAnAm;yAske;yAskayoH;yaskeSu;he yAska;he yAskau;he yaskAH"
    },
    {
        "ind": "101063",
        "baseindex": "01.063",
        "word": "khArapAyaNa",
        "grp": "1",
        "index_in_grp": "63",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "khArapAyaNaH;khArapAyaNau;kharapAH;khArapAyaNam;khArapAyaNau;kharapAn;khArapAyaNena;khArapAyaNAbhyAm;kharapaiH;khArapAyaNAya;khArapAyaNAbhyAm;kharapebhyaH;khArapAyaNAt-khArapAyaNAd;khArapAyaNAbhyAm;kharapebhyaH;khArapAyaNasya;khArapAyaNayoH;kharapAnAm;khArapAyaNe;khArapAyaNayoH;kharapeSu;he khArapAyaNa;he khArapAyaNau;he kharapAH"
    },
    {
        "ind": "101064",
        "baseindex": "01.064",
        "word": "bAsteya",
        "grp": "1",
        "index_in_grp": "64",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "bAsteyaH;bAsteyau;bastayaH;bAsteyam;bAsteyau;bastIn;bAsteyena;bAsteyAbhyAm;bastibhiH;bAsteyAya;bAsteyAbhyAm;bastibhyaH;bAsteyAt-bAsteyAd;bAsteyAbhyAm;bastibhyaH;bAsteyasya;bAsteyayoH;bastInAm;bAsteye;bAsteyayoH;bastiSu;he bAsteya;he bAsteyau;he bastayaH"
    },
    {
        "ind": "101065",
        "baseindex": "01.065",
        "word": "maitreya",
        "grp": "1",
        "index_in_grp": "65",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "maitreyaH;maitreyau;mitrayavaH;maitreyam;maitreyau;mitrayUn;maitreyeNa;maitreyAbhyAm;mitrayubhiH;maitreyAya;maitreyAbhyAm;mitrayubhyaH;maitreyAt-maitreyAd;maitreyAbhyAm;mitrayubhyaH;maitreyasya;maitreyayoH;mitrayUNAm;maitreye;maitreyayoH;mitrayuSu;he maitreya;he maitreyau;he mitrayavaH"
    },
    {
        "ind": "101066",
        "baseindex": "01.066",
        "word": "gArgya",
        "grp": "1",
        "index_in_grp": "66",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "gArgyaH;gArgyau;gargAH;gArgyam;gArgyau;gargAn;gArgyeNa;gArgyAbhyAm;gargaiH;gArgyAya;gArgyAbhyAm;gargebhyaH;gArgyAt-gArgyAd;gArgyAbhyAm;gargebhyaH;gArgyasya;gArgyayoH;gargANAm;gArgye;gArgyayoH;gargeSu;he gArgya;he gArgyau;he gargAH"
    },
    {
        "ind": "101067",
        "baseindex": "01.067",
        "word": "Atreya",
        "grp": "1",
        "index_in_grp": "67",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "AtreyaH;Atreyau;atreyaH;Atreyam;Atreyau;atrIn;AtreyeNa;AtreyAbhyAm;atribhiH;AtreyAya;AtreyAbhyAm;atribhyaH;AtreyAt-AtreyAd;AtreyAbhyAm;atribhyaH;Atreyasya;AtreyayoH;atrINAm;Atreye;AtreyayoH;atriSu;he Atreya;he Atreyau;he atrayaH"
    },
    {
        "ind": "101068",
        "baseindex": "01.068",
        "word": "bhArgava",
        "grp": "1",
        "index_in_grp": "68",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "bhArgavaH;bhArgavau;bhRgavaH;bhArgavam;bhArgavau;bhRgUn;bhArgaveNa;bhArgavAbhyAm;bhRgubhiH;bhArgavAya;bhArgavAbhyAm;bhRgubhyaH;bhArgavAt-bhArgavAd;bhArgavAbhyAm;bhRgubhyaH;bhArgavasya;bhArgavayoH;bhRgUNAm;bhArgave;bhArgavayoH;bhRguSu;he bhArgava;he bhArgavau;he bhRgavaH"
    },
    {
        "ind": "101069",
        "baseindex": "01.069",
        "word": "kautsa",
        "grp": "1",
        "index_in_grp": "69",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "kautsaH;kautsau;kutsAH;kautsam;kautsau;kutsAn;kautsena;kautsAbhyAm;kutsaiH;kautsAya;kautsAbhyAm;kutsebhyaH;kautsAt-kautsAd;kautsAbhyAm;kutsebhyaH;kautsasya;kautsayoH;kutsAnAm;kautse;kautsayoH;kutseSu;he kautsa;he kautsau;he kutsAH"
    },
    {
        "ind": "101070",
        "baseindex": "01.070",
        "word": "vAsiSTha",
        "grp": "1",
        "index_in_grp": "70",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "vAsiSThaH;vAsiSThau;vasiSThAH;vAsiSTham;vAsiSThau;vasiSThAn;vAsiSThena;vAsiSThAbhyAm;vasiSThaiH;vAsiSThAya;vAsiSThAbhyAm;vasiSThebhyaH;vAsiSThAt-vAsiSThAd;vAsiSThAbhyAm;vasiSThebhyaH;vAsiSThasya;vAsiSThayoH;vasiSThAnAm;vAsiSThe;vAsiSThayoH;vasiSTheSu;he vAsiSTha;he vAsiSThau;he vasiSThAH"
    },
    {
        "ind": "101071",
        "baseindex": "01.071",
        "word": "gautama",
        "grp": "1",
        "index_in_grp": "71",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "gautamaH;gautamau;gotamAH;gautamam;gautamau;gotamAn;gautamena;gautamAbhyAm;gotamaiH;gautamAya;gautamAbhyAm;gotamebhyaH;gautamAt-gautamAd;gautamAbhyAm;gotamebhyaH;gautamasya;gautamayoH;gotamAnAm;gautame;gautamayoH;gotameSu;he gautama;he gautamau;he gotamAH"
    },
    {
        "ind": "101072",
        "baseindex": "01.072",
        "word": "AGgirasa",
        "grp": "1",
        "index_in_grp": "72",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "AGgirasaH;AGgirasau;aGgirasaH;AGgirasam;AGgirasau;aGgirasaH;AGgirasena;AGgirasAbhyAm;aGgirobhiH;AGgirasAya;AGgirasAbhyAm;aGgirobhyaH;AGgirasAt-AGgirasAd;AGgirasAbhyAm;aGgirobhyaH;AGgirasasya;AGgirasayoH;aGgirasAm;AGgirase;AGgirasayoH;aGgiraHsu-aGgirassu;he AGgirasa;he AGgirasau;he aGgirasaH"
    },
    {
        "ind": "101073",
        "baseindex": "01.073",
        "word": "Agastya",
        "grp": "1",
        "index_in_grp": "73",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "AgastyaH;Agastyau;agastyAH;Agastyam;Agastyau;agastyAn;Agastyena;AgastyAbhyAm;agastyaiH;AgastyAya;AgastyAbhyAm;agastyebhyaH;AgastyAt-AgastyAd;AgastyAbhyAm;agastyebhyaH;Agastyasya;AgastyayoH;agastyAnAm;Agastye;AgastyayoH;agastyeSu;he Agastya;he Agastyau;he agastyAH"
    },
    {
        "ind": "101074",
        "baseindex": "01.074",
        "word": "kauNDinya",
        "grp": "1",
        "index_in_grp": "74",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "kauNDinyaH;kauNDinyau;kuNDinAH;kauNDinyam;kauNDinyau;kuNDinAn;kauNDinyena;kauNDinyAbhyAm;kuNDinaiH;kauNDinyAya;kauNDinyAbhyAm;kuNDinebhyaH;kauNDinyAt-kauNDinyAd;kauNDinyAbhyAm;kuNDinebhyaH;kauNDinyasya;kauNDinyayoH;kuNDinAnAm;kauNDinye;kauNDinyayoH;kuNDineSu;he kauNDinya;he kauNDinyau;he kuNDinAH"
    },
    {
        "ind": "101075",
        "baseindex": "01.075",
        "word": "ca",
        "grp": "1",
        "index_in_grp": "75",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "ca;ca;ca;ca;ca;ca;ca;ca;ca;ca;ca;ca;ca;ca;ca;ca;ca;ca;ca;ca;ca;ca;ca;ca"
    },
    {
        "ind": "101076",
        "baseindex": "01.076",
        "word": "pratyeka",
        "grp": "1",
        "index_in_grp": "76",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "pratyekam;pratyekam;pratyekam;pratyekam;pratyekam;pratyekam;pratyekam / pratyekena;pratyekam . pratyekAbhyAm;pratyekam/pratyekaiH;pratyekam;pratyekam;pratyekam;pratyekasmAt-pratyekasmAd;pratyekAbhyAm;pratyekebhyaH;pratyekam;pratyekam;pratyekam;pratyekam/ pratyekasmin;pratyekam/pratyekayoH;pratyekam/pratyekeSu;pratyekam;pratyekam;pratyekam"
    },
    {
        "ind": "102001",
        "baseindex": "02.001",
        "word": "vizvapA",
        "grp": "2",
        "index_in_grp": "1",
        "end": "AkArAntaH",
        "linga": "P",
        "forms": "vizvapAH;vizvapau;vizvapAH;vizvapAm;vizvapau;vizvapaH;vizvapA;vizvapAbhyAm;vizvapAbhiH;vizvape;vizvapAbhyAm;vizvapAbhyaH;vizvapaH;vizvapAbhyAm;vizvapAbhyaH;vizvapaH;vizvapoH;vizvapAm;vizvapi;vizvapoH;vizvapAsu;he vizvapAH;he vizvapau;he vizvapAH"
    },
    {
        "ind": "102002",
        "baseindex": "02.002",
        "word": "hAhA",
        "grp": "2",
        "index_in_grp": "2",
        "end": "AkArAntaH",
        "linga": "P",
        "forms": "hAhAH;hAhau;hAhAH;hAhAm;hAhau;hAhAn;hAhA;hAhAbhyAm;hAhAbhiH;hAhai;hAhAbhyAm;hAhAbhyaH;hAhAH;hAhAbhyAm;hAhAbhyaH;hAhAH;hAhauH;hAhAm;hAhe;hAhauH;hAhAsu;he hAhAH;he hAhau;he hAhAH"
    },
    {
        "ind": "103001",
        "baseindex": "03.001",
        "word": "i",
        "grp": "3",
        "index_in_grp": "1",
        "end": "ikArAntaH",
        "linga": "P",
        "forms": "iH;I;ayaH;im;I;In;inA;ibhyAm;ibhiH;aye ;ibhyAm;ibhyaH;eH;ibhyAm;ibhyaH;eH;yoH;InAm;au;yoH;iSu;he e;he I;e ayaH"
    },
    {
        "ind": "103002",
        "baseindex": "03.002",
        "word": "kavi",
        "grp": "3",
        "index_in_grp": "2",
        "end": "ikArAntaH",
        "linga": "P",
        "forms": "kaviH;kavI;kavayaH;kavim;kavI;kavIn;kavinA;kavibhyAm;kavibhiH;kavaye;kavibhyAm;kavibhyaH;kaveH;kavibhyAm;kavibhyaH;kaveH;kavyoH;kavInAm;kavau;kavyoH;kaviSu;he kave;he kavI;he kavayaH"
    },
    {
        "ind": "103003",
        "baseindex": "03.003",
        "word": "hari",
        "grp": "3",
        "index_in_grp": "3",
        "end": "ikArAntaH",
        "linga": "P",
        "forms": "hariH;harI;harayaH;harim;harI;harIn;hariNA;haribhyAm;haribhiH;haraye;haribhyAm;haribhyaH;hareH;haribhyAm;haribhyaH;hareH;haryoH;harINAm;harau;haryoH;hariSu;he hare;he harI;he harayaH"
    },
    {
        "ind": "103004",
        "baseindex": "03.004",
        "word": "sakhi",
        "grp": "3",
        "index_in_grp": "4",
        "end": "ikArAntaH",
        "linga": "P",
        "forms": "sakhA;sakhAyau;sakhAyaH;sakhAyam;sakhAyau;sakhIn;sakhyA;sakhibhyAm;sakhibhiH;sakhye;sakhibhyAm;sakhibhyaH;sakhyuH;sakhibhyAm;sakhibhyaH;sakhyuH;sakhyoH;sakhInAm;sakhyau;sakhyoH;sakhiSu;he sakhe;he sakhAyau;he sakhAyaH"
    },
    {
        "ind": "103005",
        "baseindex": "03.005",
        "word": "susakhi",
        "grp": "3",
        "index_in_grp": "5",
        "end": "ikArAntaH",
        "linga": "P",
        "forms": "susakhA;susakhAyau;susakhAyaH;susakhAyam;susakhAyau;susakhIn;susakhinA;susakhibhyAm;susakhibhiH;susakhaye;susakhibhyAm;susakhibhyaH;susakheH;susakhibhyAm;susakhibhyaH;susakheH;susakhyoH;susakhInAm;susakhau;susakhyoH;susakhiSu;he susakhe;he susakhAyau;he susakhAyaH"
    },
    {
        "ind": "103006",
        "baseindex": "03.006",
        "word": "pati",
        "grp": "3",
        "index_in_grp": "6",
        "end": "ikArAntaH",
        "linga": "P",
        "forms": "patiH;patI;patayaH;patim;patI;patIn;patyA;patibhyAm;patibhiH;patye;patibhyAm;patibhyaH;patyuH;patibhyAm;patibhyaH;patyuH;patyoH;patInAm;patyau;patyoH;patiSu;he pate;he patI;he patayaH"
    },
    {
        "ind": "103007",
        "baseindex": "03.007",
        "word": "bhUpati",
        "grp": "3",
        "index_in_grp": "7",
        "end": "ikArAntaH",
        "linga": "P",
        "forms": "bhUpatiH;bhUpatI;bhUpatayaH;bhUpatim;bhUpatI;bhUpatIn;bhUpatinA;bhUpatibhyAm;bhUpatibhiH;bhUpataye;bhUpatibhyAm;bhUpatibhyaH;bhUpateH;bhUpatibhyAm;bhUpatibhyaH;bhUpateH;bhUpatyoH;bhUpatInAm;bhUpatau;bhUpatyoH;bhUpatiSu;he bhUpate;he bhUpatI;he bhUpatayaH"
    },
    {
        "ind": "103008",
        "baseindex": "03.008",
        "word": "kati",
        "grp": "3",
        "index_in_grp": "8",
        "end": "ikArAntaH",
        "linga": "P",
        "forms": "-;-;kati;-;-;kati;-;-;katibhiH;-;-;katibhyaH;-;-;katibhyaH;-;-;katInAm;-;-;katiSu;-;-;he kati"
    },
    {
        "ind": "103009",
        "baseindex": "03.009",
        "word": "tri",
        "grp": "3",
        "index_in_grp": "9",
        "end": "ikArAntaH",
        "linga": "P",
        "forms": "-;-;trayaH;-;-;trIn;-;-;tribhiH;-;-;tribhyaH;-;-;tribhyaH;-;-;trayANAm;-;-;triSu;-;-;he trayaH"
    },
    {
        "ind": "103010",
        "baseindex": "03.010",
        "word": "priyatri",
        "grp": "3",
        "index_in_grp": "10",
        "end": "ikArAntaH",
        "linga": "P",
        "forms": "priyatriH;priyatrI;priyatrayaH;priyatrim;priyatrI;priyatrIn;priyatriNA;priyatribhyAm;priyatribhiH;priyatraye;priyatribhyAm;priyatribhyaH;priyatreH;priyatribhyAm;priyatribhyaH;priyatreH;priyatrayoH;priyatrayANAm;priyatrau;priyatrayoH;priyatriSu;he priyatre;he priyatrI;he priyatrayaH"
    },
    {
        "ind": "103011",
        "baseindex": "03.011",
        "word": "priyatri",
        "grp": "3",
        "index_in_grp": "11",
        "end": "ikArAntaH",
        "linga": "P",
        "forms": "priyatisA;priyatisrau;priyatisraH;priyatisram;priyatisrau;priyatisraH;priyatisrA;priyatisRbhyAm;priyatisRbhiH;priyatisre;priyatisRbhyAm;priyatisRbhyaH;priyatisraH;priyatisRbhyAm;priyatisRbhyaH;priyatisraH;priyatisroH;priyatisRNAm;priyatisra;priyatisroH;priyatisRSu;he priyatisA;he priyatisrau;he priyatisraH"
    },
    {
        "ind": "103012",
        "baseindex": "03.012",
        "word": "atistri",
        "grp": "3",
        "index_in_grp": "12",
        "end": "ikArAntaH",
        "linga": "P",
        "forms": "atistri;atistriyau;atistriyaH;atistriyam-atistrim;atistriyau;atistrIn-atistriyaH;atistriNA;atistribhyAm;atistribhiH;atistraye;atistribhyAm;atistribhyaH;atistreH;atistribhyAm;atistribhyaH;atistreH;atistriyoH;atistrINAm;atistrau;atistriyoH;atistriSu;he atistre;he atistriyau;he atistriyaH"
    },
    {
        "ind": "103013",
        "baseindex": "03.013",
        "word": "dvi",
        "grp": "3",
        "index_in_grp": "13",
        "end": "ikArAntaH",
        "linga": "P",
        "forms": "-;dvau;-;-;dvau;-;-;dvAbhyAm;-;-;dvAbhyAm;-;-;dvAbhyAm;-;-;dvayoH;-;-;dvayoH;-;-;-;-"
    },
    {
        "ind": "103014",
        "baseindex": "03.014",
        "word": "priyadvi",
        "grp": "3",
        "index_in_grp": "14",
        "end": "ikArAntaH",
        "linga": "P",
        "forms": "priyadviH;priyadvI;priyadvayaH;priyadvim;priyadvI;priyadvIn;priyadviNA;priyadvibhyAm;priyadvibhiH;priyadvaye;priyadvibhyAm;priyadvibhyaH;priyadveH;priyadvibhyAm;priyadvibhyaH;priyadveH;priyadvayoH;priyadvayANAm;priyadvau;priyadvayoH;priyadviSu;he priyadve;he priyadvI;he priyadvayaH"
    },
    {
        "ind": "103015",
        "baseindex": "03.015",
        "word": "sAdAmatti",
        "grp": "3",
        "index_in_grp": "15",
        "end": "ikArAntaH",
        "linga": "P",
        "forms": "sAdAmattiH;sAdAmattI;sadAmattAH;sAdAmattim;sAdAmattI;sadAmattAn;sAdAmattinA;sAdAmattibhyAm;sadAmattaiH;sAdAmattaye;sAdAmattibhyAm;sadAmattebhyaH;sAdAmatteH;sAdAmattibhyAm;sadAmattebhyaH;sAdAmatteH;sAdAmattyoH;sadAmattANAm;sAdAmattau;sAdAmattyoH;sadAmatteSu;he sAdAmatte;he sAdAmattI;he sadAmattAH"
    },
    {
        "ind": "103016",
        "baseindex": "03.016",
        "word": "pAnnAgAri",
        "grp": "3",
        "index_in_grp": "16",
        "end": "ikArAntaH",
        "linga": "P",
        "forms": "pAnnAgAriH;pAnnAgArI;pannAgArAH;pAnnAgArim;pAnnAgArI;pannAgArAn;pAnnAgArinA;pAnnAgAribhyAm;pannAgAraiH;pAnnAgAraye;pAnnAgAribhyAm;pannAgArebhyaH;pAnnAgAreH;pAnnAgAribhyAm;pannAgArebhyaH;pAnnAgAreH;pAnnAgAryoH;pannAgArANAm;pAnnAgArau;pAnnAgAryoH;pannAgAreSu;he pAnnAgAre;he pAnnAgArI;he pannAgArAH"
    },
    {
        "ind": "103017",
        "baseindex": "03.017",
        "word": "auDulomi",
        "grp": "3",
        "index_in_grp": "17",
        "end": "ikArAntaH",
        "linga": "P",
        "forms": "auDulomiH;auDulomI;uDulomAH;auDulomim;auDulomI;uDulomAn;auDulominA;auDulomibhyAm;uDulomaiH;auDulomaye;auDulomibhyAm;uDulomebhyaH;auDulomeH;auDulomibhyAm;uDulomebhyaH;auDulomeH;auDulomyoH;uDulomAnAm;auDulomau;auDulomyoH;uDulomeSu;he auDulome;he auDulomI;he uDulomAH"
    },
    {
        "ind": "103018",
        "baseindex": "03.018",
        "word": "zAralomi",
        "grp": "3",
        "index_in_grp": "18",
        "end": "ikArAntaH",
        "linga": "P",
        "forms": "zAralomiH;zAralomI;zaralomAH;zAralomim;zAralomI;zaralomAn;zAralominA;zAralomibhyAm;zaralomaiH;zAralomaye;zAralomibhyAm;zaralomebhyaH;zAralomeH;zAralomibhyAm;zaralomebhyaH;zAralomeH;zAralomyoH;zaralomAnAm;zAralomau;zAralomyoH;zaralomeSu;he zAralome;he zAralomI;he zaralomAH"
    },
    {
        "ind": "103019",
        "baseindex": "03.019",
        "word": "yathAzakti",
        "grp": "3",
        "index_in_grp": "19",
        "end": "ikArAntaH",
        "linga": "P",
        "forms": "yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti;yathAzakti"
    },
    {
        "ind": "104001",
        "baseindex": "04.001",
        "word": "papI",
        "grp": "4",
        "index_in_grp": "1",
        "end": "IkArAntaH",
        "linga": "P",
        "forms": "papIH;papyau;papyaH;papIm;papyau;papIn;papyA;papIbhyAm;papIbhiH;papye;papIbhyAm;papIbhyaH;papyaH;papIbhyAm;papIbhyaH;papyaH;papyoH;papyAm;papI;papyoH;papISu;he papIH;he papyau;he papyaH"
    },
    {
        "ind": "104002",
        "baseindex": "04.002",
        "word": "vAtapramI",
        "grp": "4",
        "index_in_grp": "2",
        "end": "IkArAntaH",
        "linga": "P",
        "forms": "vAtapramIH;vAtapramyau;vAtapramyaH;vAtapramIm;vAtapramyau;vAtapramIn;vAtapramyA;vAtapramIbhyAm;vAtapramIbhiH;vAtapramye;vAtapramIbhyAm;vAtapramIbhyaH;vAtapramyaH;vAtapramIbhyAm;vAtapramIbhyaH;vAtapramyaH;vAtapramyoH;vAtapramyAm;vAtapramI;vAtapramyoH;vAtapramISu;he vAtapramIH;he vAtapramyau;he vAtapramyaH"
    },
    {
        "ind": "104003",
        "baseindex": "04.003",
        "word": "yayI",
        "grp": "4",
        "index_in_grp": "3",
        "end": "IkArAntaH",
        "linga": "P",
        "forms": "yayI;yayyau;yayyaH;yayIm;yayyau;yayIn;yayyA;yayIbhyAm;yayIbhiH;yayye;yayIbhyAm;yayIbhyaH;yayyaH;yayIbhyAm;yayIbhyaH;yayyaH;yayyoH;yayyAm;yayI;yayyoH;yayISu;he yayIH;he yayyau;he yayyaH"
    },
    {
        "ind": "104004",
        "baseindex": "04.004",
        "word": "bahuzreyasI",
        "grp": "4",
        "index_in_grp": "4",
        "end": "IkArAntaH",
        "linga": "P",
        "forms": "bahuzreyasIH;bahuzreyasyau;bahuzreyasyaH;bahuzreyasIm;bahuzreyasyau;bahuzreyasIn;bahuzreyasyA;bahuzreyasIbhyAm;bahuzreyasIbhiH;bahuzreyasyai;bahuzreyasIbhyAm;bahuzreyasIbhyaH;bahuzreyasyAH;bahuzreyasIbhyAm;bahuzreyasIbhyaH;bahuzreyasyAH;bahuzreyasyoH;bahuzreyasInAm;bahuzreyasyAm;bahuzreyasyoH;bahuzreyasISu;he bahuzreyasi;he bahuzreyasyau;he bahuzreyasyaH"
    },
    {
        "ind": "104005",
        "baseindex": "04.005",
        "word": "atilakSmI",
        "grp": "4",
        "index_in_grp": "5",
        "end": "IkArAntaH",
        "linga": "P",
        "forms": "atilakSmIH;atilakSmyau;atilakSmyaH;atilakSmIm;atilakSmyau;atilakSmIn;atilakSmyA;atilakSmIbhyAm;atilakSmIbhiH;atilakSmyai;atilakSmIbhyAm;atilakSmIbhyaH;atilakSmyAH;atilakSmIbhyAm;atilakSmIbhyaH;atilakSmyAH;atilakSmyoH;atilakSmINAm;atilakSmyAm;atilakSmyoH;atilakSmISu;he atilakSmi;he atilakSmyau;he atilakSmyaH"
    },
    {
        "ind": "104006",
        "baseindex": "04.006",
        "word": "kumArI",
        "grp": "4",
        "index_in_grp": "6",
        "end": "IkArAntaH",
        "linga": "P",
        "forms": "kumArI;kumAryau;kumAryaH;kumArIm;kumAryau;kumArIH;kumAryA;kumArIbhyAm;kumArIbhiH;kumAryai;kumArIbhyAm;kumArIbhyaH;kumAryAH;kumArIbhyAm;kumArIbhyaH;kumAryAH;kumAryoH;kumArINAm;kumAryAm;kumAryoH;kumArISu;he kumAri;he kumAryau;he kumAryaH"
    },
    {
        "ind": "104007",
        "baseindex": "04.007",
        "word": "pradhI",
        "grp": "4",
        "index_in_grp": "7",
        "end": "IkArAntaH",
        "linga": "P",
        "forms": "pradhIH;pradhyau;pradhyaH;pradhyam;pradhyau;pradhyaH;pradhyA;pradhIbhyAm;pradhIbhiH;pradhyai;pradhIbhyAm;pradhIbhyaH;pradhyAH;pradhIbhyAm;pradhIbhyaH;pradhyAH;pradhyoH;pradhInAm;pradhyAm;pradhyoH;pradhISu;he pradhi;he pradhyau;he pradhyaH"
    },
    {
        "ind": "104008",
        "baseindex": "04.008",
        "word": "pradhI",
        "grp": "4",
        "index_in_grp": "8",
        "end": "IkArAntaH",
        "linga": "P",
        "forms": "pradhIH;pradhyau;pradhyaH;pradhyam;pradhyau;pradhyaH;pradhyA;pradhIbhyAm;pradhIbhiH;pradhye;pradhIbhyAm;pradhIbhyaH;pradhyaH;pradhIbhyAm;pradhIbhyaH;pradhyaH;pradhyoH;pradhyAm;pradhyi;pradhyoH;pradhISu;he pradhIH;he pradhyau;he pradhyaH"
    },
    {
        "ind": "104009",
        "baseindex": "04.009",
        "word": "unnI",
        "grp": "4",
        "index_in_grp": "9",
        "end": "IkArAntaH",
        "linga": "P",
        "forms": "unnIH;unyau;unyaH;unyam;unyau;unyaH;unyA;unnIbhyAm;unnIbhiH;unye;unnIbhyAm;unnIbhyaH;unyaH;unnIbhyAm;unnIbhyaH;unyaH;unyoH;unyAm;unyAm;unyoH;unnISu;he unnIH;he unyau;he unyaH"
    },
    {
        "ind": "104010",
        "baseindex": "04.010",
        "word": "grAmaNI",
        "grp": "4",
        "index_in_grp": "10",
        "end": "IkArAntaH",
        "linga": "P",
        "forms": "grAmaNIH;grAmaNyau;grAmaNyaH;grAmaNyam;grAmaNyau;grAmaNyaH;grAmaNyA;grAmaNIbhyAm;grAmaNIbhiH;grAmaNye;grAmaNIbhyAm;grAmaNIbhyaH;grAmaNyaH;grAmaNIbhyAm;grAmaNIbhyaH;grAmaNyaH;grAmaNyoH;grAmaNyAm;grAmaNyAm;grAmaNyoH;grAmaNISu;he grAmaNIH;he grAmaNyau;he grAmaNyaH"
    },
    {
        "ind": "104011",
        "baseindex": "04.011",
        "word": "nI",
        "grp": "4",
        "index_in_grp": "11",
        "end": "IkArAntaH",
        "linga": "P",
        "forms": "nIH;niyau;niyaH;niyam;niyau;niyaH;niyA;nIbhyAm;nIbhiH;niye;nIbhyAm;nIbhyaH;niyaH;nIbhyAm;nIbhyaH;niyaH;niyoH;niyAm;niyAm;niyoH;nISu;he nIH;he niyau;he niyaH"
    },
    {
        "ind": "104012",
        "baseindex": "04.012",
        "word": "suzrI",
        "grp": "4",
        "index_in_grp": "12",
        "end": "IkArAntaH",
        "linga": "P",
        "forms": "suzrIH;suzriyau;suzriyaH;suzriyam;suzriyau;suzriyaH;suzriyA;suzrIbhyAm;suzrIbhiH;suzriye;suzrIbhyAm;suzrIbhyaH;suzriyaH;suzrIbhyAm;suzrIbhyaH;suzriyaH;suzriyoH;suzriyAm;suzriyi;suzriyoH;suzrISu;he suzrIH;he suzriyau;he suzriyaH"
    },
    {
        "ind": "104013",
        "baseindex": "04.013",
        "word": "zuddhadhI",
        "grp": "4",
        "index_in_grp": "13",
        "end": "IkArAntaH",
        "linga": "P",
        "forms": "zuddhadhIH;zuddhadhiyau;zuddhadhiyaH;zuddhadhiyam;zuddhadhiyau;zuddhadhiyaH;zuddhadhiyA;zuddhadhIbhyAm;zuddhadhIbhiH;zuddhadhiye;zuddhadhIbhyAm;zuddhadhIbhyaH;zuddhadhiyaH;zuddhadhIbhyAm;zuddhadhIbhyaH;zuddhadhiyaH;zuddhadhiyoH;zuddhadhiyAm;zuddhadhiyi;zuddhadhiyoH;zuddhadhISu;he zuddhadhIH;he zuddhadhiyau;he zuddhadhiyaH"
    },
    {
        "ind": "104014",
        "baseindex": "04.014",
        "word": "sudhI",
        "grp": "4",
        "index_in_grp": "14",
        "end": "IkArAntaH",
        "linga": "P",
        "forms": "sudhIH;sudhiyau;sudhiyaH;sudhiyam;sudhiyau;sudhiyaH;sudhiyA;sudhIbhyAm;sudhIbhiH;sudhiye;sudhIbhyAm;sudhIbhyaH;sudhiyaH;sudhIbhyAm;sudhIbhyaH;sudhiyaH;sudhiyoH;sudhiyAm;sudhiyi;sudhiyoH;sudhISu;he sudhIH;he sudhiyau;he sudhiyaH"
    },
    {
        "ind": "104015",
        "baseindex": "04.015",
        "word": "zuSkI",
        "grp": "4",
        "index_in_grp": "15",
        "end": "IkArAntaH",
        "linga": "P",
        "forms": "zuSkIH;zuSkiyau;zuSkiyaH;zuSkiyam;zuSkiyau;zuSkiyaH;zuSkiyA;zuSkIbhyAm;zuSkIbhiH;zuSkiye;zuSkIbhyAm;zuSkIbhyaH;zuSkiyaH;zuSkIbhyAm;zuSkIbhyaH;zuSkiyaH;zuSkiyoH;zuSkiyAm;zuSkiyi;zuSkiyoH;zuSkISu;he zuSkIH;he zuSkiyau;he zuSkiyaH"
    },
    {
        "ind": "104016",
        "baseindex": "04.016",
        "word": "pakvI",
        "grp": "4",
        "index_in_grp": "16",
        "end": "IkArAntaH",
        "linga": "P",
        "forms": "pakvIH;pakviyau;pakviyaH;pakviyam;pakviyau;pakviyaH;pakviyA;pakvIbhyAm;pakvIbhiH;pakviye;pakvIbhyAm;pakvIbhyaH;pakviyaH;pakvIbhyAm;pakvIbhyaH;pakviyaH;pakviyoH;pakviyAm;pakviyi;pakviyoH;pakvISu;he pakvIH;he pakviyau;he pakviyaH"
    },
    {
        "ind": "104017",
        "baseindex": "04.017",
        "word": "sakhI",
        "grp": "4",
        "index_in_grp": "17",
        "end": "IkArAntaH",
        "linga": "P",
        "forms": "sakhA;sakhAyau;sakhAyaH;sakhAyam;sakhAyau;sakhyaH;sakhyA;sakhIbhyAm;sakhIbhiH;sakhye;sakhIbhyAm;sakhIbhyaH;sakhyuH;sakhIbhyAm;sakhIbhyaH;sakhyuH;sakhyoH;sakhyAm;sakhyau;sakhyoH;sakhISu;he sakhIH;he sakhAyau;he sakhAyaH"
    },
    {
        "ind": "104018",
        "baseindex": "04.018",
        "word": "sakhI",
        "grp": "4",
        "index_in_grp": "18",
        "end": "IkArAntaH",
        "linga": "P",
        "forms": "sakhIH;sakhyau;sakhyaH;sakhyam;sakhyau;sakhyaH;sakhyA;sakhIbhyAm;sakhIbhiH;sakhye;sakhIbhyAm;sakhIbhyaH;sakhyuH;sakhIbhyAm;sakhIbhyaH;sakhyuH;sakhyoH;sakhyAm;sakhyi;sakhyoH;sakhISu;he sakhIH;he sakhyau;he sakhyaH"
    },
    {
        "ind": "105002",
        "baseindex": "05.002",
        "word": "zambhu",
        "grp": "5",
        "index_in_grp": "2",
        "end": "ukArAntaH ",
        "linga": "P",
        "forms": "zambhuH;zambhU;zambhavaH;zambhum;zambhU;zambhUn;zambhunA;zambhubhyAm;zambhubhiH;zambhave;zambhubhyAm;zambhubhyaH;zambhoH;zambhubhyAm;zambhubhyaH;zambhoH;zambhvoH;zambhUnAm;zambhau;zambhvoH;zambhuSu;he zambho;he zambhU;he zambhavaH"
    },
    {
        "ind": "105003",
        "baseindex": "05.003",
        "word": "guru",
        "grp": "5",
        "index_in_grp": "3",
        "end": "ukArAntaH ",
        "linga": "P",
        "forms": "guruH;gurU;guravaH;gurum;gurU;gurUn;guruNA;gurubhyAm;gurubhiH;gurave;gurubhyAm;gurubhyaH;guroH;gurubhyAm;gurubhyaH;guroH;gurvoH;gurUNAm;gurau;gurvoH;guruSu;he guro;he gurU;he guravaH"
    },
    {
        "ind": "105004",
        "baseindex": "05.004",
        "word": "kroSTu",
        "grp": "5",
        "index_in_grp": "4",
        "end": "ukArAntaH ",
        "linga": "P",
        "forms": "kroSTA;kroSTArau;kroSTAraH;kroSTAram;kroSTArau;kroSTUn;kroSTrA-kroSTunA;kroSTubhyAm;kroSTubhiH;kroSTre-kroSTave;kroSTubhyAm;kroSTubhyaH;kroSTuH-kroSToH;kroSTubhyAm;kroSTubhyaH;kroSTuH-kroSToH;koSTro:-koSTvoH;kroSTUnAm;kroSTari-kroSTau;koSTro:-koSTvoH;kroSTuSu;he kroSTo;he kroSTArau;he kroSTAraH"
    },
    {
        "ind": "106001",
        "baseindex": "06.001",
        "word": "huhU",
        "grp": "6",
        "index_in_grp": "1",
        "end": "UkArAntaH",
        "linga": "P",
        "forms": "hUhUH;hUhvau;hUhvaH;hUhUm;hUhvau;hUhUn;hUhvA;hUhUbhyAm;hUhUbhiH;hUhve;hUhUbhyAm;hUhUbhyaH;hUhvaH;hUhUbhyAm;hUhUbhyaH;hUhvaH;hUhvoH;hUhvAm;hUhvi;hUhvoH;hUhUSu;he hUhUH;he hUhvau;he hUhvaH"
    },
    {
        "ind": "106002",
        "baseindex": "06.002",
        "word": "aticamU",
        "grp": "6",
        "index_in_grp": "2",
        "end": "UkArAntaH",
        "linga": "P",
        "forms": "aticamUH;aticamvau;aticamvaH;aticamUm;aticamvau;aticamUn;aticamvA;aticamUbhyAm;aticamUbhiH;aticamvai;aticamUbhyAm;aticamUbhyaH;aticamvAH;aticamUbhyAm;aticamUbhyaH;aticamvAH;aticamvoH;aticamUnAm;aticamvAm;aticamvoH;aticamUSu;he aticamu;he aticamvau;he aticamvaH"
    },
    {
        "ind": "106003",
        "baseindex": "06.003",
        "word": "khalapU",
        "grp": "6",
        "index_in_grp": "3",
        "end": "UkArAntaH",
        "linga": "P",
        "forms": "khalapUH;khalapvau;khalapvaH;khalapvam;khalapvau;khalapvaH;khalapvA;khalapUbhyAm;khalapUbhiH;khalapve;khalapUbhyAm;khalapUbhyaH;khalapvaH;khalapUbhyAm;khalapUbhyaH;khalapvaH;khalapvoH;khalapvAm;khalapvi;khalapvoH;khalapUSu;he khalapUH;he khalapvau;he khalapvaH"
    },
    {
        "ind": "106004",
        "baseindex": "06.004",
        "word": "svabhU",
        "grp": "6",
        "index_in_grp": "4",
        "end": "UkArAntaH",
        "linga": "P",
        "forms": "svabhUH;svabhuvau;svabhuvaH;svabhuvam;svabhuvau;svabhuvaH;svabhuvA;svabhUbhyAm;svabhUbhiH;svabhuve;svabhUbhyAm;svabhUbhyaH;svabhuvaH;svabhUbhyAm;svabhUbhyaH;svabhuvaH;svabhuvoH;svabhuvAm;svabhuvi;svabhuvoH;svabhUSu;he svabhUH;he svabhuvau;he svabhuvaH"
    },
    {
        "ind": "106005",
        "baseindex": "06.005",
        "word": "varSAbhU",
        "grp": "6",
        "index_in_grp": "5",
        "end": "UkArAntaH",
        "linga": "P",
        "forms": "varSAbhUH;varSAbhvau;varSAbhvaH;varSAbhvam;varSAbhvau;varSAbhvaH;varSAbhvA;varSAbhUbhyAm;varSAbhUbhiH;varSAbhve;varSAbhUbhyAm;varSAbhUbhyaH;varSAbhvaH;varSAbhUbhyAm;varSAbhUbhyaH;varSAbhvaH;varSAbhvoH;varSAbhvAm;varSAbhvi;varSAbhvoH;varSAbhUSu;he varSAbhUH;he varSAbhvau;he varSAbhvaH"
    },
    {
        "ind": "106006",
        "baseindex": "06.006",
        "word": "dRmbhU",
        "grp": "6",
        "index_in_grp": "6",
        "end": "UkArAntaH",
        "linga": "P",
        "forms": "dRmbhUH;dRmbhvau;dRmbhvaH;dRmbhUm;dRmbhvau;dRmbhUn;dRmbhvA;dRmbhUbhyAm;dRmbhUbhiH;dRmbhve;dRmbhUbhyAm;dRmbhUbhyaH;dRmbhvaH;dRmbhUbhyAm;dRmbhUbhyaH;dRmbhvaH;dRmbhvoH;dRmbhvAm;dRmbhvi;dRmbhvoH;dRmbhUSu;he dRmbhUH;he dRmbhvau;he dRmbhvaH"
    },
    {
        "ind": "106007",
        "baseindex": "06.007",
        "word": "dRnbhU",
        "grp": "6",
        "index_in_grp": "7",
        "end": "UkArAntaH",
        "linga": "P",
        "forms": "dRnbhUH;dRnbhvau;dRnbhvaH;dRnbhvam;dRnbhvau;dRnbhvaH;dRnbhvA;dRnbhUbhyAm;dRnbhUbhiH;dRnbhve;dRnbhUbhyAm;dRnbhUbhyaH;dRnbhvaH;dRnbhUbhyAm;dRnbhUbhyaH;dRnbhvaH;dRnbhvoH;dRnbhvAm;dRnbhvi;dRnbhvoH;dRnbhUSu;he dRnbhUH;he dRnbhvau;he dRnbhvaH"
    },
    {
        "ind": "107001",
        "baseindex": "07.001",
        "word": "dhAtR",
        "grp": "7",
        "index_in_grp": "1",
        "end": "RkArAntaH",
        "linga": "P",
        "forms": "dhAtA;dhAtArau;dhAtAraH;dhAtAram;dhAtArau;dhAtRRn;dhAtrA;dhAtRbhyAm;dhAtRbhiH;dhAtre;dhAtRbhyAm;dhAtRbhyaH;dhAtuH;dhAtRbhyAm;dhAtRbhyaH;dhAtuH;dhAtroH;dhAtRRNAm;dhAtari;dhAtroH;dhAtRSu;he dhAtaH;he dhAtArau;he dhAtAraH"
    },
    {
        "ind": "107002",
        "baseindex": "07.002",
        "word": "pitR",
        "grp": "7",
        "index_in_grp": "2",
        "end": "RkArAntaH",
        "linga": "P",
        "forms": "pitA;pitarau;pitaraH;pitaram;pitarau;pitRRn;pitrA;pitRbhyAm;pitRbhiH;pitre;pitRbhyAm;pitRbhyaH;pituH;pitRbhyAm;pitRbhyaH;pituH;pitroH;pitRRNAm;pitari;pitroH;pitRSu;he pitaH;he pitarau;he pitaraH"
    },
    {
        "ind": "107003",
        "baseindex": "07.003",
        "word": "jAmAtR",
        "grp": "7",
        "index_in_grp": "3",
        "end": "RkArAntaH",
        "linga": "P",
        "forms": "jAmAtA;jAmAtarau;jAmAtaraH;jAmAtaram;jAmAtarau;jAmAtRRn;jAmAtrA;jAmAtRbhyAm;jAmAtRbhiH;jAmAtre;jAmAtRbhyAm;jAmAtRbhyaH;jAmAtuH;jAmAtRbhyAm;jAmAtRbhyaH;jAmAtuH;jAmAtroH;jAmAtRRNAm;jAmAtari;jAmAtroH;jAmAtRSu;he jAmAtaH;he jAmAtarau;he jAmAtaraH"
    },
    {
        "ind": "107004",
        "baseindex": "07.004",
        "word": "bhrAtR",
        "grp": "7",
        "index_in_grp": "4",
        "end": "RkArAntaH",
        "linga": "P",
        "forms": "bhrAtA;bhrAtarau;bhrAtaraH;bhrAtaram;bhrAtarau;bhrAtRRn;bhrAtrA;bhrAtRbhyAm;bhrAtRbhiH;bhrAtre;bhrAtRbhyAm;bhrAtRbhyaH;bhrAtuH;bhrAtRbhyAm;bhrAtRbhyaH;bhrAtuH;bhrAtroH;bhrAtRRNAm;bhrAtari;bhrAtroH;bhrAtRSu;he bhrAtaH;he bhrAtarau;he bhrAtaraH"
    },
    {
        "ind": "107005",
        "baseindex": "07.005",
        "word": "nR",
        "grp": "7",
        "index_in_grp": "5",
        "end": "RkArAntaH",
        "linga": "P",
        "forms": "nA;narau;naraH;naram;narau;nRRRn;nrA;nRbhyAm;nRbhiH;nre;nRbhyAm;nRbhyaH;nuH;nRbhyAm;nRbhyaH;nuH;nroH;nRRNAm-nRRNAm;nari;nroH;nRSu;he naH;he narau;he naraH"
    },
    {
        "ind": "107006",
        "baseindex": "07.006",
        "word": "R",
        "grp": "7",
        "index_in_grp": "6",
        "end": "RkArAntaH",
        "linga": "P",
        "forms": "A;arau;araH;aram;arau;RRn;rA;RbhyAm;RbhiH;re;RbhyAm;RbhyaH;uH;RbhyAm;RbhyaH;uH;roH;RRNAm;ari;roH;RSu;he aH;he arau;he araH"
    },
    {
        "ind": "108001",
        "baseindex": "08.001",
        "word": "kRR",
        "grp": "8",
        "index_in_grp": "1",
        "end": "RRkArAntaH",
        "linga": "P",
        "forms": "kIH-kRRH;kirau-krau;kiraH-kraH;kiram-kRRm;kirau-krau;kiraH-kRRn;kirA-krA;kIrbhyAm-kRRbhyAm;kIrbhiH-kRRbhiH;kire-kre;kIrbhyAm-kRRbhyAm;kIrbhyaH-kRRbhyaH;kiraH-kraH;kIrbhyAm-kRRbhyAm;kIrbhyaH-kRRbhyaH;kiraH-kraH;kiroH-kroH;kirAm-krAm;kiri-kri;kiroH-kroH;kIrSu-kRRSu;he kIH-he kRRH;he kirau-he krau;he kiraH-he kraH"
    },
    {
        "ind": "108002",
        "baseindex": "08.002",
        "word": "tRR",
        "grp": "8",
        "index_in_grp": "2",
        "end": "RRkArAntaH",
        "linga": "P",
        "forms": "tIH-tRRH;tirau-trau;tiraH-traH;tiram-tRRm;tirau-trau;tiraH-tRRn;tirA-trA;tIrbhyAm-tRRbhyAm;tIrbhiH-tRRbhiH;tire-tre;tIrbhyAm-tRRbhyAm;tIrbhyaH-tRRbhyaH;tiraH-traH;tIrbhyAm-tRRbhyAm;tIrbhyaH-tRRbhyaH;tiraH-traH;tiroH-troH;tirAm-trAm;tiri-tri;tiroH-troH;tIrSu-tRRSu;he tIH-he tRH;he tirau-he trau;he tiraH-he traH"
    },
    {
        "ind": "108003",
        "baseindex": "08.003",
        "word": "lR",
        "grp": "8",
        "index_in_grp": "3",
        "end": "RRkArAntaH",
        "linga": "P",
        "forms": "A;alau;alaH;alam;alau;RRn;lA;lRbhyAm;lRbhiH;le;lRbhyAm;lRbhyaH;al;lRbhyAm;lRbhyaH;al;loH;RRNAm;ali;loH;lRSu;he al;he alau;he alaH"
    },
    {
        "ind": "108004",
        "baseindex": "08.004",
        "word": "gamlR",
        "grp": "8",
        "index_in_grp": "4",
        "end": "RRkArAntaH",
        "linga": "P",
        "forms": "gamA;gamalau;gamalaH;gamalam;gamalau;gamRRn;gamlA;gamlRbhyAm;gamlRbhiH;gamle;gamlRbhyAm;gamlRbhyaH;gamul;gamlRbhyAm;gamlRbhyaH;gamul;gamloH;gamRRNAm;gamali;gamloH;gamlRSu;he gamal;he gamalau;he gamalaH"
    },
    {
        "ind": "108005",
        "baseindex": "08.005",
        "word": "zaklR",
        "grp": "8",
        "index_in_grp": "5",
        "end": "RRkArAntaH",
        "linga": "P",
        "forms": "zakA;zaklau;zaklaH;zaklam;zakalau;zakRRn;zaklA;zaklRbhyAm;zaklRbhiH;zakle;zaklRbhyAm;zaklRbhyaH;zakul;zaklRbhyAm;zaklRbhyaH;zakul;zakloH;zakRRNAm;zakali;zakloH;zaklRSu;he zakal;he zakalau;he zakalaH"
    },
    {
        "ind": "109001",
        "baseindex": "09.001",
        "word": "se",
        "grp": "9",
        "index_in_grp": "1",
        "end": "ekArAntaH",
        "linga": "P",
        "forms": "se;sayau;sayaH;sayam;sayau;sayaH;sayA;sebhyAm;sebhiH;saye;sebhyAm;sebhyaH;seH;sebhyAm;sebhyaH;seH;sayoH;sayAm;sayi;sayoH;seSu;he se;he sayau;he sayaH"
    },
    {
        "ind": "109002",
        "baseindex": "09.002",
        "word": "smRte",
        "grp": "9",
        "index_in_grp": "2",
        "end": "ekArAntaH",
        "linga": "P",
        "forms": "smRteH;smRtayau;smRtayaH;smRtayam;smRtayau;smRtayaH;smRtayA;smRtebhyAm;smRtebhiH;smRtaye;smRtebhyAm;smRtebhyaH;smRteH;smRtebhyAm;smRtebhyaH;smRteH;smRtayoH;smRtayAm;smRtayi;smRtayoH;smRteSu;he smRte;he smRtayau;he smRtayaH"
    },
    {
        "ind": "110001",
        "baseindex": "10.001",
        "word": "go",
        "grp": "10",
        "index_in_grp": "1",
        "end": "okArAntaH",
        "linga": "P",
        "forms": "gauH;gAvau;gAvaH;gAm;gAvau;gAH;gavA;gobhyAm;gobhiH;gave;gobhyAm;gobhyaH;goH;gobhyAm;gobhyaH;goH;gavoH;gavAm;gavi;gavoH;goSu;he gauH;he gAvau;he gAvaH"
    },
    {
        "ind": "110002",
        "baseindex": "10.002",
        "word": "sudyo",
        "grp": "10",
        "index_in_grp": "2",
        "end": "okArAntaH",
        "linga": "P",
        "forms": "sudyauH;sudyAvau;sudyAvaH;sudyAm;sudyAvau;sudyAvaH;sudyavA;sudyobhyAm;sudyobhiH;sudyave;sudyobhyAm;sudyobhyaH;sudyoH;sudyobhyAm;sudyobhyaH;sudyoH;sudyavoH;sudyavAm;sudyavi;sudyavoH;sudyoSu;he sudyauH;he sudyAvau;he sudyAvaH"
    },
    {
        "ind": "110003",
        "baseindex": "10.003",
        "word": "smRto",
        "grp": "10",
        "index_in_grp": "3",
        "end": "okArAntaH",
        "linga": "P",
        "forms": "smRtauH;smRtAvau;smRtAvaH;smRtAm;smRtAvau;smRtAvaH;smRtavA;smRtobhyAm;smRtobhiH;smRtave;smRtobhyAm;smRtobhyaH;smRtoH;smRtobhyAm;smRtobhyaH;smRtoH;smRtavoH;smRtavAm;smRtavi;smRtavoH;smRtoSu;he smRtau;he smRtAvau;he smRtAvaH"
    },
    {
        "ind": "111001",
        "baseindex": "11.001",
        "word": "rai",
        "grp": "11",
        "index_in_grp": "1",
        "end": "aikArAntaH",
        "linga": "P",
        "forms": "rAH;rAyau;rAyaH;rAyam;rAyau;rAyaH;rAyA;rAbhyAm;rAbhiH;rAye;rAbhyAm;rAbhyaH;rAyaH;rAbhyAm;rAbhyaH;rAyaH;rAyoH;rAyAm;rAyi;rAyoH;rAsu;he rAH;he rAyau;he rAyaH"
    },
    {
        "ind": "112001",
        "baseindex": "12.001",
        "word": "glau",
        "grp": "12",
        "index_in_grp": "1",
        "end": "aukArAntaH",
        "linga": "P",
        "forms": "glauH;glAvau;glAvaH;glAvam;glAvau;glAvaH;glAvA;glaubhyAm;glaubhiH;glAve;glaubhyAm;glaubhyaH;glAvaH;glaubhyAm;glaubhyaH;glAvaH;glAvoH;glAvAm;glAvi;glAvoH;glauSu;he glauH;he glAvau;he glAvaH"
    },
    {
        "ind": "112002",
        "baseindex": "12.002",
        "word": "janau",
        "grp": "12",
        "index_in_grp": "2",
        "end": "aukArAntaH",
        "linga": "P",
        "forms": "janauH;janAvau;janAvaH;janAvam;janAvau;janAvaH;janAvA;janaubhyAm;janaubhiH;janAve;janaubhyAm;janaubhyaH;janAvaH;janaubhyAm;janaubhyaH;janAvaH;janAvoH;janAvAm;janAvi;janAvoH;janauSu;he janauH;he janAvau;he janAvaH"
    },
    {
        "ind": "113001",
        "baseindex": "13.001",
        "word": "mAlA",
        "grp": "13",
        "index_in_grp": "1",
        "end": "AkArAntaH ",
        "linga": "S",
        "forms": "mAlA;mAle;mAlAH;mAlAm;mAle;mAlAH;mAlayA;mAlAbhyAm;mAlAbhiH;mAlAyai;mAlAbhyAm;mAlAbhyaH;mAlAyAH;mAlAbhyAm;mAlAbhyaH;mAlAyAH;mAlayoH;mAlAnAm;mAlAyAm;mAlayoH;mAlAsu;he mAle;he mAle;he mAlAH"
    },
    {
        "ind": "114001",
        "baseindex": "14.001",
        "word": "ramA",
        "grp": "14",
        "index_in_grp": "1",
        "end": "AkArAntaH",
        "linga": "S",
        "forms": "ramA;rame;ramAH;ramAm;rame;ramAH;ramayA;ramAbhyAm;ramAbhiH;ramAyai;ramAbhyAm;ramAbhyaH;ramAyAH;ramAbhyAm;ramAbhyaH;ramAyAH;ramayoH;ramANAm;ramAyAm;ramayoH;ramAsu;he rame;he rame;he ramAH"
    },
    {
        "ind": "114002",
        "baseindex": "14.002",
        "word": "varSA",
        "grp": "14",
        "index_in_grp": "2",
        "end": "AkArAntaH",
        "linga": "S",
        "forms": "-;-;varSAH;-;-;varSAH;-;-;varSAbhiH;-;-;varSAbhyaH;-;-;varSAbhyaH;-;-;varSANAm;-;-;varSAsu;-;-;he varSAH"
    },
    {
        "ind": "114003",
        "baseindex": "14.003",
        "word": "sarvA",
        "grp": "14",
        "index_in_grp": "3",
        "end": "AkArAntaH",
        "linga": "S",
        "forms": "sarvA;sarve;sarvAH;sarvAm;sarve;sarvAH;sarvayA;sarvAbhyAm;sarvAbhiH;sarvasyai;sarvAbhyAm;sarvAbhyaH;sarvasyAH;sarvAbhyAm;sarvAbhyaH;sarvasyAH;sarvayoH;sarvAsAm;sarvasyAm;sarvayoH;sarvAsu;he sarve;he sarve;he sarvAH"
    },
    {
        "ind": "114004",
        "baseindex": "14.004",
        "word": "priyavizvA",
        "grp": "14",
        "index_in_grp": "4",
        "end": "AkArAntaH",
        "linga": "S",
        "forms": "priyavizvA;priyavizve;priyavizvAH;priyavizvAm;priyavizve;priyavizvAH;priyavizvayA;priyavizvAbhyAm;priyavizvAbhiH;priyavizvAyai;priyavizvAbhyAm;priyavizvAbhyaH;priyavizvAyAH;priyavizvAbhyAm;priyavizvAbhyaH;priyavizvAyAH;priyavizvayoH;priyavizvANAm;priyavizvAyAm;priyavizvayoH;priyavizvAsu;he priyavizve;he priyavizve;he priyavizvAH"
    },
    {
        "ind": "114005",
        "baseindex": "14.005",
        "word": "ubhA",
        "grp": "14",
        "index_in_grp": "5",
        "end": "AkArAntaH",
        "linga": "S",
        "forms": ";ubhe;;;ubhe;;;ubhAbhyAm;;;ubhAbhyAm;;;ubhAbhyAm;;;ubhayoH;;;ubhayoH;;;he ubhe;"
    },
    {
        "ind": "114006",
        "baseindex": "14.006",
        "word": "uttarapUrvA",
        "grp": "14",
        "index_in_grp": "6",
        "end": "AkArAntaH",
        "linga": "S",
        "forms": "uttarapUrvA;uttarapUrve;uttarapUrvAH;uttarapUrvAm;uttarapUrve;uttarapUrvAH;uttarapUrvayA;uttarapUrvAbhyAm;uttarapUrvAbhiH;uttarapUrvasyai-uttarapUrvAyai;uttarapUrvAbhyAm;uttarapUrvAbhyaH;uttarapUrvasyAH-uttarapUrvAyAH;uttarapUrvAbhyAm;uttarapUrvAbhyaH;uttarapUrvasyAH-uttarapUrvAyAH;uttarapUrvayoH;uttarapUrvAsAm-uttarapUrvANAm;uttarapUrvasyAm-uttarapUrvAyAm;uttarapUrvayoH;uttarapUrvAsu;he uttarapUrve;he uttarapUrve;he uttarapUrvAH"
    },
    {
        "ind": "114007",
        "baseindex": "14.007",
        "word": "dvitIyA",
        "grp": "14",
        "index_in_grp": "7",
        "end": "AkArAntaH",
        "linga": "S",
        "forms": "dvitIyA;dvitIye;dvitIyAH;dvitIyAm;dvitIye;dvitIyAH;dvitIyayA;dvitIyAbhyAm;dvitIyAbhiH;dvitIyasyai-dvitIyAyai;dvitIyAbhyAm;dvitIyAbhyaH;dvitIyasyAH-dvitIyAyAH;dvitIyAbhyAm;dvitIyAbhyaH;dvitIyasyAH-dvitIyAyAH;dvitIyayoH;dvitIyAnAm;dvitIyasyAm-dvitIyAyAm;dvitIyayoH;dvitIyAsu;he dvitIye;he dvitIye;he dvitIyAH"
    },
    {
        "ind": "114008",
        "baseindex": "14.008",
        "word": "tRtIyA",
        "grp": "14",
        "index_in_grp": "8",
        "end": "AkArAntaH",
        "linga": "S",
        "forms": "tRtIyA;tRtIye;tRtIyAH;tRtIyAm;tRtIye;tRtIyAH;tRtIyayA;tRtIyAbhyAm;tRtIyAbhiH;tRtIyasyai-tRtIyAyai;tRtIyAbhyAm;tRtIyAbhyaH;tRtIyasyAH-tRtIyAyAH;tRtIyAbhyAm;tRtIyAbhyaH;tRtIyasyAH-tRtIyAyAH;tRtIyayoH;tRtIyAnAm;tRtIyasyAm-tRtIyAyAm;tRtIyayoH;tRtIyAsu;he tRtIye;he tRtIye;he tRtIyAH"
    },
    {
        "ind": "114009",
        "baseindex": "14.009",
        "word": "ambA",
        "grp": "14",
        "index_in_grp": "9",
        "end": "AkArAntaH",
        "linga": "S",
        "forms": "ambA;ambe;ambAH;ambAm;ambe;ambAH;ambayA;ambAbhyAm;ambAbhiH;ambAyai;ambAbhyAm;ambAbhyaH;ambAyAH;ambAbhyAm;ambAbhyaH;ambAyAH;ambayoH;ambAnAm;ambAyAm;ambayoH;ambAsu;he amba;he ambe;he ambAH"
    },
    {
        "ind": "114010",
        "baseindex": "14.010",
        "word": "jarA",
        "grp": "14",
        "index_in_grp": "10",
        "end": "AkArAntaH",
        "linga": "S",
        "forms": "jarA;jare-jarasau;jarAH-jarasaH;jarAm-jarasam;jare-jarasau;jarAH-jarasaH;jarayA-jarasA;jarAbhyAm;jarAbhiH;jarAyai-jarase;jarAbhyAm;jarAbhyaH;jarAyAH-jarasaH;jarAbhyAm;jarAbhyaH;jarAyAH-jarasaH;jarayoH-jarasoH;jarANAm-jarasAm;jarAyAm-jarasi;jarayoH;jarAsu;he jare;he jare-jarasau;he jarAH-jarasaH"
    },
    {
        "ind": "114011",
        "baseindex": "14.011",
        "word": "nAsikA",
        "grp": "14",
        "index_in_grp": "11",
        "end": "AkArAntaH",
        "linga": "S",
        "forms": "nAsikA;nAsike;nAsikAH;nAsikAm;nAsike;nAsikAH-nasaH;nAsikayA-nasA;nAsikAbhyAm-nobhyAm;nAsikAbhiH-nobhiH;nAsikAyai-nase;nAsikAbhyAm-nobhyAm;nAsikAbhyaH-nobhyaH;nAsikAyAH-nasaH;nAsikAbhyAm-nobhyAm;nAsikAbhyaH-nobhyaH;nAsikAyAH-nasaH;nAsikayoH-nasoH;nAsikAnAm-nasAm;nAsikAyAm-nasi;nAsikayoH-nasoH;nAsikAsu-nassu;he nAsike;he nAsike;he nAsikAH"
    },
    {
        "ind": "114012",
        "baseindex": "14.012",
        "word": "nizA",
        "grp": "14",
        "index_in_grp": "12",
        "end": "AkArAntaH",
        "linga": "S",
        "forms": "nizA;nize;nizAH;nizAm;nize;nizAH-nizaH;nizayA-nizA;nizAbhyAm-niDbhyAm;nizAbhiH-niDbhiH;nizAyai-nize;nizAbhyAm-niDbhyAm;nizAbhyaH-niDbhyaH;nizAyAH-nizaH;nizAbhyAm-niDbhyAm;nizAbhyaH-niDbhyaH;nizAyAH-nizaH;nizayoH-nizoH;nizAnAm-nizAm;nizAyAm-nizi;nizayoH-nizoH;nizAsu-niTtsu-niTsu;he nize;he nize;he nizAH"
    },
    {
        "ind": "114013",
        "baseindex": "14.013",
        "word": "pRtanA",
        "grp": "14",
        "index_in_grp": "13",
        "end": "AkArAntaH",
        "linga": "S",
        "forms": "pRtanA;pRtane;pRtanAH;pRtanAm;pRtane;pRtanAH-pUtaH;pRtA-pRtanayA;pRtanAbhyAm-pRdbhyAm;pRtanAbhiH-pRdbhiH;pRtanAyai-pRte;pRtanAbhyAm-pRdbhyAm;pRtanAbhyaH-pRdbhyaH;pRtanAyAH-pRtaH;pRtanAbhyAm-pRdbhyAm;pRtanAbhyaH-pRdbhyaH;pRtanAyAH-pRtaH;pRtanayoH-pRtoH;pRtanAnAm-pRtAm;pRtanAyAm-pRti;pRtanayoH-pRtoH;pRtanAsu-pRtsu;he pRtane;he pRtane;he pRtanAH"
    },
    {
        "ind": "114014",
        "baseindex": "14.014",
        "word": "gopA",
        "grp": "14",
        "index_in_grp": "14",
        "end": "AkArAntaH",
        "linga": "S",
        "forms": "gopAH;gopau;gopAH;gopAm;gopau;gopaH;gopA;gopAbhyAm;gopAbhiH;gope;gopAbhyAm;gopAbhyaH;gopaH;gopAbhyAm;gopAbhyaH;gopaH;gopoH;gopAm;gopi;gopoH;gopAsu;he gopAH;he gopau;he gopAH"
    },
    {
        "ind": "115001",
        "baseindex": "15.001",
        "word": "mati",
        "grp": "15",
        "index_in_grp": "1",
        "end": "ikArAntaH",
        "linga": "S",
        "forms": "matiH;matI;matayaH;matim;matI;matIH;matyA;matibhyAm;matibhiH;mataye-matyai;matibhyAm;matibhyaH;mateH-matyAH;matibhyAm;matibhyaH;mateH-matyAH;matyoH;matInAm;matau-matyAm;matyoH;matiSu;he mate;he matI;he matayaH"
    },
    {
        "ind": "115002",
        "baseindex": "15.002",
        "word": "rAtri",
        "grp": "15",
        "index_in_grp": "2",
        "end": "ikArAntaH",
        "linga": "S",
        "forms": "rAtriH;rAtrI;rAtrayaH;rAtrim;rAtrI;rAtrIH;rAtryA;rAtribhyAm;rAtribhiH;rAtraye-rAtryai;rAtribhyAm;rAtribhyaH;rAtreH-rAtryAH;rAtribhyAm;rAtribhyaH;rAtreH-rAtryAH;rAtryoH;rAtrINAm;rAtrau-rAtryAm;rAtryoH;rAtriSu;he rAtre;he rAtrI;he rAtrayaH"
    },
    {
        "ind": "115003",
        "baseindex": "15.003",
        "word": "priyatri",
        "grp": "15",
        "index_in_grp": "3",
        "end": "ikArAntaH",
        "linga": "S",
        "forms": "priyatriH;priyatrI;priyatrayaH;priyatrim;priyatrI;priyatrIH;priyatrayA;priyatribhyAm;priyatribhiH;priyatraye-priyatryai;priyatribhyAm;priyatribhyaH;priyatreH-priyatryAH;priyatribhyAm;priyatribhyaH;priyatreH-priyatryAH;priyatryoH;priyatrayANAm;priyatrau-priyatryAm;priyatryoH;priyatriSu;he priyatre;he priyatrI;he priyatrayaH"
    },
    {
        "ind": "115004",
        "baseindex": "15.004",
        "word": "dvi",
        "grp": "15",
        "index_in_grp": "4",
        "end": "ikArAntaH",
        "linga": "S",
        "forms": "-;dve;-;-;dve;-;-;dvAbhyAm;-;-;dvAbhyAm;-;-;dvAbhyAm;-;-;dvayoH;-;-;dvayoH;-;-;-;-"
    },
    {
        "ind": "115005",
        "baseindex": "15.005",
        "word": "tri",
        "grp": "15",
        "index_in_grp": "5",
        "end": "ikArAntaH",
        "linga": "S",
        "forms": "-;-;tisraH;-;-;tisraH;-;-;tisRbhiH;-;-;tisRbhyaH;-;-;tisRbhyaH;-;-;tisRNAm;-;-;tisRSu;-;-;he tisraH"
    },
    {
        "ind": "115006",
        "baseindex": "15.006",
        "word": "atistri",
        "grp": "15",
        "index_in_grp": "6",
        "end": "ikArAntaH",
        "linga": "S",
        "forms": "atistri;atistriyau;atistriyaH;atistriyam-atistrim;atistriyau;atistrIH-atistriyaH;atistriyA;atistribhyAm;atistribhiH;atistrayai-atistraye;atistribhyAm;atistribhyaH;atistreH-atistriyAH;atistribhyAm;atistribhyaH;atistreH-atistriyAH;atistriyoH;atistrINAm;atistrau-atistriyAm;atistriyoH;atistriSu;he atistre;he atistriyau;he atistriyaH"
    },
    {
        "ind": "115007",
        "baseindex": "15.007",
        "word": "kati",
        "grp": "15",
        "index_in_grp": "7",
        "end": "ikArAntaH",
        "linga": "S",
        "forms": "-;-;kati;-;-;kati;-;-;katibhiH;-;-;katibhyaH;-;-;katibhyaH;-;-;katInAm;-;-;katiSu;-;-;he kati"
    },
    {
        "ind": "116001",
        "baseindex": "16.001",
        "word": "nadI",
        "grp": "16",
        "index_in_grp": "1",
        "end": "IkArAntaH",
        "linga": "S",
        "forms": "nadI;nadyau;nadyaH;nadIm;nadyau;nadIH;nadyA;nadIbhyAm;nadIbhiH;nadyai;nadIbhyAm;nadIbhyaH;nadyAH;nadIbhyAm;nadIbhyaH;nadyAH;nadyoH;nadInAm;nadyAm;nadyoH;nadISu;he nadi;he nadyau;he nadyaH"
    },
    {
        "ind": "116002",
        "baseindex": "16.002",
        "word": "gaurI",
        "grp": "16",
        "index_in_grp": "2",
        "end": "IkArAntaH",
        "linga": "S",
        "forms": "gaurI;gauryau;gauryaH;gaurIm;gauryau;gaurIH;gauryA;gaurIbhyAm;gaurIbhiH;gauryai;gaurIbhyAm;gaurIbhyaH;gauryAH;gaurIbhyAm;gaurIbhyaH;gauryAH;gauryoH;gaurINAm;gauryAm;gauryoH;gaurISu;he gauri;he gauryau;he gauryaH"
    },
    {
        "ind": "116003",
        "baseindex": "16.003",
        "word": "ubhayI",
        "grp": "16",
        "index_in_grp": "3",
        "end": "IkArAntaH",
        "linga": "S",
        "forms": "ubhayI;-;ubhayyaH;ubhayIm;-;ubhayIH;ubhayyA;-;ubhayIbhiH;ubhayyai;-;ubhayIbhyaH;ubhayyAH;-;ubhayIbhyaH;ubhayyAH;-;ubhayInAm;ubhayyAm;-;ubhayISu;he ubhayi;-;he ubhayyaH"
    },
    {
        "ind": "116004",
        "baseindex": "16.004",
        "word": "avI",
        "grp": "16",
        "index_in_grp": "4",
        "end": "IkArAntaH",
        "linga": "S",
        "forms": "avIH;avyau;avyaH;avIm;avyau;avIH;avyA;avIbhyAm;avIbhiH;avyai;avIbhyAm;avIbhyaH;avyAH;avIbhyAm;avIbhyaH;avyAH;avyoH;avInAm;avyAm;avyoH;avISu;he avi;he avyau;he avyaH"
    },
    {
        "ind": "116005",
        "baseindex": "16.005",
        "word": "tantrI",
        "grp": "16",
        "index_in_grp": "5",
        "end": "IkArAntaH",
        "linga": "S",
        "forms": "tantrIH;tantryau;tantryaH;tantrIm;tantryau;tantrIH;tantryA;tantrIbhyAm;tantrIbhiH;tantryai;tantrIbhyAm;tantrIbhyaH;tantryAH;tantrIbhyAm;tantrIbhyaH;tantryAH;tantryoH;tantrINAm;tantryAm;tantryoH;tantrISu;he tantrIH;he tantryau;he tantryaH"
    },
    {
        "ind": "116006",
        "baseindex": "16.006",
        "word": "tarI",
        "grp": "16",
        "index_in_grp": "6",
        "end": "IkArAntaH",
        "linga": "S",
        "forms": "tarIH;taryau;taryaH;tarIm;taryau;tarIH;taryA;tarIbhyAm;tarIbhiH;taryai;tarIbhyAm;tarIbhyaH;taryAH;tarIbhyAm;tarIbhyaH;taryAH;taryoH;tarINAm;taryAm;taryoH;tarISu;he tari;he taryau;he taryaH"
    },
    {
        "ind": "116007",
        "baseindex": "16.007",
        "word": "starI",
        "grp": "16",
        "index_in_grp": "7",
        "end": "IkArAntaH",
        "linga": "S",
        "forms": "starIH;staryau;staryaH;starIm;staryau;starIH;staryA;starIbhyAm;starIbhiH;staryai;starIbhyAm;starIbhyaH;staryAH;starIbhyAm;starIbhyaH;staryAH;staryoH;starINAm;staryAm;staryoH;starISu;he starIH;he staryau;he staryaH"
    },
    {
        "ind": "116008",
        "baseindex": "16.008",
        "word": "lakSmI",
        "grp": "16",
        "index_in_grp": "8",
        "end": "IkArAntaH",
        "linga": "S",
        "forms": "lakSmIH;lakSmyau;lakSmyaH;lakSmIm;lakSmyau;lakSmIH;lakSmyA;lakSmIbhyAm;lakSmIbhiH;lakSmyai;lakSmIbhyAm;lakSmIbhyaH;lakSmyAH;lakSmIbhyAm;lakSmIbhyaH;lakSmyAH;lakSmyoH;lakSmINAm;lakSmyAm;lakSmyoH;lakSmISu;he lakSmi;he lakSmyau;he lakSmyaH"
    },
    {
        "ind": "116009",
        "baseindex": "16.009",
        "word": "hrI",
        "grp": "16",
        "index_in_grp": "9",
        "end": "IkArAntaH",
        "linga": "S",
        "forms": "hrIH;hriyau;hriyaH;hriyam;hriyau;hriyaH;hriyA;hrIbhyAm;hrIbhiH;hriyai-hriye;hrIbhyAm;hrIbhyaH;hriyAH-hriyaH;hrIbhyAm;hrIbhyaH;hriyAH-hriyaH;hriyoH;hriyAm;hriyi-hriyAm;hriyoH;hrISu;he hrIH;he hriyau;he hriyaH"
    },
    {
        "ind": "116010",
        "baseindex": "16.010",
        "word": "zrI",
        "grp": "16",
        "index_in_grp": "10",
        "end": "IkArAntaH",
        "linga": "S",
        "forms": "zrIH;zriyau;zriyaH;zriyam;zriyau;zriyaH;zriyA;zrIbhyAm;zrIbhiH;zriyai-zriye;zrIbhyAm;zrIbhyaH;zriyAH-zriyaH;zrIbhyAm;zrIbhyaH;zriyAH-zriyaH;zriyoH;zriyAm;zriyi-zriyAm;zriyoH;zrISu;he zrIH;he zriyau;he zriyaH"
    },
    {
        "ind": "116011",
        "baseindex": "16.011",
        "word": "dhI",
        "grp": "16",
        "index_in_grp": "11",
        "end": "IkArAntaH",
        "linga": "S",
        "forms": "dhIH;dhiyau;dhiyaH;dhiyam;dhiyau;dhiyaH;dhiyA;dhIbhyAm;dhIbhiH;dhiyai-dhiye;dhIbhyAm;dhIbhyaH;dhiyAH-dhiyaH;dhIbhyAm;dhIbhyaH;dhiyAH-dhiyaH;dhiyoH;dhiyAm;dhiyi-dhiyAm;dhiyoH;dhISu;he dhIH;he dhiyau;he dhiyaH"
    },
    {
        "ind": "117001",
        "baseindex": "17.001",
        "word": "bhI",
        "grp": "17",
        "index_in_grp": "1",
        "end": "IkArAntaH",
        "linga": "S",
        "forms": "bhIH;bhiyau;bhiyaH;bhiyam;bhiyau;bhiyaH;bhiyA;bhIbhyAm;bhIbhiH;bhiyai-bhiye;bhIbhyAm;bhIbhyaH;bhiyAH-bhiyaH;bhIbhyAm;bhIbhyaH;bhiyAH-bhiyaH;bhiyoH;bhiyAm;bhiyi-bhiyAm;bhiyoH;bhISu;he bhIH;he bhiyau;he bhiyaH"
    },
    {
        "ind": "118001",
        "baseindex": "18.001",
        "word": "pradhI",
        "grp": "18",
        "index_in_grp": "1",
        "end": "IkArAntaH",
        "linga": "S",
        "forms": "pradhIH;pradhyau;pradhyaH;pradhyam;pradhyau;pradhyaH;pradhyA;pradhIbhyAm;pradhIbhiH;pradhyai;pradhIbhyAm;pradhIbhyaH;pradhyAH;pradhIbhyAm;pradhIbhyaH;pradhyAH;pradhyoH;pradhInAm;pradhyAm;pradhyoH;pradhISu;he pradhi;he pradhyau;he pradhyaH"
    },
    {
        "ind": "118002",
        "baseindex": "18.002",
        "word": "grAmaNI",
        "grp": "18",
        "index_in_grp": "2",
        "end": "IkArAntaH",
        "linga": "S",
        "forms": "grAmaNIH;grAmaNyau;grAmaNyaH;grAmaNyam;grAmaNyau;grAmaNyaH;grAmaNyA;grAmaNIbhyAm;grAmaNIbhiH;grAmaNye;grAmaNIbhyAm;grAmaNIbhyaH;grAmaNyaH;grAmaNIbhyAm;grAmaNIbhyaH;grAmaNyaH;grAmaNyoH;grAmaNyAm;grAmaNyAm;grAmaNyoH;grAmaNISu;he grAmaNIH;he grAmaNyau;he grAmaNyaH"
    },
    {
        "ind": "119001",
        "baseindex": "19.001",
        "word": "dhenu",
        "grp": "19",
        "index_in_grp": "1",
        "end": "ukArAntaH",
        "linga": "S",
        "forms": "dhenuH;dhenU;dhenavaH;dhenum;dhenU;dhenUH;dhenvA;dhenubhyAm;dhenubhiH;dhenvai-dhenave;dhenubhyAm;dhenubhyaH;dhenvAH-dhenoH;dhenubhyAm;dhenubhyaH;dhenvAH-dhenoH;dhenvoH;dhenUnAm;dhenau-dhenvAm;dhenvoH;dhenuSu;he dheno;he dhenU;he dhenavaH"
    },
    {
        "ind": "119002",
        "baseindex": "19.002",
        "word": "kharu",
        "grp": "19",
        "index_in_grp": "2",
        "end": "ukArAntaH",
        "linga": "S",
        "forms": "kharuH;kharU;kharavaH;kharum;kharU;kharUH;kharvA;kharubhyAm;kharubhiH;kharvai-kharave;kharubhyAm;kharubhyaH;kharvAH-kharoH;kharubhyAm;kharubhyaH;kharvAH-kharoH;kharvoH;kharUNAm;kharau-kharvAm;kharvoH;kharuSu;he kharo;he kharU;he kharavaH"
    },
    {
        "ind": "119003",
        "baseindex": "19.003",
        "word": "ku",
        "grp": "19",
        "index_in_grp": "3",
        "end": "ukArAntaH",
        "linga": "S",
        "forms": "kUH;kuvau;kuvaH;kuvam;kuvau;kuvaH;kuvA;kUbhyAm;kUbhiH;kuve-kuvai;kUbhyAm;kUbhyaH;kuvAHkuvaH;kUbhyAm;kUbhyaH;kuvAHkuvaH;kuvoH;kUNAm-kuvAm;kuvAm-kuvi;kuvoH;kUSu;he kUH;he kuvau;he kuvaH"
    },
    {
        "ind": "120001",
        "baseindex": "20.001",
        "word": "vadhU",
        "grp": "20",
        "index_in_grp": "1",
        "end": "UkArAntaH",
        "linga": "S",
        "forms": "vadhUH;vadhvau;vadhvaH;vadhUm;vadhvau;vadhUH;vadhvA;vadhUbhyAm;vadhUbhiH;vadhvai;vadhUbhyAm;vadhUbhyaH;vadhvAH;vadhUbhyAm;vadhUbhyaH;vadhvAH;vadhvoH;vadhUnAm;vadhvAm;vadhvoH;vadhUSu;he vadhu;he vadhvau;he vadhvaH"
    },
    {
        "ind": "120002",
        "baseindex": "20.002",
        "word": "zvazrU",
        "grp": "20",
        "index_in_grp": "2",
        "end": "UkArAntaH",
        "linga": "S",
        "forms": "zvazrUH;zvazrvau;zvazrvaH;zvazrUm;zvazrvau;zvazrUH;zvazrvA;zvazrUbhyAm;zvazrUbhiH;zvazrvai;zvazrUbhyAm;zvazrUbhyaH;zvazrvAH;zvazrUbhyAm;zvazrUbhyaH;zvazrvAH;zvazrvoH;zvazrUNAm;zvazrvAm;zvazrvoH;zvazrUSu;he zvazru;he zvazrvau;he zvazrvaH"
    },
    {
        "ind": "120003",
        "baseindex": "20.003",
        "word": "bhrU",
        "grp": "20",
        "index_in_grp": "3",
        "end": "UkArAntaH",
        "linga": "S",
        "forms": "bhrUH;bhruvau;bhruvaH;bhruvam;bhruvau;bhruvaH;bhruvA;bhrUbhyAm;bhrUbhiH;bhruve-bhruvai;bhrUbhyAm;bhrUbhyaH;bhruvAHbhruvaH;bhrUbhyAm;bhrUbhyaH;bhruvAHbhruvaH;bhruvoH;bhrUNAm-bhruvAm;bhruvAm-bhruvi;bhruvoH;bhrUSu;he bhrUH;he bhruvau;he bhruvaH"
    },
    {
        "ind": "120004",
        "baseindex": "20.004",
        "word": "subhrU",
        "grp": "20",
        "index_in_grp": "4",
        "end": "UkArAntaH",
        "linga": "S",
        "forms": "subhrUH;subhruvau;subhruvaH;subhruvam;subhruvau;subhruvaH;subhruvA;subhrUbhyAm;subhrUbhiH;subhruve-subhruvai;subhrUbhyAm;subhrUbhyaH;subhruvAHsubhruvaH;subhrUbhyAm;subhrUbhyaH;subhruvAHsubhruvaH;subhruvoH;subhrUNAm-subhruvAm;subhruvAm-subhruvi;subhruvoH;subhrUSu;he subhrUH;he subhruvau;he subhruvaH"
    },
    {
        "ind": "120005",
        "baseindex": "20.005",
        "word": "khalapU",
        "grp": "20",
        "index_in_grp": "5",
        "end": "UkArAntaH",
        "linga": "S",
        "forms": "khalapUH;khalapvau;khalapvaH;khalapvam;khalapvau;khalapvaH;khalapvA;khalapUbhyAm;khalapUbhiH;khalapve;khalapUbhyAm;khalapUbhyaH;khalapvaH;khalapUbhyAm;khalapUbhyaH;khalapvaH;khalapvoH;khalapvAm;khalapvi;khalapvoH;khalapUSu;he khalapUH;he khalapvau;he khalapvaH"
    },
    {
        "ind": "120006",
        "baseindex": "20.006",
        "word": "bhU",
        "grp": "20",
        "index_in_grp": "6",
        "end": "UkArAntaH",
        "linga": "S",
        "forms": "bhUH;bhuvau;bhuvaH;bhuvam;bhuvau;bhuvaH;bhuvA;bhUbhyAm;bhUbhiH;bhuve-bhuvai;bhUbhyAm;bhUbhyaH;bhuvAHbhuvaH;bhUbhyAm;bhUbhyaH;bhuvAHbhuvaH;bhuvoH;bhUNAm-bhuvAm;bhuvAm-bhuvi;bhuvoH;bhUSu;he bhUH;he bhuvau;he bhuvaH"
    },
    {
        "ind": "120007",
        "baseindex": "20.007",
        "word": "pUnarbhU",
        "grp": "20",
        "index_in_grp": "7",
        "end": "UkArAntaH",
        "linga": "S",
        "forms": "pUnarbhUH;punarbhvau;punarbhvaH;punarbhvam;punarbhvau;punarbhvaH;punarbhvA;pUnarbhUbhyAm;pUnarbhUbhiH;punarbhvai;pUnarbhUbhyAm;pUnarbhUbhyaH;punarbhvAH;pUnarbhUbhyAm;pUnarbhUbhyaH;punarbhvAH;punarbhvoH;pUnarbhUNAm;punarbhvAm;punarbhvoH;pUnarbhUSu;he pUnarbhUH;he punarbhvau;he punarbhvaH"
    },
    {
        "ind": "120008",
        "baseindex": "20.008",
        "word": "varSAbhU",
        "grp": "20",
        "index_in_grp": "8",
        "end": "UkArAntaH",
        "linga": "S",
        "forms": "varSAbhUH;varSAbhvau;varSAbhvaH;varSAbhvam;varSAbhvau;varSAbhvaH;varSAbhvA;varSAbhUbhyAm;varSAbhUbhiH;varSAbhvai-varSAbhve;varSAbhUbhyAm;varSAbhUbhyaH;varSAbhvAH-varSAbhvaH;varSAbhUbhyAm;varSAbhUbhyaH;varSAbhvAH-varSAbhvaH;varSAbhvoH;varSAbhUNAm-varSAbhvAm;varSAbhvAm-varSAbhvi;varSAbhvoH;varSAbhUSu;he varSAbhUH-varSAbhu;he varSAbhvau;he varSAbhvaH"
    },
    {
        "ind": "120009",
        "baseindex": "20.009",
        "word": "svayambhU",
        "grp": "20",
        "index_in_grp": "9",
        "end": "UkArAntaH",
        "linga": "S",
        "forms": "svayambhUH;svayambhuvau;svayambhuvaH;svayambhuvam;svayambhuvau;svayambhuvaH;svayambhuvA;svayambhUbhyAm;svayambhUbhiH;svayambhuve;svayambhUbhyAm;svayambhUbhyaH;svayambhuvaH;svayambhUbhyAm;svayambhUbhyaH;svayambhuvaH;svayambhuvoH;svayambhUvAm;svayambhuvi;svayambhuvoH;svayambhUSu;he svayambhUH;he svayambhuvau;he svayambhuvaH"
    },
    {
        "ind": "121001",
        "baseindex": "21.001",
        "word": "svasR",
        "grp": "21",
        "index_in_grp": "1",
        "end": "RkArAntaH",
        "linga": "S",
        "forms": "svasA;svasArau;svasAraH;svasAram;svasArau;svasRRH;svasrA;svasRbhyAm;svasRbhiH;svasre;svasRbhyAm;svasRbhyaH;svasuH;svasRbhyAm;svasRbhyaH;svasuH;svasroH;svasRRNAm;svasari;svasroH;svasRSu;he svasaH;he svasArau;he svasAraH"
    },
    {
        "ind": "121002",
        "baseindex": "21.002",
        "word": "mAtR",
        "grp": "21",
        "index_in_grp": "2",
        "end": "RkArAntaH",
        "linga": "S",
        "forms": "mAtA;mAtarau;mAtaraH;mAtaram;mAtarau;mAtRRH;mAtrA;mAtRbhyAm;mAtRbhiH;mAtre;mAtRbhyAm;mAtRbhyaH;mAtuH;mAtRbhyAm;mAtRbhyaH;mAtuH;mAtroH;mAtRRNAm;mAtari;mAtroH;mAtRSu;he mAtaH;he mAtarau;he mAtaraH"
    },
    {
        "ind": "121003",
        "baseindex": "21.003",
        "word": "nanAndR",
        "grp": "21",
        "index_in_grp": "3",
        "end": "RkArAntaH",
        "linga": "S",
        "forms": "nanAndA;nanAndarau;nanAndaraH;nanAndaram;nanAndarau;nanAndRRH;nanAndrA;nanAndRbhyAm;nanAndRbhiH;nanAndre;nanAndRbhyAm;nanAndRbhyaH;nanAnduH;nanAndRbhyAm;nanAndRbhyaH;nanAnduH;nanAndroH;nanAndRRNAm;nanAndari;nanAndroH;nanAndRSu;he nanAndaH;he nanAndarau;he nanAndaraH"
    },
    {
        "ind": "121004",
        "baseindex": "21.004",
        "word": "duhitR",
        "grp": "21",
        "index_in_grp": "4",
        "end": "RkArAntaH",
        "linga": "S",
        "forms": "duhitA;duhitarau;duhitaraH;duhitaram;duhitarau;duhitRRH;duhitrA;duhitRbhyAm;duhitRbhiH;duhitre;duhitRbhyAm;duhitRbhyaH;duhituH;duhitRbhyAm;duhitRbhyaH;duhituH;duhitroH;duhitRRNAm;duhitari;duhitroH;duhitRSu;he duhitaH;he duhitarau;he duhitaraH"
    },
    {
        "ind": "121005",
        "baseindex": "21.005",
        "word": "yAtR",
        "grp": "21",
        "index_in_grp": "5",
        "end": "RkArAntaH",
        "linga": "S",
        "forms": "yAtA;yAtarau;yAtaraH;yAtaram;yAtarau;yAtRRH;yAtrA;yAtRbhyAm;yAtRbhiH;yAtre;yAtRbhyAm;yAtRbhyaH;yAtuH;yAtRbhyAm;yAtRbhyaH;yAtuH;yAtroH;yAtRRNAm;yAtari;yAtroH;yAtRSu;he yAtaH;he yAtarau;he yAtaraH"
    },
    {
        "ind": "122001",
        "baseindex": "22.001",
        "word": "go",
        "grp": "22",
        "index_in_grp": "1",
        "end": "okArAntaH",
        "linga": "S",
        "forms": "gauH;gAvau;gAvaH;gAm;gAvau;gAH;gavA;gobhyAm;gobhiH;gave;gobhyAm;gobhyaH;goH;gobhyAm;gobhyaH;goH;gavoH;gavAm;gavi;gavoH;goSu;he gauH;he gAvau;he gAvaH"
    },
    {
        "ind": "122002",
        "baseindex": "22.002",
        "word": "dyo",
        "grp": "22",
        "index_in_grp": "2",
        "end": "okArAntaH",
        "linga": "S",
        "forms": "dyauH;dyAvau;dyAvaH;dyAm;dyAvau;dyAH;dyavA;dyobhyAm;dyobhiH;dyave;dyobhyAm;dyobhyaH;dyoH;dyobhyAm;dyobhyaH;dyoH;dyavoH;dyavAm;dyavi;dyavoH;dyoSu;he dyauH;he dyAvau;he dyAvaH"
    },
    {
        "ind": "123001",
        "baseindex": "23.001",
        "word": "rai",
        "grp": "23",
        "index_in_grp": "1",
        "end": "aikArAntaH",
        "linga": "S",
        "forms": "rAH;rAyau;rAyaH;rAyam;rAyau;rAyaH;rAyA;rAbhyAm;rAbhiH;rAye;rAbhyAm;rAbhyaH;rAyaH;rAbhyAm;rAbhyaH;rAyaH;rAyoH;rAyAm;rAyi;rAyoH;rAsu;he rAH;he rAyau;he rAyaH"
    },
    {
        "ind": "124001",
        "baseindex": "24.001",
        "word": "nau",
        "grp": "24",
        "index_in_grp": "1",
        "end": "aukArAntaH",
        "linga": "S",
        "forms": "nauH;nAvau;nAvaH;nAvam;nAvau;nAvaH;nAvA;naubhyAm;naubhiH;nAve;naubhyAm;naubhyaH;nAvaH;naubhyAm;naubhyaH;nAvaH;nAvoH;nAvAm;nAvi;nAvoH;nauSu;he nauH;he nAvau;he nAvaH"
    },
    {
        "ind": "125001",
        "baseindex": "25.001",
        "word": "phala",
        "grp": "25",
        "index_in_grp": "1",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "phalam;phale;phalAni;phalam;phale;phalAni;phalena;phalAbhyAm;phalaiH;phalAya;phalAbhyAm;phalebhyaH;phalAt-phalAd;phalAbhyAm;phalebhyaH;phalasya;phalayoH;phalAnAm;phale;phalayoH;phaleSu;he phala;he phale;he phalAni"
    },
    {
        "ind": "125002",
        "baseindex": "25.002",
        "word": "puSpa",
        "grp": "25",
        "index_in_grp": "2",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "puSpam;puSpe;puSpANi;puSpam;puSpe;puSpANi;puSpeNa;puSpAbhyAm;puSpaiH-puSpebhiH;puSpAya;puSpAbhyAm;puSpebhyaH;puSpAt-puSpAd;puSpAbhyAm;puSpebhyaH;puSpasya;puSpayoH;puSpANAm;puSpe;puSpayoH;puSpeSu;he puSpa;he puSpe;he puSpANi"
    },
    {
        "ind": "125003",
        "baseindex": "25.003",
        "word": "sarva",
        "grp": "25",
        "index_in_grp": "3",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "sarvam;sarve;sarvANi;sarvam;sarve;sarvANi;sarveNa;sarvAbhyAm;sarvaiH;sarvasmai;sarvAbhyAm;sarvebhyaH;sarvasmAt-sarvasmAd;sarvAbhyAm;sarvebhyaH;sarvasya;sarvayoH;sarveSAm;sarvasmin;sarvayoH;sarveSu;he sarva;he sarve;he sarvANi"
    },
    {
        "ind": "125004",
        "baseindex": "25.004",
        "word": "vizva",
        "grp": "25",
        "index_in_grp": "4",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "vizvam;vizve;vizvAni;vizvam;vizve;vizvAni;vizvena;vizvAbhyAm;vizvaiH;vizvasmai;vizvAbhyAm;vizvebhyaH;vizvasmAt;vizvAbhyAm;vizvebhyaH;vizvasya;vizvayoH;vizveSAm;vizvasmin;vizvayoH;vizveSu;he vizva;he vizve;he vizvAni"
    },
    {
        "ind": "125005",
        "baseindex": "25.005",
        "word": "priyavizva",
        "grp": "25",
        "index_in_grp": "5",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "priyavizvam;priyavizve;priyavizvAni;priyavizvam;priyavizve;priyavizvAni;priyavizvena;priyavizvAbhyAm;priyavizvaiH;priyavizvAya;priyavizvAbhyAm;priyavizvebhyaH;priyavizvAt-priyavizvAd;priyavizvAbhyAm;priyavizvebhyaH;priyavizvAt;priyavizvayoH;priyavizvAnAm;priyavizve;priyavizvayoH;priyavizveSu;he priyavizva;he priyavizve;he priyavizvAni"
    },
    {
        "ind": "125006",
        "baseindex": "25.006",
        "word": "katara",
        "grp": "25",
        "index_in_grp": "6",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "katarat;katare;katarANi;katarat-katarad;katare;katarANi;katareNa;katarAbhyAm;kataraiH;katarasmai;katarAbhyAm;katarebhyaH;katarasmAt-karatasmAd;katarAbhyAm;katarebhyaH;katarasya;katarayoH;katareSAm;katarasmin;katarayoH;katareSu;he katarat;he katare;he katarANi"
    },
    {
        "ind": "125007",
        "baseindex": "25.007",
        "word": "yatara",
        "grp": "25",
        "index_in_grp": "7",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "yatarat;yatare;yatarANi;yatarat-yatarada;yatare;yatarANi;yatareNa;yatarAbhyAm;yataraiH;yatarasmai;yatarAbhyAm;yatarebhyaH;yatarasmAt-yatarasmAd;yatarAbhyAm;yatarebhyaH;yatarasya;yatarayoH;yatareSAm;yatarasmin;yatarayoH;yatareSu;he yatarat;he yatare;he yatarANi"
    },
    {
        "ind": "125008",
        "baseindex": "25.008",
        "word": "tatara",
        "grp": "25",
        "index_in_grp": "8",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "tatarat;tatare;tatarANi;tatarat-tatarad;tatare;tatarANi;tatareNa;tatarAbhyAm;tataraiH;tatarasmai;tatarAbhyAm;tatarebhyaH;tatarasmAt-tatarasmAd;tatarAbhyAm;tatarebhyaH;tatarasya;tatarayoH;tatareSAm;tatarasmin;tatarayoH;tatareSu;he tatarat;he tatare;he tatarANi"
    },
    {
        "ind": "125009",
        "baseindex": "25.009",
        "word": "ekatara",
        "grp": "25",
        "index_in_grp": "9",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "ekataram;ekatare;ekatarANi;ekataram-ekatamad;ekatare;ekatarANi;ekatareNa;ekatarAbhyAm;ekataraiH;ekatarasmai;ekatarAbhyAm;ekatarebhyaH;ekatarasmAt-ekatarasmAd;ekatarAbhyAm;ekatarebhyaH;ekatarasya;ekatarayoH;ekatareSAm;ekatarasmin;ekatarayoH;ekatareSu;he ekatara;he ekatare;he ekatarANi"
    },
    {
        "ind": "125010",
        "baseindex": "25.010",
        "word": "katama",
        "grp": "25",
        "index_in_grp": "10",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "katamat;katame;katamAni;katamat-katamad;katame;katamAni;katamena;katamAbhyAm;katamaiH;katamasmai;katamAbhyAm;katamebhyaH;katamasmAt-katarasmAd;katamAbhyAm;katamebhyaH;katamasya;katamayoH;katameSAm;katamasmin;katamayoH;katameSu;he katamat;he katame;he katamAni"
    },
    {
        "ind": "125011",
        "baseindex": "25.011",
        "word": "yatama",
        "grp": "25",
        "index_in_grp": "11",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "yatamat;yatame;yatamAni;yatamat-yatamad;yatame;yatamAni;yatamena;yatamAbhyAm;yatamaiH;yatamasmai;yatamAbhyAm;yatamebhyaH;yatamasmAt-yatarasmAd;yatamAbhyAm;yatamebhyaH;yatamasya;yatamayoH;yatameSAm;yatamasmin;yatamayoH;yatameSu;he yatamat;he yatame;he yatamAni"
    },
    {
        "ind": "125012",
        "baseindex": "25.012",
        "word": "tatama",
        "grp": "25",
        "index_in_grp": "12",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "tatamat;tatame;tatamAni;tatamat-tatamad;tatame;tatamAni;tatamena;tatamAbhyAm;tatamaiH;tatamasmai;tatamAbhyAm;tatamebhyaH;tatamasmAt-tatarasmAd;tatamAbhyAm;tatamebhyaH;tatamasya;tatamayoH;tatameSAm;tatamasmin;tatamayoH;tatameSu;he tatamat;he tatame;he tatamAni"
    },
    {
        "ind": "125013",
        "baseindex": "25.013",
        "word": "ekatama",
        "grp": "25",
        "index_in_grp": "13",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "ekatamat-ekatamad;ekatame;ekatamAni;ekatamat-ekatamad;ekatame;ekatamAni;ekatamena;ekatamAbhyAm;ekatamaiH;ekatamasmai;ekatamAbhyAm;ekatamebhyaH;ekatamasmAt-etatamasmAd;ekatamAbhyAm;ekatamebhyaH;ekatamasya;ekatamayoH;ekatameSAm;ekatamasmin;ekatamayoH;ekatameSu;he ekatamat-he ekatamad;he ekatame;he ekatamAni"
    },
    {
        "ind": "125014",
        "baseindex": "25.014",
        "word": "anya",
        "grp": "25",
        "index_in_grp": "14",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "anyat-anyad;anye;anyAni;anyat-anyad;anye;anyAni;anyena;anyAbhyAm;anyaiH;anyasmai;anyAbhyAm;anyebhyaH;anyasmAt-anyasmAd;anyAbhyAm;anyebhyaH;anyasya;anyayoH;anyeSAm;anyasmin;anyayoH;anyeSu;he anyat-he anyad;he anye;he anyAni"
    },
    {
        "ind": "125015",
        "baseindex": "25.015",
        "word": "anyatara",
        "grp": "25",
        "index_in_grp": "15",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "anyatarat-anyatarad;anyatare;anyatarANi;anyatarat-anyatarad;anyatare;anyatarANi;anyatareNa;anyatarAbhyAm;anyataraiH;anyatarasmai;anyatarAbhyAm;anyatarebhyaH;anyatarasmAt-anyatarasmAd;anyatarAbhyAm;anyatarebhyaH;anyatarasya;anyatarayoH;anyatareSAm;anyatarasmin;anyatarayoH;anyatareSu;he anyatarat-he anyatarad;he anyatare;he anyatarANi"
    },
    {
        "ind": "125016",
        "baseindex": "25.016",
        "word": "itara",
        "grp": "25",
        "index_in_grp": "16",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "itarat-itarad;itare;itarANi;itarat-itarad;itare;itarANi;itareNa;itarAbhyAm;itaraiH;itarasmai;itarAbhyAm;itarebhyaH;itarasmAt-itarasmAd;itarAbhyAm;itarebhyaH;itarasya;itarayoH;itareSAm;itarasmin;itarayoH;itareSu;he itarat-he itarad;he itare;he itarANi"
    },
    {
        "ind": "125017",
        "baseindex": "25.017",
        "word": "anyatama",
        "grp": "25",
        "index_in_grp": "17",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "anyatamam;anyatame;anyatamAni;anyatamam;anyatame;anyatamAni;anyatamena;anyatamAbhyAm;anyatamaiH;anyatamAya;anyatamAbhyAm;anyatamebhyaH;anyatamAt-anyatamAd;anyatamAbhyAm;anyatamebhyaH;anyatamasya;anyatamayoH;anyatamAnAm;anyatame;anyatamayoH;anyatameSu;he anyatama;he anyatame;he anyatamAni"
    },
    {
        "ind": "125018",
        "baseindex": "25.018",
        "word": "tva",
        "grp": "25",
        "index_in_grp": "18",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "tvam;tve;tvAni;tvam;tve;tvAni;tvena;tvAbhyAm;tvaiH;tvasmai;tvAbhyAm;tvebhyaH;tvasmAt-tvasmAd;tvAbhyAm;tvebhyaH;tvasya;tvayoH;tveSAm;tvasmin;tvayoH;tveSu;he tva;he tve;he tvAni"
    },
    {
        "ind": "125019",
        "baseindex": "25.019",
        "word": "sama",
        "grp": "25",
        "index_in_grp": "19",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "samam;same;samAni;samam;same;samAni;samena;samAbhyAm;samaiH;samasmai;samAbhyAm;samebhyaH;samasmAt-samasmAd;samAbhyAm;samebhyaH;samasya;samayoH;sameSAm;samasmin;samayoH;sameSu;he sama;he same;he samAni"
    },
    {
        "ind": "125020",
        "baseindex": "25.020",
        "word": "sima",
        "grp": "25",
        "index_in_grp": "20",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "simam;sime;simAni;simam;sime;simAni;simena;simAbhyAm;simaiH;simasmai;simAbhyAm;simebhyaH;simasmAt-simasmAd;simAbhyAm;simebhyaH;simasya;simayoH;simeSAm;simasmin;simayoH;simeSu;he sima;he sime;he simAni"
    },
    {
        "ind": "125021",
        "baseindex": "25.021",
        "word": "eka",
        "grp": "25",
        "index_in_grp": "21",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "ekam;eke;ekAni;ekam;eke;ekAni;ekena;ekAbhyAm;ekaiH;ekasmai;ekAbhyAm;ekebhyaH;ekasmAt-ekasmAd;ekAbhyAm;ekebhyaH;ekasya;ekayoH;ekeSAm;ekasmin;ekayoH;ekeSu;he eka;he eke;he ekAni"
    },
    {
        "ind": "125022",
        "baseindex": "25.022",
        "word": "aneka",
        "grp": "25",
        "index_in_grp": "22",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "anekam;aneke;anekAni;anekam;aneke;anekAni;anekena;anekAbhyAm;anekaiH;anekasmai;anekAbhyAm;anekebhyaH;anekasmAt-anekasmAd;anekAbhyAm;anekebhyaH;anekasya;anekayoH;anekeSAm;anekasmin;anekayoH;anekeSu;he aneka;he aneke;he anekAni"
    },
    {
        "ind": "125023",
        "baseindex": "25.023",
        "word": "ubha",
        "grp": "25",
        "index_in_grp": "23",
        "end": "akArAntaH",
        "linga": "N",
        "forms": ";ubhe;;;ubhe;;;ubhAbhyAm;;;ubhAbhyAm;;;ubhAbhyAm;;;ubhayoH;;;ubhayoH;;;he ubhe;"
    },
    {
        "ind": "125024",
        "baseindex": "25.024",
        "word": "ubhaya",
        "grp": "25",
        "index_in_grp": "24",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "ubhayam;-;ubhayAni;ubhayam;-;ubhayAni;ubhayena;-;ubhayaiH;ubhayasmai;-;ubhayebhyaH;ubhayasmAt-ubhayasmAd;-;ubhayebhyaH;ubhayasya;-;ubhayeSAm;ubhayasmin;-;ubhayeSu;he ubhaya;-;he ubhayAni"
    },
    {
        "ind": "125025",
        "baseindex": "25.025",
        "word": "nema",
        "grp": "25",
        "index_in_grp": "25",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "nemam;neme;nemAni;nemam;neme;nemAni;nemena;nemAbhyAm;nemaiH;nemasmai;nemAbhyAm;nemebhyaH;nemasmAt-nemasmAd;nemAbhyAm;nemebhyaH;nemasya;nemayoH;nemeSAm;nemasmin;nemayoH;nemeSu;he nema;he neme;he nemAni"
    },
    {
        "ind": "125026",
        "baseindex": "25.026",
        "word": "pUrva",
        "grp": "25",
        "index_in_grp": "26",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "pUrvam;pUrve;pUrvANi;pUrvam;pUrve;pUrvANi;pUrveNa;pUrvAbhyAm;pUrvaiH;pUrvasmai;pUrvAbhyAm;pUrvebhyaH;pUrvasmAt-pUrvasmAd-pUrvAt-pUrvAd;pUrvAbhyAm;pUrvebhyaH;pUrvasya;pUrvayoH;pUrveSAm;pUrvasmin-pUrve;pUrvayoH;pUrveSu;he pUrva;he pUrve;he pUrvANi"
    },
    {
        "ind": "125027",
        "baseindex": "25.027",
        "word": "para",
        "grp": "25",
        "index_in_grp": "27",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "param;pare;parANi;param;pare;parANi;pareNa;parAbhyAm;paraiH;parasmai;parAbhyAm;parebhyaH;parasmAt-parasmAd-parAt-parAd;parAbhyAm;parebhyaH;parasya;parayoH;pareSAm;parasmin-pare;parayoH;pareSu;he para;he pare;he parANi"
    },
    {
        "ind": "125028",
        "baseindex": "25.028",
        "word": "avara",
        "grp": "25",
        "index_in_grp": "28",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "avaram;avare;avarANi;avaram;avare;avarANi;avareNa;avarAbhyAm;avaraiH;avarasmai;avarAbhyAm;avarebhyaH;avarasmAt-avarasmAd-avarAt-avarAd;avarAbhyAm;avarebhyaH;avarasya;avarayoH;avareSAm;avarasmin-avare;avarayoH;avareSu;he avara;he avare;he avarANi"
    },
    {
        "ind": "125029",
        "baseindex": "25.029",
        "word": "dakSiNa",
        "grp": "25",
        "index_in_grp": "29",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "dakSiNam;dakSiNe;dakSiNAni;dakSiNam;dakSiNe;dakSiNAni;dakSiNena;dakSiNAbhyAm;dakSiNaiH;dakSiNasmai;dakSiNAbhyAm;dakSiNebhyaH;dakSiNasmAt-dakSiNasmAd-dakSiNAt-dakSiNAd;dakSiNAbhyAm;dakSiNebhyaH;dakSiNasya;dakSiNayoH;dakSiNeSAm;dakSiNasmin-dakSiNe;dakSiNayoH;dakSiNeSu;he dakSiNa;he dakSiNe;he dakSiNAni"
    },
    {
        "ind": "125030",
        "baseindex": "25.030",
        "word": "uttara",
        "grp": "25",
        "index_in_grp": "30",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "uttaram;uttare;uttarANi;uttaram;uttare;uttarANi;uttareNa;uttarAbhyAm;uttaraiH;uttarasmai;uttarAbhyAm;uttarebhyaH;uttarasmAt-uttarasmAd-uttarAt-uttarAd;uttarAbhyAm;uttarebhyaH;uttarasya;uttarayoH;uttareSAm;uttarasmin-uttare;uttarayoH;uttareSu;he uttara;he uttare;he uttarANi"
    },
    {
        "ind": "125031",
        "baseindex": "25.031",
        "word": "apara",
        "grp": "25",
        "index_in_grp": "31",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "aparam;apare;aparANi;aparam;apare;aparANi;apareNa;aparAbhyAm;aparaiH;aparasmai;aparAbhyAm;aparebhyaH;aparasmAt-aparasmAd-aparAt-aparAd;aparAbhyAm;aparebhyaH;aparasya;aparayoH;apareSAm;aparasmin-apare;aparayoH;apareSu;he apara;he apare;he aparANi"
    },
    {
        "ind": "125032",
        "baseindex": "25.032",
        "word": "adhara",
        "grp": "25",
        "index_in_grp": "32",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "adharam;adhare;adharANi;adharam;adhare;adharANi;adhareNa;adharAbhyAm;adharaiH;adharasmai;adharAbhyAm;adharebhyaH;adharasmAt-adharasmAd-adharAt-adharAd;adharAbhyAm;adharebhyaH;adharasya;adharayoH;adhareSAm;adharasmin-adhare;adharayoH;adhareSu;he adhara;he adhare;he adharANi"
    },
    {
        "ind": "125033",
        "baseindex": "25.033",
        "word": "sva",
        "grp": "25",
        "index_in_grp": "33",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "svam;sve;svAni;svam;sve;svAni;svena;svAbhyAm;svaiH;svasmai;svAbhyAm;svebhyaH;svasmAt-svasmAd-svAt-svAd;svAbhyAm;svebhyaH;svasya;svayoH;sveSAm;svasmin-sve;svayoH;sveSu;he sva;he sve;he svAni"
    },
    {
        "ind": "125034",
        "baseindex": "25.034",
        "word": "antara",
        "grp": "25",
        "index_in_grp": "34",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "antaram;antare;antarANi;antaram;antare;antarANi;antareNa;antarAbhyAm;antaraiH;antarasmai;antarAbhyAm;antarebhyaH;antarasmAt-antarasmAd-antarAt-antarAd;antarAbhyAm;antarebhyaH;antarasya;antarayoH;antareSAm;antarasmin-antare;antarayoH;antareSu;he antara;he antare;he antarANi"
    },
    {
        "ind": "125035",
        "baseindex": "25.035",
        "word": "mAsapUrva",
        "grp": "25",
        "index_in_grp": "35",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "mAsapUrvam;mAsapUrve;mAsapUrvANi;mAsapUrvam;mAsapUrve;mAsapUrvANi;mAsapUrveNa;mAsapUrvAbhyAm;mAsapUrvaiH-mAsapUrvebhiH;mAsapUrvAya;mAsapUrvAbhyAm;mAsapUrvebhyaH;mAsapUrvAt-mAsapUrvAd;mAsapUrvAbhyAm;mAsapUrvebhyaH;mAsapUrvasya;mAsapUrvayoH;mAsapUrvANAm;mAsapUrve;mAsapUrvayoH;mAsapUrveSu;he mAsapUrva;he mAsapUrve;he mAsapUrvANi"
    },
    {
        "ind": "125036",
        "baseindex": "25.036",
        "word": "pUrvapara",
        "grp": "25",
        "index_in_grp": "36",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "pUrvaparam;pUrvapare;pUrvaparANi;pUrvaparam;pUrvapare;pUrvaparANi;pUrvapareNa;pUrvaparAbhyAm;pUrvaparaiH-pUrvaparebhiH;pUrvaparAya;pUrvaparAbhyAm;pUrvaparebhyaH;pUrvaparAt-pUrvaparAd;pUrvaparAbhyAm;pUrvaparebhyaH;pUrvaparasya;pUrvaparayoH;pUrvaparANAm;pUrvapare;pUrvaparayoH;pUrvapareSu;he pUrvapara;he pUrvapare;he pUrvaparANi"
    },
    {
        "ind": "125037",
        "baseindex": "25.037",
        "word": "prathama",
        "grp": "25",
        "index_in_grp": "37",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "prathamam;prathame;prathamAni;prathamam;prathame;prathamAni;prathamena;prathamAbhyAm;prathamaiH;prathamAya;prathamAbhyAm;prathamebhyaH;prathamAt-prathamAd;prathamAbhyAm;prathamebhyaH;prathamasya;prathamayoH;prathamAnAm;prathame;prathamayoH;prathameSu;he prathama;he prathame;he prathamAni"
    },
    {
        "ind": "125038",
        "baseindex": "25.038",
        "word": "carama",
        "grp": "25",
        "index_in_grp": "38",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "caramam;carame;caramANi;caramam;carame;caramANi;carameNa;caramAbhyAm;caramaiH;caramAya;caramAbhyAm;caramebhyaH;caramAt-caramAd;caramAbhyAm;caramebhyaH;caramasya;caramayoH;caramANAm;carame;caramayoH;carameSu;he carama;he carame;he caramANi"
    },
    {
        "ind": "125039",
        "baseindex": "25.039",
        "word": "dvaya",
        "grp": "25",
        "index_in_grp": "39",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "dvayam;dvaye;dvayAni;dvayam;dvaye;dvayAni;dvayena;dvayAbhyAm;dvayaiH;dvayAya;dvayAbhyAm;dvayebhyaH;dvayAt-dvayAd;dvayAbhyAm;dvayebhyaH;dvayasya;dvayayoH;dvayAnAm;dvaye;dvayayoH;dvayeSu;he dvaya;he dvaye;he dvayAni"
    },
    {
        "ind": "125040",
        "baseindex": "25.040",
        "word": "dvitaya",
        "grp": "25",
        "index_in_grp": "40",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "dvitayam;dvitaye;dvitayAni;dvitayam;dvitaye;dvitayAni;dvitayena;dvitayAbhyAm;dvitayaiH;dvitayAya;dvitayAbhyAm;dvitayebhyaH;dvitayAt-dvitayAd;dvitayAbhyAm;dvitayebhyaH;dvitayasya;dvitayayoH;dvitayAnAm;dvitaye;dvitayayoH;dvitayeSu;he dvitaya;he dvitaye;he dvitayAni"
    },
    {
        "ind": "125041",
        "baseindex": "25.041",
        "word": "tritaya",
        "grp": "25",
        "index_in_grp": "41",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "tritayam;tritaye;tritayAni;tritayam;tritaye;tritayAni;tritayena;tritayAbhyAm;tritayaiH;tritayAya;tritayAbhyAm;tritayebhyaH;tritayAt-triyAd;tritayAbhyAm;tritayebhyaH;tritayasya;tritayayoH;tritayeSAm;tritaye;tritayayoH;tritayeSu;he tritaya;he tritaye;he tritayAni"
    },
    {
        "ind": "125042",
        "baseindex": "25.042",
        "word": "catuSTaya",
        "grp": "25",
        "index_in_grp": "42",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "catuSTayam;catuSTaye;catuSTayAni;catuSTayam;catuSTaye;catuSTayAni;catuSTayena;catuSTayAbhyAm;catuSTayaiH;catuSTayAya;catuSTayAbhyAm;catuSTayebhyaH;catuSTayAt-catuSTayAd;catuSTayAbhyAm;catuSTayebhyaH;catuSTayasya;catuSTayayoH;catuSTayeSAm;catuSTaye;catuSTayayoH;catuSTayeSu;he catuSTaya;he catuSTaye;he catuSTayAni"
    },
    {
        "ind": "125043",
        "baseindex": "25.043",
        "word": "paJcataya",
        "grp": "25",
        "index_in_grp": "43",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "paJcatayam;paJcataye;paJcatayAni;paJcatayam;paJcataye;paJcatayAni;paJcatayena;paJcatayAbhyAm;paJcatayaiH;paJcatayAya;paJcatayAbhyAm;paJcatayebhyaH;paJcatayAt-paJcatayAd;paJcatayAbhyAm;paJcatayebhyaH;paJcatayasya;paJcatayoH;paJcatayeSAm;paJcataye;paJcatayoH;paJcatayeSu;he paJcataya;he paJcataye;he paJcatayAni"
    },
    {
        "ind": "125044",
        "baseindex": "25.044",
        "word": "alpa",
        "grp": "25",
        "index_in_grp": "44",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "alpam;alpe;alpAni;alpam;alpe;alpAni;alpena;alpAbhyAm;alpaiH;alpAya;alpAbhyAm;alpebhyaH;alpAt-alpAd;alpAbhyAm;alpebhyaH;alpasya;alpayoH;alpAnAm;alpe;alpayoH;alpeSu;he alpa;he alpe;he alpAni"
    },
    {
        "ind": "125045",
        "baseindex": "25.045",
        "word": "ardha",
        "grp": "25",
        "index_in_grp": "45",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "ardham;ardhe;ardhAni;ardham;ardhe;ardhAni;ardhena;ardhAbhyAm;ardhaiH;ardhAya;ardhAbhyAm;ardhebhyaH;ardhAt-ardhAd;ardhAbhyAm;ardhebhyaH;ardhasya;ardhayoH;ardhAnAm;ardhe;ardhayoH;ardheSu;he ardha;he ardhe;he ardhAni"
    },
    {
        "ind": "125046",
        "baseindex": "25.046",
        "word": "katipaya",
        "grp": "25",
        "index_in_grp": "46",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "katipayam;katipaye;katipayAni;katipayam;katipaye;katipayAni;katipayena;katipayAbhyAm;katipayaiH;katipayAya;katipayAbhyAm;katipayebhyaH;katipayAt-katipayAd;katipayAbhyAm;katipayebhyaH;katipayasya;katipayayoH;katipayAnAm;katipaye;katipayayoH;katipayeSu;he katipaya;he katipaye;he katipayAni"
    },
    {
        "ind": "125047",
        "baseindex": "25.047",
        "word": "dvitIya",
        "grp": "25",
        "index_in_grp": "47",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "dvitIyam;dvitIye;dvitIyAni;dvitIyam;dvitIye;dvitIyAni;dvitIyena;dvitIyAbhyAm;dvitIyaiH;dvitIyasmai-dvitIyAya;dvitIyAbhyAm;dvitIyebhyaH;dvitIyasmAt-dvitIyasmAd-dvitIyAt-dvitIyAd;dvitIyAbhyAm;dvitIyebhyaH;dvitIyasya;dvitIyayoH;dvitIyAnAm;dvitiyasmin-dvitIye;dvitIyayoH;dvitIyeSu;he dvitIya;he dvitIye;he dvitIyAni"
    },
    {
        "ind": "125048",
        "baseindex": "25.048",
        "word": "tRtIya",
        "grp": "25",
        "index_in_grp": "48",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "tRtIyam;tRtIye;tRtIyAni;tRtIyam;tRtIye;tRtIyAni;tRtIyena;tRtIyAbhyAm;tRtIyaiH;tRtIyasmai-tRtIyAya;tRtIyAbhyAm;tRtIyebhyaH;tRtIyasmAt-tRtIyasmAd-tRtIyAt-tRtIyAd;tRtIyAbhyAm;tRtIyebhyaH;tRtIyasya;tRtIyayoH;tRtIyAnAm;tRtIyasmin-tRtIye;tRtIyayoH;tRtIyeSu;he tRtIya;he tRtIye;he tRtIyAni"
    },
    {
        "ind": "125049",
        "baseindex": "25.049",
        "word": "ajara",
        "grp": "25",
        "index_in_grp": "49",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "ajaram;ajare-ajarasI;ajarANi-ajarAMsi;ajaram-ajarasam;ajare-ajarasI;ajarANi-ajarAMsi;ajareNa-ajarasA;ajarAbhyAm;ajaraiH;ajarAya-ajarase;ajarAbhyAm;ajarebhyaH;ajarAt-ajarAd-ajarasaH;ajarAbhyAm;ajarebhyaH;ajarasya-ajarasaH;ajarayoH-ajarasoH;ajarANAm-ajarasAm;ajare-ajarasi;ajarayoH-ajarasoH;ajareSu;he ajara;he ajare-ajarasI;he ajarANi-ajarAMsi"
    },
    {
        "ind": "125050",
        "baseindex": "25.050",
        "word": "hRdaya",
        "grp": "25",
        "index_in_grp": "50",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "hRdayam;hRdaye;hRdayAni;hRdayam;hRdaye;hRdayAni-hRndi;hRdayena-hRdA;hRdayAbhyAm-hRdbhyAm;hRdayaiH-hRdbhiH;hRdayAya-hRde;hRdayAbhyAm-hRdbhyAm;hRdayebhyaH-hRdbhyaH;hRdayAt-hRdayAd-hRdaH;hRdayAbhyAm-hRdbhyAm;hRdayebhyaH-hRdbhyaH;hRdayasya-hRdaH;hRdayoH-hRdoH;hRdayAnAm-hRdAm;hRdaye-hRdi;hRdayoH-hRdoH;hRdayeSu-hRtsu;he hRdaya;he hRdaye;he hRdayAni"
    },
    {
        "ind": "125051",
        "baseindex": "25.051",
        "word": "udaka",
        "grp": "25",
        "index_in_grp": "51",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "udakam;udake;udakAni;udakam;udake;udakAni-udAni;udakena-udnA;udakAbhyAm-udabhyAm;udakaiH-udabhiH;udakAya-udne;udakAbhyAm-udabhyAm;udakebhyaH-udabhyaH;udakAt-udakAd-udnaH;udakAbhyAm-udabhyAm;udakebhyaH-udabhyaH;udakasya-udnaH;udakayoH-udnoH;udakAnAm-udnAm;udake-udni-udani;udakayoH-udnoH;udakeSu-udasu;he udaka;he udake;he udakAni"
    },
    {
        "ind": "125052",
        "baseindex": "25.052",
        "word": "Asya",
        "grp": "25",
        "index_in_grp": "52",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "Asyam;Asye;AsyAni;Asyam;Asye;AsyAni-AsAni;Asyena-AsnA;AsyAbhyAm-AsabhyAm;AsyaiH-AsabhiH;AsyAya-Asne;AsyAbhyAm-AsabhyAm;AsyebhyaH-AsabhyaH;AsyAt-AsyAd-AsnaH;AsyAbhyAm-AsabhyAm;AsyebhyaH-AsabhyaH;Asyasya-AsnaH;AsyayoH-AsnoH;AsyAnAm-AsnAm;Asye-Asni;AsyayoH-AsnoH;AsyeSu-Asasu;he Asya;he Asye;he AsyAni"
    },
    {
        "ind": "125053",
        "baseindex": "25.053",
        "word": "mAMsa",
        "grp": "25",
        "index_in_grp": "53",
        "end": "akArAntaH",
        "linga": "N",
        "forms": "mAMsam;mAMse;mAMsAni;mAMsam;mAMse;mAMsAni-mAMsi;mAMsena-mAMsA;mAMsAbhyAm-mAnbhyAm;mAMsabhiH-mAnbhiH;mAMsAya-mAMse;mAMsAbhyAm-mAnbhyAm;mAMsebhyaH-mAnbhyaH;mAMsAt-mAMsAd-mAMsaH;mAMsAbhyAm-mAnbhyAm;mAMsebhyaH-mAnbhyaH;mAMsasya-mAMsaH;mAMsayoH-mAMsoH;mAMsAnAm-mAMsAm;mAMse-mAMsi;mAMsayoH-mAMsoH;mAMseSu-mAnsu;he mAMsa;he mAMse;he mAMsAni"
    },
    {
        "ind": "126001",
        "baseindex": "26.001",
        "word": "vizvapA",
        "grp": "26",
        "index_in_grp": "1",
        "end": "AkArAntaH",
        "linga": "N",
        "forms": "vizvapam;vizvape;vizvapAni;vizvapam;vizvape;vizvapAni;vizvapena;vizvapAbhyAm;vizvapaiH;vizvapAya;vizvapAbhyAm;vizvapebhyaH;vizvapAt-vizvapAd;vizvapAbhyAm;vizvapebhyaH;vizvapAt;vizvapayoH;vizvapAnAm;vizvape;vizvapayoH;vizvapeSu;he vizvapa;he vizvape;he vizvapAni"
    },
    {
        "ind": "126002",
        "baseindex": "26.002",
        "word": "zrIpA",
        "grp": "26",
        "index_in_grp": "2",
        "end": "AkArAntaH",
        "linga": "N",
        "forms": "zrIpam;zrIpe;zrIpANi;zrIpam;zrIpe;zrIpANi;zrIpeNa;zrIpAbhyAm;zrIpaiH-zrIpebhiH;zrIpAya;zrIpAbhyAm;zrIpebhyaH;zrIpAt-zrIpAd;zrIpAbhyAm;zrIpebhyaH;zrIpasya;zrIpayoH;zrIpANAm;zrIpe;zrIpayoH;zrIpeSu;he zrIpa;he zrIpe;he zrIpANi"
    },
    {
        "ind": "127001",
        "baseindex": "27.001",
        "word": "vAri",
        "grp": "27",
        "index_in_grp": "1",
        "end": "ikArAntaH",
        "linga": "N",
        "forms": "vAri;vAriNI;vArINi;vAri;vAriNI;vArINi;vAriNA;vAribhyAm;vAribhiH;vAriNe;vAribhyAm;vAribhyaH;vAriNaH;vAribhyAm;vAribhyaH;vAriNaH;vAriNoH;vArINAm;vAriNi;vAriNoH;vAriSu;he vAri-he vAre;he vAriNI;he vArINi"
    },
    {
        "ind": "127002",
        "baseindex": "27.002",
        "word": "zuci",
        "grp": "27",
        "index_in_grp": "2",
        "end": "ikArAntaH",
        "linga": "N",
        "forms": "zuci;zucinI;zucIni;zuci;zucinI;zucIni;zucinA;zucibhyAm;zucibhiH;zucaye-zucine;zucibhyAm;zucibhyaH;zucinaH-zuceH;zucibhyAm;zucibhyaH;zucinaH-zuceH;zucinoH-zucyoH;zucInAm;zucau-zucinI;zucinoH-zucyoH;zuciSu;he zuci-zuce;he zucinI;he zucIni"
    },
    {
        "ind": "128001",
        "baseindex": "28.001",
        "word": "surabhi",
        "grp": "28",
        "index_in_grp": "1",
        "end": "ikArANtaH",
        "linga": "N",
        "forms": "surabhi;surabhiNI;surabhINi;surabhi;surabhiNI;surabhINi;surabhiNA;surabhibhyAm;surabhibhiH;surabhaye-surabhiNe;surabhibhyAm;surabhibhyaH;surabhiNaH-surabheH;surabhibhyAm;surabhibhyaH;surabhiNaH-surabheH;surabhiNoH-surabhyoH;surabhINAm;surabhau-surabhiNI;surabhiNoH-surabhyoH;surabhiSu;he surabhi-surabhe;he surabhiNI;he surabhINi"
    },
    {
        "ind": "129001",
        "baseindex": "29.001",
        "word": "atistri",
        "grp": "29",
        "index_in_grp": "1",
        "end": "ikArAntaH",
        "linga": "N",
        "forms": "atistri;atistriNI;atistrINi;atistri;atistriNI;atistrINi;atistriNA;atistribhyAm;atistribhiH;atistriye-atistriNe;atistribhyAm;atistribhyaH;atistriNaH-atistreH;atistribhyAm;atistribhyaH;atistriNaH-atistreH;atistriNoH-atistriyoH;atistrINAm;atistrau-atistriNi;atistriNoH-atistriyoH;atistriSu;he atistri-atistre;he atistriNI;he atistrINi"
    },
    {
        "ind": "129002",
        "baseindex": "29.002",
        "word": "anAdi",
        "grp": "29",
        "index_in_grp": "2",
        "end": "ikArAntaH",
        "linga": "N",
        "forms": "anAdi;anAdinI;anAdIni;anAdi;anAdinI;anAdIni;anAdinA;anAdibhyAm;anAdibhiH;anAdaye-anAdine;anAdibhyAm;anAdibhyaH;anAdinaH-anAdeH;anAdibhyAm;anAdibhyaH;anAdinaH-anAdeH;anAdinoH-anAdyoH;anAdInAm;anAdau-anAdini;anAdinoH-anAdyoH;anAdiSu;he anAdi-anAde;he anAdinI;he anAdIni"
    },
    {
        "ind": "129003",
        "baseindex": "29.003",
        "word": "priyatri",
        "grp": "29",
        "index_in_grp": "3",
        "end": "ikArAntaH",
        "linga": "N",
        "forms": "priyatri-priyatisR;priyatisRNI;priyatisRRNi;priyatri-priyatisRNI;priyatisRNI;priyatisRRNi;priyatisrA-priyatisRNA;priyatisRbhyAm;priyatisRbhiH;priyatisre-priyatisRNe;priyatisRbhyAm;priyatisRbhyaH;priyatisraH-priyatisRNaH;priyatisRbhyAm;priyatisRbhyaH;priyatisraH-priyatisRNaH;priyatisroH-priyatisRNoH;priyatisRNAm;priyatisra-priyatisRNi;priyatisroH-priyatisRNoH;priyatisRSu;he priyatri-priyatisR;he priyatisRNI;he priyatisRRNi"
    },
    {
        "ind": "129004",
        "baseindex": "29.004",
        "word": "kati",
        "grp": "29",
        "index_in_grp": "4",
        "end": "ikArAntaH",
        "linga": "N",
        "forms": "-;-;kati;-;-;kati;-;-;katibhiH;-;-;katibhyaH;-;-;katibhyaH;-;-;katInAm;-;-;katiSu;-;-;he kati"
    },
    {
        "ind": "129005",
        "baseindex": "29.005",
        "word": "dadhi",
        "grp": "29",
        "index_in_grp": "5",
        "end": "ikArAntaH",
        "linga": "N",
        "forms": "dadhi;dadhinI;dadhIni;dadhi;dadhinI;dadhIni;dadhnA;dadhibhyAm;dadhibhiH;dadhne;dadhibhyAm;dadhibhyaH;dadhnaH;dadhibhyAm;dadhibhyaH;dadhnaH;dadhnoH;dadhnAm;dadhni-dadhani;dadhnoH;dadhiSu;he dadhi-he dadhe;he dadhinI;he dadhIni"
    },
    {
        "ind": "129006",
        "baseindex": "29.006",
        "word": "atidadhi",
        "grp": "29",
        "index_in_grp": "6",
        "end": "ikArAntaH",
        "linga": "N",
        "forms": "atidadhi;atidadhinI;atidadhIni;atidadhi;atidadhinI;atidadhIni;atidadhnA;atidadhibhyAm;atidadhibhiH;atidadhne;atidadhibhyAm;atidadhibhyaH;atidadhnaH;atidadhibhyAm;atidadhibhyaH;atidadhnaH;atidadhnoH;atidadhnAm;atidadhni-atidadhani;atidadhnoH;atidadhiSu;he atidadhe;he atidadhinI;he atidadhIni"
    },
    {
        "ind": "129007",
        "baseindex": "29.007",
        "word": "asthi",
        "grp": "29",
        "index_in_grp": "7",
        "end": "ikArAntaH",
        "linga": "N",
        "forms": "asthi;asthinI;asthIni;asthi;asthinI;asthIni;asthnA;asthibhyAm;asthibhiH;asthne;asthibhyAm;asthibhyaH;asthnaH;asthibhyAm;asthibhyaH;asthnaH;asthnoH;asthnAm;asthni-asthani;asthnoH;asthiSu;he asthi-he  asthe;he asthinI;he asthIni"
    },
    {
        "ind": "129008",
        "baseindex": "29.008",
        "word": "sakthi",
        "grp": "29",
        "index_in_grp": "8",
        "end": "ikArAntaH",
        "linga": "N",
        "forms": "sakthi;sakthinI;sakthIni;sakthi;sakthinI;sakthIni;sakthnA;sakthibhyAm;sakthibhiH;sakthne;sakthibhyAm;sakthibhyaH;sakthnaH;sakthibhyAm;sakthibhyaH;sakthnaH;sakthnoH;sakthnAm;sakthni-sakthani;sakthnoH;sakthiSu;he sakthi-he sakthe;he sakthinI;he sakthIni"
    },
    {
        "ind": "129009",
        "baseindex": "29.009",
        "word": "akSi",
        "grp": "29",
        "index_in_grp": "9",
        "end": "ikArAntaH",
        "linga": "N",
        "forms": "akSi;akSiNI;akSINi;akSi;akSiNI;akSINi;akSNA;akSibhyAm;akSibhiH;akSNe;akSibhyAm;akSibhyaH;akSNaH;akSibhyAm;akSibhyaH;akSNaH;akSNoH;akSNAm;akSNi-akSaNi;akSNoH;akSiSu;he akSi-he akSe;he akSiNI;he akSINi"
    },
    {
        "ind": "130001",
        "baseindex": "30.001",
        "word": "sudhI",
        "grp": "30",
        "index_in_grp": "1",
        "end": "IkArAntaH",
        "linga": "N",
        "forms": "sudhi;sudhinI;sudhIni;sudhi;sudhinI;sudhIni;sudhiyA-sudhinA;sudhibhyAm;sudhibhiH;sudhiye-sudhine;sudhibhyAm;sudhibhyaH;sudhinaH-sudhiyaH;sudhibhyAm;sudhibhyaH;sudhinaH-sudhiyaH;sudhinoH-sudhiyoH;sudhiyAm-sudhInAm;sudhini-sudhiyi;sudhinoH-sudhiyoH;sudhiSu;he sudhi-he sudhe;he sudhinI;he sudhIni"
    },
    {
        "ind": "130002",
        "baseindex": "30.002",
        "word": "pradhI",
        "grp": "30",
        "index_in_grp": "2",
        "end": "IkArAntaH",
        "linga": "N",
        "forms": "pradhi;pradhinI;pradhIni;pradhi;pradhinI;pradhIni;pradhyA-pradhinA;pradhibhyAm;pradhibhiH;pradhye-pradhine;pradhibhyAm;pradhibhyaH;pradhinaH-pradhyaH;pradhibhyAm;pradhibhyaH;pradhinaH-pradhyaH;pradhinoH-pradhyoH;pradhyAm-pradhInAm;pradhini-pradhyi;pradhinoH-pradhyoH;pradhiSu;he pradhi-he pradhe;he pradhinI;he pradhIni"
    },
    {
        "ind": "131001",
        "baseindex": "31.001",
        "word": "madhu",
        "grp": "31",
        "index_in_grp": "1",
        "end": "ukArAntaH",
        "linga": "N",
        "forms": "madhu;madhunI;madhUni;madhu;madhunI;madhUni;madhunA;madhubhyAm;madhubhiH;madhune;madhubhyAm;madhubhyaH;madhunaH;madhubhyAm;madhubhyaH;madhunaH;madhunoH;madhUnAm;madhuni;madhunoH;madhuSu;he madhu-madho;he madhunI;he madhUni"
    },
    {
        "ind": "131002",
        "baseindex": "31.002",
        "word": "ambu",
        "grp": "31",
        "index_in_grp": "2",
        "end": "ukArAntaH",
        "linga": "N",
        "forms": "ambu;ambunI;ambUni;ambu;ambunI;ambUni;ambunA;ambubhyAm;ambubhiH;ambune;ambubhyAm;ambubhyaH;ambunaH;ambubhyAm;ambubhyaH;ambunaH;ambunoH;ambUnAm;ambuni;ambunoH;ambuSu;he ambu-ambo;he ambunI;he ambUni"
    },
    {
        "ind": "131003",
        "baseindex": "31.003",
        "word": "vasu",
        "grp": "31",
        "index_in_grp": "3",
        "end": "ukArAntaH",
        "linga": "N",
        "forms": "vasu;vasunI;vasUni;vasu;vasunI;vasUni;vasunA;vasubhyAm;vasubhiH;vasune;vasubhyAm;vasubhyaH;vasunaH;vasubhyAm;vasubhyaH;vasunaH;vasunoH;vasUnAm;vasuni;vasunoH;vasuSu;he vasu-vaso;he vasunI;he vasUni"
    },
    {
        "ind": "131004",
        "baseindex": "31.004",
        "word": "azru",
        "grp": "31",
        "index_in_grp": "4",
        "end": "ukArAntaH",
        "linga": "N",
        "forms": "azru;azruNI;azrUNi;azru;azruNI;azrUNi;azruNA;azrubhyAm;azrubhiH;azruNe;azrubhyAm;azrubhyaH;azruNaH;azrubhyAm;azrubhyaH;azruNaH;azruNoH;azrUNAm;azruNi;azruNoH;azruSu;he azru-azro;he azruNI;he azrUNi"
    },
    {
        "ind": "131005",
        "baseindex": "31.005",
        "word": "laghu",
        "grp": "31",
        "index_in_grp": "5",
        "end": "ukArAntaH",
        "linga": "N",
        "forms": "laghu;laghunI;laghUni;laghu;laghunI;laghUni;laghunA;laghubhyAm;laghubhiH;laghune-laghave;laghubhyAm;laghubhyaH;laghunaH-laghavaH;laghubhyAm;laghubhyaH;laghunaH-laghavaH;laghunoH-laghvoH;laghUnAm;laghuni-laghvi;laghunoH-laghvoH;laghuSu;he laghu-lagho;he laghunI;he laghUni"
    },
    {
        "ind": "131006",
        "baseindex": "31.006",
        "word": "bahu",
        "grp": "31",
        "index_in_grp": "6",
        "end": "ukArAntaH",
        "linga": "N",
        "forms": "bahu;bahunI;bahUni;bahu;bahunI;bahUni;bahunA;bahubhyAm;bahubhiH;bahune-bahave;bahubhyAm;bahubhyaH;bahunaH-bahavaH;bahubhyAm;bahubhyaH;bahunaH-bahavaH;bahunoH-bahvoH;bahUnAm;bahuni-bahvi;bahunoH-bahvoH;bahuSu;he bahu-baho;he bahunI;he bahUni"
    },
    {
        "ind": "131007",
        "baseindex": "31.007",
        "word": "vastu",
        "grp": "31",
        "index_in_grp": "7",
        "end": "ukArAntaH",
        "linga": "N",
        "forms": "vastu;vastunI;vastUni;vastu;vastunI;vastUni;vastunA;vastubhyAm;vastubhiH;vastune;vastubhyAm;vastubhyaH;vastunaH;vastubhyAm;vastubhyaH;vastunaH;vastunoH;vastUnAm;vastuni;vastunoH;vastuSu;he vastu-vasto;he vastunI;he vastUni"
    },
    {
        "ind": "131008",
        "baseindex": "31.008",
        "word": "pIlu",
        "grp": "31",
        "index_in_grp": "8",
        "end": "ukArAntaH",
        "linga": "N",
        "forms": "pIlu;pIlunI;pIlUni;pIlu;pIlunI;pIlUni;pIlunA;pIlubhyAm;pIlubhiH;pIlune;pIlubhyAm;pIlubhyaH;pIlunaH;pIlubhyAm;pIlubhyaH;pIlunaH;pIlunoH;pIlUnAm;pIluni;pIlunoH;pIluSu;he pIlu-pIlo;he pIlunI;he pIlUni"
    },
    {
        "ind": "131009",
        "baseindex": "31.009",
        "word": "sAnu",
        "grp": "31",
        "index_in_grp": "9",
        "end": "ukArAntaH",
        "linga": "N",
        "forms": "sAnu;sAnunI;sAnUni;sAnu;sAnunI;sAnUni-snUni;sAnunA-snunA;sAnubhyAm-snubhyAm;sAnubhiH-snubhiH;sAnune-snave-sAnave;sAnubhyAm-snubhyAm;sAnubhyaH-snubhyaH;snoH-sAnoH-sAnunaH;sAnubhyAm-snubhyAm;sAnubhyaH-snuDbhyaH;snoH-sAnoH-sAnunaH;snavoH-sAnvoH-sAnunoH;sAnUnAm-snUnAm;snau-sAnau-sAnuni;snavoH-sAnvoH-sAnunoH;snuSu-sAnuSu;he sAnu-he sAno;he sAnunI;he sAnUni"
    },
    {
        "ind": "131010",
        "baseindex": "31.010",
        "word": "priyakroSTu",
        "grp": "31",
        "index_in_grp": "10",
        "end": "ukArAntaH",
        "linga": "N",
        "forms": "priyakroSTu;priyakroSTunI;priyakroSTUni;priyakroSTu;priyakroSTunI;priyakroSTUni;priyakroSTunA-priyakroSTrA;priyakroSTubhyAm;priyakroSTubhiH-priyakroSTabhiH;priyakroSTune-priyakroSTave;priyakroSTubhyAm;priyakroSTubhyaH;priyakroSTuH-priyakroSToH-priyakroSTunaH;priyakroSTubhyAm;priyakroSTubhyaH;priyakroSTuH-priyakroSToH-priyakroSTunaH;priyakroSTunoH-priyakroSTroH-priyakroSTvoH;priyakroSTUnAm;priyakroSTuni-priyakroSTari-priyakroSTau;priyakroSTunoH-priyakroSTroH-priyakroSTvoH;priyakroSTuSu;he priyakroSTu-priyakroSTo;he priyakroSTunI;he priyakroSTUni"
    },
    {
        "ind": "132001",
        "baseindex": "32.001",
        "word": "sulU",
        "grp": "32",
        "index_in_grp": "1",
        "end": "UkArAntaH",
        "linga": "N",
        "forms": "sulu;sulunI;sulUni;sulu;sulunI;sulUni;sulvA-sulunA;sulubhyAm;sulubhiH;sulune-sulve;sulubhyAm;sulubhyaH;sulunaH-sulvaH;sulubhyAm;sulubhyaH;sulunaH-sulvaH;sulunoH-sulvoH;sulUnAm-sulvAm;suluni-sulvi;sulunoH-sulvoH;suluSu;he sulu-sulo;he sulunI;he sulUni"
    },
    {
        "ind": "133001",
        "baseindex": "33.001",
        "word": "dhAtR",
        "grp": "33",
        "index_in_grp": "1",
        "end": "RkArAntaH",
        "linga": "N",
        "forms": "dhAtR;dhAtRNI;dhAtRRNi;dhAtR;dhAtRNI;dhAtRRNi;dhAtRNA-dhAtrA;dhAtRbhyAm;dhAtRbhiH;dhAtRNe-dhAtre;dhAtRbhyAm;dhAtRbhyaH;dhAtRNaH-dhAtuH;dhAtRbhyAm;dhAtRbhyaH;dhAtRNaH-dhAtuH;dhAtRNoH-dhAtroH;dhAtRRNAm;dhAtRNi-dhAtari;dhAtRNoH-dhAtroH;dhAtRSu;he dhAtR-he dhAtaH;he dhAtRNI;he dhAtRRNi"
    },
    {
        "ind": "134001",
        "baseindex": "34.001",
        "word": "gamlR",
        "grp": "34",
        "index_in_grp": "1",
        "end": "lRkArAntaH",
        "linga": "N",
        "forms": "gamlR;gamlRNI;gamRRNi;gamlR;gamlRNI;gamRRNi;gamlRNA-gamlA;gamlRbhyAm;gamlRbhiH;gamlRNe-gamle;gamlRbhyAm;gamlRbhyaH;gamlRNaH-gamluH;gamlRbhyAm;gamlRbhyaH;gamlRNaH-gamluH;gamlRNoH-gamloH;gamRRNAm;gamlRNi-gamli;gamlRNoH-gamloH;gamlRSu;he gamlR-he gamal;he gamlRNI;he gamRRNi"
    },
    {
        "ind": "135001",
        "baseindex": "35.001",
        "word": "susmRte",
        "grp": "35",
        "index_in_grp": "1",
        "end": "ekArAntaH",
        "linga": "N",
        "forms": "susmRti;susmRtinI;susmRtIni;susmRti;susmRtinI;susmRtIni;susmRtinA-susmRtayA;susmRtibhyAm;susmRtibhiH;susmRtine-susmRtaye;susmRtibhyAm;susmRtibhyaH;susmRtinaH-susmRteH;susmRtibhyAm;susmRtibhyaH;susmRtinaH-susmRteH;susmRtinoH-susmRtayoH;susmRtayAm;susmRtayi-susmRtini;susmRtinoH-susmRtayoH;susmRtiSu;he susmRte-he susmRti;he susmRtinI;he susmRtIni"
    },
    {
        "ind": "136001",
        "baseindex": "36.001",
        "word": "prarai",
        "grp": "36",
        "index_in_grp": "1",
        "end": "aikArAntaH",
        "linga": "N",
        "forms": "prari;prariNI;prarINi;prari;prariNI;prarINi;prariNA;prarAbhyAm;prarAbhiH;prariNe;prarAbhyAm;prarAbhyaH;prariNaH;prarAbhyAm;prarAbhyaH;prariNaH;prariNoH;prarINAm;prariNi;prariNoH;prarAsu;he prare-prari;he prariNI;he prarINi"
    },
    {
        "ind": "137001",
        "baseindex": "37.001",
        "word": "pradyo",
        "grp": "37",
        "index_in_grp": "1",
        "end": "okArAntaH",
        "linga": "N",
        "forms": "pradyu;pradyunI;pradyUni;pradyu;pradyunI;pradyUni;pradyunA;pradyubhyAm;pradyubhiH;pradyune;pradyubhyAm;pradyubhyaH;pradyunaH;pradyubhyAm;pradyubhyaH;pradyunaH;pradyunoH;pradyUnAm;pradyuni;pradyunoH;pradyuSu;he pradyo-he pradyu;he pradyunI;he pradyUni"
    },
    {
        "ind": "138001",
        "baseindex": "38.001",
        "word": "sunau",
        "grp": "38",
        "index_in_grp": "1",
        "end": "aukArAntaH",
        "linga": "N",
        "forms": "sunu;sununI;sunUni;sunu;sununI;sunUni;sununA;sunubhyAm;sunubhiH;sunune;sunubhyAm;sunubhyaH;sununaH;sunubhyAm;sunubhyaH;sununaH;sununoH;sunUnAm;sununi;sununoH;sunuSu;he suno-he sunu;he sununI;he sunUni"
    },
    {
        "ind": "139001",
        "baseindex": "39.001",
        "word": "lih",
        "grp": "39",
        "index_in_grp": "1",
        "end": "hakArAntaH",
        "linga": "P",
        "forms": "liT-liD;lihau;lihaH;liham;lihau;lihaH;lihA;liDbhyAm;liDbhiH;lihe;liDbhyAm;liDbhyaH;lihaH;liDbhyAm;liDbhyaH;lihaH;lihoH;lihAm;lihi;lihoH;liTtsu-liTsu;he liT-he liD;he lihau;he lihaH"
    },
    {
        "ind": "139002",
        "baseindex": "39.002",
        "word": "dAmalih",
        "grp": "39",
        "index_in_grp": "2",
        "end": "hakArAntaH",
        "linga": "P",
        "forms": "dAmaliT-dAmaliD;dAmalihau;dAmalihaH;dAmaliham;dAmalihau;dAmalihaH;dAmalihA;dAmaliDbhyAm;dAmaliDbhiH;dAmalihe;dAmaliDbhyAm;dAmaliDbhyaH;dAmalihaH;dAmaliDbhyAm;dAmaliDbhyaH;dAmalihaH;dAmalihoH;dAmalihAm;dAmalihi;dAmalihoH;dAmaliTtsu-dAmaliTsu;he dAmaliT-he dAmaliD;he dAmalihau;he dAmalihaH"
    },
    {
        "ind": "139003",
        "baseindex": "39.003",
        "word": "duh",
        "grp": "39",
        "index_in_grp": "3",
        "end": "hakArAntaH",
        "linga": "P",
        "forms": "dhuk-dhug;duhau;duhaH;duham;duhau;duhaH;duhA;dhugbhyAm;dhugbhiH;duhe;dhugbhyAm;dhugbhyaH;duhaH;dhugbhyAm;dhugbhyaH;duhaH;duhoH;duhAm;duhi;duhoH;dhukSu;he dhuk-he dhug;he duhau;he duhaH"
    },
    {
        "ind": "139004",
        "baseindex": "39.004",
        "word": "druh",
        "grp": "39",
        "index_in_grp": "4",
        "end": "hakArAntaH",
        "linga": "P",
        "forms": "dhruk-dhrug-dhruT-dhruD;druhau;druhaH;druham;druhau;druhaH;druhA;dhugbhyAm-dhruDbhyAm;dhugbhiH-dhruDbhiH;druhe;dhugbhyAm-dhruDbhyAm;dhugbhyaH-dhruDbhyaH;druhaH;dhugbhyAm-dhruDbhyAm;dhugbhyaH-dhruDbhyaH;druhaH;druhoH;druhAm;druhi;druhoH;dhrukSu-dhruTtsu-dhruTsu;he dhruk-dhrug-he dhruT-he dhruD;he druhau;he druhaH"
    },
    {
        "ind": "139005",
        "baseindex": "39.005",
        "word": "muh",
        "grp": "39",
        "index_in_grp": "5",
        "end": "hakArAntaH",
        "linga": "P",
        "forms": "muk-mug-muT-muD;muhau;muhaH;muham;muhau;muhaH;muhA;mugbhyAm-muDbhyAm;mugbhiH-muDbhiH;muhe;mugbhyAm-muDbhyAm;mugbhyaH-muDbhyaH;muhaH;mugbhyAm-muDbhyAm;mugbhyaH-muDbhyaH;muhaH;muhoH;muhAm;muhi;muhoH;mukSu-muTtsu-muTsu;he muk-he mug-he muT-he muD;he muhau;he muhaH"
    },
    {
        "ind": "139006",
        "baseindex": "39.006",
        "word": "SNuh",
        "grp": "39",
        "index_in_grp": "6",
        "end": "hakArAntaH",
        "linga": "P",
        "forms": "snuk-snug-snuT-snuD;snuhau;snuhaH;snuham;snuhau;snuhaH;snuhA;snugbhyAm-snuDbhyAm;snugbhiH-snuDbhiH;snuhe;snugbhyAm-snuDbhyAm;snugbhyaH-snuDbhyaH;snuhaH;snugbhyAm-snuDbhyAm;snugbhyaH-snuDbhyaH;snuhaH;snuhoH;snuhAm;snuhi;snuhoH;snukSu-snuTtsu-snuTsu;he snuk-he snug-he snuT-he snuD;he snuhau;he snuhaH"
    },
    {
        "ind": "139007",
        "baseindex": "39.007",
        "word": "SNih",
        "grp": "39",
        "index_in_grp": "7",
        "end": "hakArAntaH",
        "linga": "P",
        "forms": "snik-snig-sniT-sniD;snihau;snihaH;sniham;snihau;snihaH;snihA;snigbhyAm-sniDbhyAm;snigbhiH-sniDbhiH;snihe;snigbhyAm-sniDbhyAm;snigbhyaH-sniDbhyaH;snihaH;snigbhyAm-sniDbhyAm;snigbhyaH-sniDbhyaH;snihaH;snihoH;snihAm;snihi;snihoH;snikSu-sniTtsu-sniTsu;he snik-he snig-he sniT-he sniD;he snihau;he snihaH"
    },
    {
        "ind": "139008",
        "baseindex": "39.008",
        "word": "vizvavAh",
        "grp": "39",
        "index_in_grp": "8",
        "end": "hakArAntaH",
        "linga": "P",
        "forms": "vizvavAT-vizvavAD;vizvavAhau;vizvavAhaH;vizvavAham;vizvavAhau;vizvauhaH;vizvauhA;vizvavADbhyAm;vizvavADbhiH;vizvauhe;vizvavADbhyAm;vizvavADbhyaH;vizvauhaH;vizvavADbhyAm;vizvavADbhyaH;vizvauhaH;vizvauhoH;vizvauhAm;vizvauhi;vizvauhoH;vizvavATtsu-vizvavATsu;he vizvavAT-he vizvavAD;he vizvavAhau;he vizvavAhaH"
    },
    {
        "ind": "139009",
        "baseindex": "39.009",
        "word": "anaDuh",
        "grp": "39",
        "index_in_grp": "9",
        "end": "hakArAntaH",
        "linga": "P",
        "forms": "anaDvAn;anaDvAhau;anaDvAhaH;anaDvAham;anaDvAhau;anaDuhaH;anaDuhA;anaDudbhyAm;anaDudbhiH;anaDuhe;anaDudbhyAm;anaDudbhyaH;anaDuhaH;anaDudbhyAm;anaDudbhyaH;anaDuhaH;anaDuhoH;anaDuhAm;anaDuhi;anaDuhoH;anaDutsu;he anaDvana;he anaDvAhau;he anaDvAhaH"
    },
    {
        "ind": "139010",
        "baseindex": "39.010",
        "word": "turASAh",
        "grp": "39",
        "index_in_grp": "10",
        "end": "hakArAntaH",
        "linga": "P",
        "forms": "turASAT-turASAD;turAsAhau;turAsAhaH;turAsAham;turAsAhau;turAsAhaH;turAsAhA;turASADbhyAm;turASADbhiH;turAsAhe;turASADbhyAm;turASADbhyaH;turAsAhaH;turASADbhyAm;turASADbhyaH;turAsAhaH;turAsAhoH;turAsAhAm;turAsAhi;turAsAhoH;turASATtsu-turASATsu;he turASAT-he turASAD;he turAsAhau;he turAsAhaH"
    },
    {
        "ind": "140001",
        "baseindex": "40.001",
        "word": "sudiv",
        "grp": "40",
        "index_in_grp": "1",
        "end": "vakArAntaH",
        "linga": "P",
        "forms": "sudyauH;sudivau;sudivaH;sudivam;sudivau;sudivaH;sudivA;sudyubhyAm;sudyubhiH;sudive;sudyubhyAm;sudyubhyaH;sudivaH;sudyubhyAm;sudyubhyaH;sudivaH;sudivoH;sudivAm;sudivi;sudivoH;sudyuSu;he sudyauH;he sudivau;he sudivaH"
    },
    {
        "ind": "141001",
        "baseindex": "41.001",
        "word": "catur",
        "grp": "41",
        "index_in_grp": "1",
        "end": "rephAntaH",
        "linga": "P",
        "forms": "-;-;catvAraH;-;-;caturaH;-;-;caturbhiH;-;-;caturbhyaH;-;-;caturbhyaH;-;-;caturNNAm;-;-;caturSu;-;-;he catvAraH"
    },
    {
        "ind": "141002",
        "baseindex": "41.002",
        "word": "priyacatur",
        "grp": "41",
        "index_in_grp": "2",
        "end": "rephAntaH",
        "linga": "P",
        "forms": "priyacatvAH;priyacatvArau;priyacatvAraH;priyacatvAram;priyacatvArau;priyacaturaH;priyacaturA;priyacaturbhyAm;priyacaturbhiH;priyacature;priyacaturbhyAm;priyacaturbhyaH;priyacaturaH;priyacaturbhyAm;priyacaturbhyaH;priyacaturaH;priyacaturoH;priyacaturAm;priyacaturi;priyacaturoH;priyacaturSu;he priyacatvaH;he priyacatvArau;he priyacatvAraH"
    },
    {
        "ind": "142001",
        "baseindex": "42.001",
        "word": "kamal",
        "grp": "42",
        "index_in_grp": "1",
        "end": "lakArAntaH",
        "linga": "P",
        "forms": "kamal;kamalau;kamalaH;kamalam;kamalau;kamalaH;kamalA;kamalbhyAm;kamalbhiH;kamale;kamalbhyAm;kamalbhyaH;kamalaH;kamalbhyAm;kamalbhyaH;kamalaH;kamaloH;kamalAm;kamali;kamaloH;kamalSu;he kamal;he kamalau;he kamalaH"
    },
    {
        "ind": "143001",
        "baseindex": "43.001",
        "word": "prazAm",
        "grp": "43",
        "index_in_grp": "1",
        "end": "makArAntaH",
        "linga": "P",
        "forms": "prazAn;prazAmau;prazAmaH;prazAmam;prazAmau;prazAmaH;prazAmA;prazAnbhyAm;prazAnbhiH;prazAme;prazAnbhyAm;prazAnbhyaH;prazAmaH;prazAnbhyAm;prazAnbhyaH;prazAmaH;prazAmoH;prazAmAm;prazAmi;prazAmoH;prazAntsu-prazAnsu;he prazAm;he prazAmau;he prazAmaH"
    },
    {
        "ind": "143002",
        "baseindex": "43.002",
        "word": "kim",
        "grp": "43",
        "index_in_grp": "2",
        "end": "makArAntaH",
        "linga": "P",
        "forms": "kaH;kau;ke;kam;kau;kAn;kena;kAbhyAm;kaiH;kasmai;kAbhyAm;kebhyaH;kasmAt-kasmAd;kAbhyAm;kebhyaH;kasya;kayoH;keSAm;kasmin;kayoH;keSu;-;-;-"
    },
    {
        "ind": "143003",
        "baseindex": "43.003",
        "word": "idam",
        "grp": "43",
        "index_in_grp": "3",
        "end": "makArAntaH",
        "linga": "P",
        "forms": "ayam;imau;ime;imam-enam;imau-enau;imAn-enAn;anena-enena;AbhyAm;ebhiH;asmai;AbhyAm;ebhyaH;asmAt-asmAd;AbhyAm;ebhyaH;asya;anayoH-enayoH;eSAm;asmin;anayoH-enayoH;eSu;-;-;-"
    },
    {
        "ind": "143004",
        "baseindex": "43.004",
        "word": "idakam",
        "grp": "43",
        "index_in_grp": "4",
        "end": "makArAntaH",
        "linga": "P",
        "forms": "ayakam;imakau;imake;imakam;imakau;imakAn;imakena;imakAbhyAm;imakaiH;imakasmai;imakAbhyAm;imakebhyaH;imakasmAt-imakasmAd;imakAbhyAm;imakebhyaH;imakasya;imakayoH;imakeSAm;imakasmin;imakayoH;imakeSu;-;-;-"
    },
    {
        "ind": "144001",
        "baseindex": "44.001",
        "word": "sugaN",
        "grp": "44",
        "index_in_grp": "1",
        "end": "NakArAntaH",
        "linga": "P",
        "forms": "sugaN;sugaNau;sugaNaH;sugaNam;sugaNau;sugaNaH;sugaNA;sugaNbhyAm;sugaNbhiH;sugaNe;sugaNbhyAm;sugaNbhyaH;sugaNaH;sugaNbhyAm;sugaNbhyaH;sugaNaH;sugaNoH;sugaNAm;sugaNi;sugaNoH;sugaNThsu-sugaNTsu-sugaNsu;he sugaN;he sugaNau;he sugaNaH"
    },
    {
        "ind": "145001",
        "baseindex": "45.001",
        "word": "rAjan",
        "grp": "45",
        "index_in_grp": "1",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "rAjA;rAjAnau;rAjAnaH;rAjAnam;rAjAnau;rAjJaH;rAjJA;rAjabhyAm;rAjabhiH;rAjJe;rAjabhyAm;rAjabhyaH;rAjJaH;rAjabhyAm;rAjabhyaH;rAjJaH;rAjJoH;rAjJAm;rAjJi-rAjani;rAjJoH;rAjasu;he rAjan;he rAjAnau;he rAjAnaH"
    },
    {
        "ind": "145002",
        "baseindex": "45.002",
        "word": "pratidivan",
        "grp": "45",
        "index_in_grp": "2",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "pratidivA;pratidivAnau;pratidivAnaH;pratidivAnam;pratidivAnau;pratidIvnaH;pratidIvnA;pratidivabhyAm;pratidivabhiH;pratidIvne;pratidivabhyAm;pratidivabhyaH;pratidIvnaH;pratidivabhyAm;pratidivabhyaH;pratidIvnaH;pratidIvnoH;pratidIvnAm;pratidIvni;pratidIvnoH;pratidivasu;he pratidivan;he pratidivAnau;he pratidivAnaH"
    },
    {
        "ind": "145003",
        "baseindex": "45.003",
        "word": "yajvan",
        "grp": "45",
        "index_in_grp": "3",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "yajvA;yajvAnau;yajvAnaH;yajvAnam;yajvAnau;yajvanaH;yajvanA;yajvabhyAm;yajvabhiH;yajvane;yajvabhyAm;yajvabhyaH;yajvanaH;yajvabhyAm;yajvabhyaH;yajvanaH;yajvanoH;yajvanAm;yajvani;yajvanoH;yajvasu;he yajvan;he yajvAnau;he yajvAnaH"
    },
    {
        "ind": "145004",
        "baseindex": "45.004",
        "word": "aryaman",
        "grp": "45",
        "index_in_grp": "4",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "aryamA;aryamaNau;aryamaNaH;aryamaNam;aryamaNau;aryamNaH;aryamNA;aryamabhyAm;aryamabhiH;aryamNe;aryamabhyAm;aryamabhyaH;aryamNaH;aryamabhyAm;aryamabhyaH;aryamNaH;aryamNoH;aryamNAm;aryamaNi-aryamNi;aryamNoH;aryamasu;he aryaman;he aryamaNau;he aryamaNaH"
    },
    {
        "ind": "145005",
        "baseindex": "45.005",
        "word": "brahman",
        "grp": "45",
        "index_in_grp": "5",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "brahmA;brahmANau;brahmANaH;brahmANam;brahmANau;brahmaNaH;brahmaNA;brahmabhyAm;brahmabhiH;brahmaNe;brahmabhyAm;brahmabhyaH;brahmaNaH;brahmabhyAm;brahmabhyaH;brahmaNaH;brahmaNoH;brahmaNAm;brahmaNi;brahmaNoH;brahmasu;he brahman;he brahmANau;he brahmANaH"
    },
    {
        "ind": "145006",
        "baseindex": "45.006",
        "word": "zArGgin",
        "grp": "45",
        "index_in_grp": "6",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "zArGgI;zArGgiNau;zArGgiNaH;zArGgiNam;zArGgiNau;zArGgiNaH;zArGgiNA;zArGgibhyAm;zArGgibhiH;zArGgiNe;zArGgibhyAm;zArGgibhyaH;zArGgiNaH;zArGgibhyAm;zArGgibhyaH;zArGgiNaH;zArGgiNoH;zArGgiNAm;zArGgiNi;zArGgiNoH;zArGgiSu;he zArGgin;he zArGgiNau;he zArGgiNaH"
    },
    {
        "ind": "145007",
        "baseindex": "45.007",
        "word": "Atman",
        "grp": "45",
        "index_in_grp": "7",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "AtmA;AtmAnau;AtmAnaH;AtmAnam;AtmAnau;AtmanaH;AtmanA;AtmabhyAm;AtmabhiH;Atmane;AtmabhyAm;AtmabhyaH;AtmanaH;AtmabhyAm;AtmabhyaH;AtmanaH;AtmanoH;AtmanAm;Atmani;AtmanoH;Atmasu;he Atman;he AtmAnau;he AtmAnaH"
    },
    {
        "ind": "145008",
        "baseindex": "45.008",
        "word": "guNin",
        "grp": "45",
        "index_in_grp": "8",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "guNI;guNinau;guNinaH;guNinam;guNinau;guNinaH;guNinA;guNibhyAm;guNibhiH;guNine;guNibhyAm;guNibhyaH;guNinaH;guNibhyAm;guNibhyaH;guNinaH;guNinoH;guNinAm;guNini;guNinoH;guNiSu;he guNin;he guNinau;he guNinaH"
    },
    {
        "ind": "145009",
        "baseindex": "45.009",
        "word": "zvan",
        "grp": "45",
        "index_in_grp": "9",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "zvA;zvAnau;zvAnaH;zvAnam;zvAnau;zunaH;zunA;zvabhyAm;zvabhiH;zune;zvabhyAm;zvabhyaH;zunaH;zvabhyAm;zvabhyaH;zunaH;zunoH;zunAm;zuni;zunoH;zvasu;he zvan;he zvAnau;he zvAnaH"
    },
    {
        "ind": "145010",
        "baseindex": "45.010",
        "word": "pathin",
        "grp": "45",
        "index_in_grp": "10",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "panthAH;panthAnau;panthAnaH;panthAnam;panthAnau;pathaH;pathA;pathibhyAm;pathibhiH;pathe;pathibhyAm;pathibhyaH;pathaH;pathibhyAm;pathibhyaH;pathaH;pathoH;pathAm;pathi;pathoH;pathiSu;he panthAH;he panthAnau;he panthAnaH"
    },
    {
        "ind": "145011",
        "baseindex": "45.011",
        "word": "yazasvin",
        "grp": "45",
        "index_in_grp": "11",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "yazasvI;yazasvinau;yazasvinaH;yazasvinam;yazasvinau;yazasvinaH;yazasvinA;yazasvibhyAm;yazasvibhiH;yazasvine;yazasvibhyAm;yazasvibhyaH;yazasvinaH;yazasvibhyAm;yazasvibhyaH;yazasvinaH;yazasvinoH;yazasvinAm;yazasvini;yazasvinoH;yazasviSu;he yazasvin;he yazasvinau;he yazasvinaH"
    },
    {
        "ind": "145012",
        "baseindex": "45.012",
        "word": "vRtrahan",
        "grp": "45",
        "index_in_grp": "12",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "vRtrahA;vRtrahaNau;vRtrahaNaH;vRtrahaNam;vRtrahaNau;vRtraghnaH;vRtraghnA;vRtrahabhyAm;vRtrahabhiH;vRtraghne;vRtrahabhyAm;vRtrahabhyaH;vRtraghnaH;vRtrahabhyAm;vRtrahabhyaH;vRtraghnaH;vRtraghnoH;vRtraghnAm;vRtraghni-vRtrahaNi;vRtraghnoH;vRtrahasu;he vRtrahan;he vRtrahaNau;he vRtrahaNaH"
    },
    {
        "ind": "145013",
        "baseindex": "45.013",
        "word": "maghavan",
        "grp": "45",
        "index_in_grp": "13",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "maghavAn;maghavantau;maghavantaH;maghavantam;maghavantau;maghavataH;maghavatA;maghavadbhyAm;maghavadbhiH;maghavate;maghavadbhyAm;maghavadbhyaH;maghavataH;maghavadbhyAm;maghavadbhyaH;maghavataH;maghavatoH;maghavatAm;maghavati;maghavatoH;maghavatsu;he maghavan;he maghavantau;he maghavantaH"
    },
    {
        "ind": "145014",
        "baseindex": "45.014",
        "word": "maghavan",
        "grp": "45",
        "index_in_grp": "14",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "maghavA;maghavAnau;maghavAnaH;maghavAnam;maghavAnau;maghonaH;maghonA;maghavabhyAm;maghavabhiH;maghone;maghavabhyAm;maghavabhyaH;maghonaH;maghavabhyAm;maghavabhyaH;maghonaH;maghonoH;maghonAm;maghoni;maghonoH;maghavasu;he maghavan;he maghavAnau;he maghavAnaH"
    },
    {
        "ind": "145015",
        "baseindex": "45.015",
        "word": "pUSan",
        "grp": "45",
        "index_in_grp": "15",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "pUSA;pUSaNau;pUSaNaH;pUSaNam;pUSaNau;pUSNaH;pUSNA;pUSabhyAm;pUSabhiH;pUSNe;pUSabhyAm;pUSabhyaH;pUSNaH;pUSabhyAm;pUSabhyaH;pUSNaH;pUSNoH;pUSNAm;pUSNi-pUSaNi;pUSNoH;pUSasu;he pUSan;he pUSaNau;he pUSaNaH"
    },
    {
        "ind": "145016",
        "baseindex": "45.016",
        "word": "yuvan",
        "grp": "45",
        "index_in_grp": "16",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "yuvA;yuvAnau;yuvAnaH;yuvAnam;yuvAnau;yUnaH;yUnA;yuvabhyAm;yuvabhiH;yUne;yuvabhyAm;yuvabhyaH;yUnaH;yuvabhyAm;yuvabhyaH;yUnaH;yUnoH;yUnAm;yUni;yUnoH;yuvasu;he yuvan;he yuvAnau;he yuvAnaH"
    },
    {
        "ind": "145017",
        "baseindex": "45.017",
        "word": "mathin",
        "grp": "45",
        "index_in_grp": "17",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "manthAH;manthAnau;manthAnaH;manthAnam;manthAnau;mathaH;mathA;mathibhyAm;mathibhiH;mathe;mathibhyAm;mathibhyaH;mathaH;mathibhyAm;mathibhyaH;mathaH;mathau;mathAm;mathi;mathau;mathiSu;he manthAH;he manthAnau;he manthAnaH"
    },
    {
        "ind": "145018",
        "baseindex": "45.018",
        "word": "arvan",
        "grp": "45",
        "index_in_grp": "18",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "arvA;arvantau;arvantaH;arvantam;arvantau;arvataH;arvatA;arvadbhyAm;arvadbhiH;arvate;arvadbhyAm;arvibhyaH;arvataH;arvadbhyAm;arvibhyaH;arvataH;arvatoH;arvatAm;arvati;arvatoH;arvatsu;he arvan;he arvantau;he arvantaH"
    },
    {
        "ind": "145019",
        "baseindex": "45.019",
        "word": "RbhukSin",
        "grp": "45",
        "index_in_grp": "19",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "RbhukSAH;RbhukSANau;RbhukSANaH;RbhukSANam;RbhukSANau;RbhukSaH;RbhukSA;RbhukSibhyAm;RbhukSibhiH;RbhukSe;RbhukSibhyAm;RbhukSibhyaH;RbhukSaH;RbhukSibhyAm;RbhukSibhyaH;RbhukSaH;RbhukSoH;RbhukSAm;RbhukSi;RbhukSoH;RbhukSiSu;he RbhukSAH;he RbhukSANau;he RbhukSANaH"
    },
    {
        "ind": "145020",
        "baseindex": "45.020",
        "word": "anRbhukSin",
        "grp": "45",
        "index_in_grp": "20",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "anRbhukSI;anRbhukSyau;anRbhukSyaH;anRbhukSIm;anRbhukSyau;anRbhukSIH;anRbhukSyA;anRbhukSIbhyAm;anRbhukSIbhiH;anRbhukSyai;anRbhukSIbhyAm;anRbhukSIbhyaH;anRbhukSyAH;anRbhukSIbhyAm;anRbhukSIbhyaH;anRbhukSyAH;anRbhukSyoH;anRbhukSINAm;anRbhukSyAm;anRbhukSyoH;anRbhukSISu;he anRbhukSi;he anRbhukSyau;he anRbhukSyaH"
    },
    {
        "ind": "145021",
        "baseindex": "45.021",
        "word": "supathin",
        "grp": "45",
        "index_in_grp": "21",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "supathi;supathI;supanthAni;supathi;supathI;supanthAni;supathA;supathibhyAm;supathibhiH;supathe;supathibhyAm;supathibhyaH;supathaH;supathibhyAm;supathibhyaH;supathaH;supathoH;supathAm;supathi;supathoH;supathiSu;he supathi-supathin;he supathI;he supanthAni"
    },
    {
        "ind": "145022",
        "baseindex": "45.022",
        "word": "supathin",
        "grp": "45",
        "index_in_grp": "22",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "supathI;supathyau;supathyaH;supathIm;supathyau;supathIH;supathyA;supathIbhyAm;supathIbhiH;supathyai;supathIbhyAm;supathIbhyaH;supathyaH;supathIbhyAm;supathIbhyaH;supathyaH;supathyoH;supathInAm;supathyAm;supathyoH;supathISu;he supathi-supathyAm;he supathyau;he supathyaH"
    },
    {
        "ind": "145023",
        "baseindex": "45.023",
        "word": "priyapaJcan",
        "grp": "45",
        "index_in_grp": "23",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "priyapaJcA;priyapaJcAnau;priyapaJcAnaH;priyapaJcAnam;priyapaJcAnau;priyapaJcJaH;priyapaJcJA;priyapaJcabhyAm;priyapaJcabhiH;priyapaJcJe;priyapaJcabhyAm;priyapaJcabhyaH;priyapaJcJaH;priyapaJcabhyAm;priyapaJcabhyaH;priyapaJcJaH;priyapaJcJoH;priyapaJcJAm;priyapaJcJi;priyapaJcJoH;priyapaJcasu;he priyapaJcan;he priyapaJcAnau;he priyapaJcAnaH"
    },
    {
        "ind": "145024",
        "baseindex": "45.024",
        "word": "priyASTan",
        "grp": "45",
        "index_in_grp": "24",
        "end": "nakArAntaH",
        "linga": "P",
        "forms": "priyASTA-priyASTAH;priyASTAnau;priyASTAnaH;priyASTAnam;priyASTAnau;priyASTnaH;priyASTnA;priyASTAbhyAm-priyASTabhyAm;priyASTAbhiH-priyASTabhiH;priyASTne;priyASTAbhyAm-priyASTabhyAm;priyASTAbhyaH-priyASTabhyaH;priyASTnaH;priyASTAbhyAm-priyASTabhyAm;priyASTAbhyaH-priyASTabhyaH;priyASTnaH;priyASTnoH;priyASTnAm;priyASTni-priyASTani;priyASTnoH;priyASTAsu-priyASTasu;he priyASTA-priyASTAH;he priyASTAnau;he priyASTAnaH"
    },
    {
        "ind": "146001",
        "baseindex": "46.001",
        "word": "devej",
        "grp": "46",
        "index_in_grp": "1",
        "end": "jakArAntaH",
        "linga": "P",
        "forms": "deveT-deveD;devejau;devejaH;devejam;devejau;devejaH;devejA;deveDbhyAm;deveDbhiH;deveje;deveDbhyAm;deveDbhyaH;devejaH;deveDbhyAm;deveDbhyaH;devejaH;devejoH;devejAm;deveji;devejoH;deveTtsu-deveTsu;he deveT-deveD;he devejau;he devejaH"
    },
    {
        "ind": "146002",
        "baseindex": "46.002",
        "word": "vibhrAj",
        "grp": "46",
        "index_in_grp": "2",
        "end": "jakArAntaH",
        "linga": "P",
        "forms": "vibhrAT-vibhrAD;vibhrAjau;vibhrAjaH;vibhrAjam;vibhrAjau;vibhrAjaH;vibhrAjA;vibhrADbhyAm;vibhrADbhiH;vibhrAje;vibhrADbhyAm;vibhrADbhyaH;vibhrAjaH;vibhrADbhyAm;vibhrADbhyaH;vibhrAjaH;vibhrAjoH;vibhrAjAm;vibhrAji;vibhrAjoH;vibhrATtsu-vibhrATsu;he vibhrAT-vibhrAD;he vibhrAjau;he vibhrAjaH"
    },
    {
        "ind": "146003",
        "baseindex": "46.003",
        "word": "khaJj",
        "grp": "46",
        "index_in_grp": "3",
        "end": "jakArAntaH",
        "linga": "P",
        "forms": "khan;khaJjau;khaJjaH;khaJjam;khaJjau;khaJjaH;khaJjA;khanbhyAm;khanbhiH;khaJje;khanbhyAm;khanbhyaH;khaJjaH;khanbhyAm;khanbhyaH;khaJjaH;khaJjoH;khaJjAm;khaJji;khaJjoH;khantsu-khansu;he khan;he khaJjau;he khaJjaH"
    },
    {
        "ind": "146004",
        "baseindex": "46.004",
        "word": "suyuj",
        "grp": "46",
        "index_in_grp": "4",
        "end": "jakArAntaH",
        "linga": "P",
        "forms": "suyuk-suyug;suyujau;suyujaH;suyujam;suyujau;suyujaH;suyujA;suyugbhyAm;suyugbhiH;suyuje;suyugbhyAm;suyugbhyaH;suyujaH;suyugbhyAm;suyugbhyaH;suyujaH;suyujoH;suyujAm;suyuji;suyujoH;suyukSu;he suyuk-suyag;he suyujau;he suyujaH"
    },
    {
        "ind": "146005",
        "baseindex": "46.005",
        "word": "rAj",
        "grp": "46",
        "index_in_grp": "5",
        "end": "jakArAntaH",
        "linga": "P",
        "forms": "rAT-rAD;rAjau;rAjaH;rAjam;rAjau;rAjaH;rAjA;rADbhyAm;rADbhiH;rAje;rADbhyAm;rADbhyaH;rAjaH;rADbhyAm;rADbhyaH;rAjaH;rAjoH;rAjAm;rAji;rAjoH;rATtsu-rATsu;he rAT-rAD;he rAjau;he rAjaH"
    },
    {
        "ind": "146006",
        "baseindex": "46.006",
        "word": "parivrAj",
        "grp": "46",
        "index_in_grp": "6",
        "end": "jakArAntaH",
        "linga": "P",
        "forms": "parivrAT-parivrAD;parivrAjau;parivrAjaH;parivrAjam;parivrAjau;parivrAjaH;parivrAjA;parivrADbhyAm;parivrADbhiH;parivrAje;parivrADbhyAm;parivrADbhyaH;parivrAjaH;parivrADbhyAm;parivrADbhyaH;parivrAjaH;parivrAjoH;parivrAjAm;parivrAji;parivrAjoH;parivrATtsu-parivrATsu;he parivrAT-parivrAD;he parivrAjau;he parivrAjaH"
    },
    {
        "ind": "146007",
        "baseindex": "46.007",
        "word": "paribhRj",
        "grp": "46",
        "index_in_grp": "7",
        "end": "jakArAntaH",
        "linga": "P",
        "forms": "paribhRT-paribhRD;paribhRjau;paribhRjaH;paribhRjam;paribhRjau;paribhRjaH;paribhRjA;paribhRDbhyAm;paribhRDbhiH;paribhRje;paribhRDbhyAm;paribhRDbhyaH;paribhRjaH;paribhRDbhyAm;paribhRDbhyaH;paribhRjaH;paribhRjoH;paribhRjAm;paribhRji;paribhRjoH;paribhRTtsu-paribhRTsu;he paribhRT-paribhRD;he paribhRjau;he paribhRjaH"
    },
    {
        "ind": "146008",
        "baseindex": "46.008",
        "word": "vizvarAj",
        "grp": "46",
        "index_in_grp": "8",
        "end": "jakArAntaH",
        "linga": "P",
        "forms": "vizvArAT-vizvArAD;vizvarAjau;vizvarAjaH;vizvarAjam;vizvarAjau;vizvarAjaH;vizvarAjA;vizvArADbhyAm;vizvArADbhiH;vizvarAje;vizvArADbhyAm;vizvArADbhyaH;vizvarAjaH;vizvArADbhyAm;vizvArADbhyaH;vizvarAjaH;vizvarAjoH;vizvarAjAm;vizvarAji;vizvarAjoH;vizvArATtsu-vizvArATsu;he vizvArAT-vizvArAD;he vizvarAjau;he vizvarAjaH"
    },
    {
        "ind": "146009",
        "baseindex": "46.009",
        "word": "bhRsj",
        "grp": "46",
        "index_in_grp": "9",
        "end": "jakArAntaH",
        "linga": "P",
        "forms": "bhRT-bhRD;bhRjjau;bhRjjaH;bhRjjam;bhRjjau;bhRjjaH;bhRjjA;bhRDbhyAm;bhRDbhiH;bhRjje;bhRDbhyAm;bhRDbhyaH;bhRjjaH;bhRDbhyAm;bhRDbhyaH;bhRjjaH;bhRjjoH;bhRjjAm;bhRjji;bhRjjoH;bhRTtsu-bhRTsu;he bhRT-bhRD;he bhRjjau;he bhRjjaH"
    },
    {
        "ind": "146010",
        "baseindex": "46.010",
        "word": "Urj",
        "grp": "46",
        "index_in_grp": "10",
        "end": "jakArAntaH",
        "linga": "P",
        "forms": "Urk-Urg;Urjau;UrjaH;Urjam;Urjau;UrjaH;UrjA;UrgbhyAm;UrgbhiH;Urje;UrgbhyAm;UrgbhyaH;UrjaH;UrgbhyAm;UrgbhyaH;UrjaH;UrjoH;UrjAm;Urji;UrjoH;UrkSu;he Urk-urg;he Urjau;he UrjaH"
    },
    {
        "ind": "146011",
        "baseindex": "46.011",
        "word": "Rtvij",
        "grp": "46",
        "index_in_grp": "11",
        "end": "jakArAntaH",
        "linga": "P",
        "forms": "Rtvik-Rtvig;Rtvijau;RtvijaH;Rtvijam;Rtvijau;RtvijaH;RtvijA;RtvigbhyAm;RtvigbhiH;Rtvije;RtvigbhyAm;RtvigbhyaH;RtvijaH;RtvigbhyAm;RtvigbhyaH;RtvijaH;RtvijoH;RtvijAm;Rtviji;RtvijoH;RtvikSu;he Rtvik-Rtvig;he Rtvijau;he RtvijaH"
    },
    {
        "ind": "147001",
        "baseindex": "47.001",
        "word": "tyad",
        "grp": "47",
        "index_in_grp": "1",
        "end": "dakArAntaH",
        "linga": "P",
        "forms": "syaH;tyau;tye;tyam;tyau;tyAn;tyena;tyAbhyAm;tyaiH;tyasmai;tyAbhyAm;tyebhyaH;tyasmAt-tyasmAd;tyAbhyAm;tyebhyaH;tyasya;tyayoH;tyeSAm;tyasmin;tyayoH;tyeSu;-;-;-"
    },
    {
        "ind": "147002",
        "baseindex": "47.002",
        "word": "tad",
        "grp": "47",
        "index_in_grp": "2",
        "end": "dakArAntaH",
        "linga": "P",
        "forms": "saH;tau;te;tam;tau;tAn;tena;tAbhyAm;taiH;tasmai;tAbhyAm;tebhyaH;tasmAt-tasmAd;tAbhyAm;tebhyaH;tasya;tayoH;teSAm;tasmin;tayoH;teSu;-;-;-"
    },
    {
        "ind": "147003",
        "baseindex": "47.003",
        "word": "yad",
        "grp": "47",
        "index_in_grp": "3",
        "end": "dakArAntaH",
        "linga": "P",
        "forms": "yaH;yau;ye;yam;yau;yAn;yena;yAbhyAm;yaiH;yasmai;yAbhyAm;yebhyaH;yasmAt-yasmAd;yAbhyAm;yebhyaH;yasya;yayoH;yeSAm;yasmin;yayoH;yeSu;-;-;-"
    },
    {
        "ind": "147004",
        "baseindex": "47.004",
        "word": "etad",
        "grp": "47",
        "index_in_grp": "4",
        "end": "dakArAntaH",
        "linga": "P",
        "forms": "eSaH;etau;ete;etam-enam;etau-enau;etAn-enAn;etena-enena;etAbhyAm;etaiH;etasmai;etAbhyAm;etebhyaH;etasmAt-etasmAd;etAbhyAm;etebhyaH;etasya;etayoH-enayoH;eteSAm;etasmin;etayoH-enayoH;eteSu;-;-;-"
    },
    {
        "ind": "147005",
        "baseindex": "47.005",
        "word": "yuSmad",
        "grp": "47",
        "index_in_grp": "5",
        "end": "dakArAntaH",
        "linga": "P",
        "forms": "tvam;yuvAm;yUyam;tvAm-tvA;yuvAm-vAm;yuSmAn-vaH;tvayA;yuvAbhyAm;yuSmAbhiH;tubhyam-te;yuvAbhyAm-vAm;yuSmabhyam-vaH;tvat;yuvAbhyAm;yuSmat;tava-te;yuvayoH-vAm;yuSmAkam;tvayi;yuvayoH;yuSmAsu;-;-;-"
    },
    {
        "ind": "147006",
        "baseindex": "47.006",
        "word": "asmad",
        "grp": "47",
        "index_in_grp": "6",
        "end": "dakArAntaH",
        "linga": "P",
        "forms": "aham;AvAm;vayam;mAm-mA;AvAm-nau;asmAn-naH;mayA;AvAbhyAm;asmAbhiH;mahyam-me;AvAbhyAm-nau;asmabhyam-naH;mat;AvAbhyAm;asmat;mama-me;AvayoH-nau;asmAkam-naH;mayi;AvayoH;asmAsu;-;-;-"
    },
    {
        "ind": "147007",
        "baseindex": "47.007",
        "word": "atiyuSmad",
        "grp": "47",
        "index_in_grp": "7",
        "end": "dakArAntaH",
        "linga": "P",
        "forms": "atitvam;atitvAm;atiyUyam;atitvAm;atitvAm;atitvAn;atitvayA;atitvAbhyAm;atitvAbhiH;atitubhyam;atitvAbhyAm;atitvabhyam;atitvat;atitvAbhyAm;atitvat;atitava;atitvayoH;atitvAkam;atitvayi;atitvayoH;atitvAsu;he atitvam;he atitvAm;he atiyUyam"
    },
    {
        "ind": "147008",
        "baseindex": "47.008",
        "word": "atiyuSmad",
        "grp": "47",
        "index_in_grp": "8",
        "end": "dakArAntaH",
        "linga": "P",
        "forms": "atitvam;atiyuvAm;atiyUyam;atiyuvAm;atiyuvAm;atiyuvAn;atiyuvayA;atiyuvAbhyAm;atiyuvAbhiH;atitubhyam;atiyuvAbhyAm;atiyuvabhyam;atiyuvat;atiyuvAbhyAm;atiyuvat;atitava;atiyuvayoH;atiyuvAkam;atiyuvayi;atiyuvayoH;atiyuvAsu;he atitvam;he atiyuvAm;he atiyUyam"
    },
    {
        "ind": "147009",
        "baseindex": "47.009",
        "word": "atiyuSmad",
        "grp": "47",
        "index_in_grp": "9",
        "end": "dakArAntaH",
        "linga": "P",
        "forms": "atitvam;atiyuSmAm;atiyUyam;atiyuSmAm;atiyuSmAm;atiyuSmAn;atiyuSmayA;atiyuSmAbhyAm;atiyuSmAbhiH;atitubhyam;atiyuSmAbhyAm;atiyuSmabhyam;atiyuSmat;atiyuSmAbhyAm;atiyuSmat;atitava;atiyuSmayoH;atiyuSmAkam;atiyuSmayi;atiyuSmayoH;atiyuSmAsu;he atitvam;he atiyuSmAm;he atiyUyam"
    },
    {
        "ind": "147010",
        "baseindex": "47.010",
        "word": "atyasmad",
        "grp": "47",
        "index_in_grp": "10",
        "end": "dakArAntaH",
        "linga": "P",
        "forms": "atyaham;atimAm;ativayam;atimAm;atimAm;atimAn;atimayA;atimAbhyAm;atimAbhiH;atimahyam;atimAbhyAm;atimahyam;atimat;atimAbhyAm;atimat;atimama;atimayoH;atimAkam;atimayi;atimayoH;atimAsu;he atyaham;he atimAm;he ativayam"
    },
    {
        "ind": "147011",
        "baseindex": "47.011",
        "word": "atyasmad",
        "grp": "47",
        "index_in_grp": "11",
        "end": "dakArAntaH",
        "linga": "P",
        "forms": "atyaham;atyAvAm;ativayam;atyAvAm;atyAvAm;atyAvAn;atyAvayA;atyAvAbhyAm;atyAvAbhiH;atimahyam;atyAvAbhyAm;atyAvayam;atyAvat;atyAvAbhyAm;atyAvat;atimama;atyAvayoH;atyAvAkam;atyAvayi;atyAvayoH;atyAvasu;he atyaham;he atyAvAm;he ativayam"
    },
    {
        "ind": "147012",
        "baseindex": "47.012",
        "word": "atyasmad",
        "grp": "47",
        "index_in_grp": "12",
        "end": "dakArAntaH",
        "linga": "P",
        "forms": "atyaham;atyasmAm;ativayam;atyasmAm;atyasmAm;atyasmAn;atyasmayA;atyasmAbhyAm;atyasmAbhiH;atimahyam;atyasmAbhyAm;atyasmabhyam;atyasmat;atyasmAbhyAm;atyasmat;atimama;atyasmayoH;atyasmAkam;atyasmayi;atyasmayoH;atyasmAsu;he atyaham;he atyasmAm;he ativayam"
    },
    {
        "ind": "147013",
        "baseindex": "47.013",
        "word": "supAd",
        "grp": "47",
        "index_in_grp": "13",
        "end": "dakArAntaH",
        "linga": "P",
        "forms": "supAd-supAt;supAdau;supAdaH;supAdam;supAdau;supadaH;supadA;supAdbhyAm;supAdbhiH;supade;supAdbhyAm;supAdbhyaH;supadaH;supAdbhyAm;supAdbhyaH;supadaH;supadoH;supadAm;supadi;supadoH;supAtsu;he supAd-supAt;he supAdau;he supAdaH"
    },
    {
        "ind": "148001",
        "baseindex": "48.001",
        "word": "agnimath",
        "grp": "48",
        "index_in_grp": "1",
        "end": "thakArAntaH",
        "linga": "P",
        "forms": "agnimat-agnimad;agnimathau;agnimathaH;agnimatham;agnimathau;agnimathaH;agnimathA;agnimadbhyAm;agnimadbhiH;agnimathe;agnimadbhyAm;agnimadbhyaH;agnimathaH;agnimadbhyAm;agnimadbhyaH;agnimathaH;agnimathoH;agnimathAm;agnimathi;agnimathoH;agnimatsu;he agnimat-agnimad;he agnimathau;he agnimathaH"
    },
    {
        "ind": "149001",
        "baseindex": "49.001",
        "word": "prAJc",
        "grp": "49",
        "index_in_grp": "1",
        "end": "cakArAntaH",
        "linga": "P",
        "forms": "prAG;prAJcau;prAJcaH;prAJcam;prAJcau;prAcaH;prAcA;prAgbhyAm;prAgbhiH;prAce;prAgbhyAm;prAgbhyaH;prAcaH;prAgbhyAm;prAgbhyaH;prAcaH;prAcoH;prAcAm;prAci;prAcoH;prAkSu;he prAG;he prAJcau;he prAJcaH"
    },
    {
        "ind": "149002",
        "baseindex": "49.002",
        "word": "pratyaJc",
        "grp": "49",
        "index_in_grp": "2",
        "end": "cakArAntaH",
        "linga": "P",
        "forms": "pratyaG;pratyaJcau;pratyaJcaH;pratyaJcam;pratyaJcau;pratIcaH;pratIcA;pratyagbhyAm;pratyagbhiH;pratIce;pratyagbhyAm;pratyagbhyaH;pratIcaH;pratyagbhyAm;pratyagbhyaH;pratIcaH;pratIcoH;pratIcAm;pratIci;pratIcoH;pratyakSu;he pratyaG;he pratyaJcau;he pratyaJcaH"
    },
    {
        "ind": "149003",
        "baseindex": "49.003",
        "word": "amumuyaJc",
        "grp": "49",
        "index_in_grp": "3",
        "end": "cakArAntaH",
        "linga": "P",
        "forms": "amumuyaG;amumuyaJcau;amumuyaJcaH;amumuyaJcam;amumuyaJcau;amumuIcaH;amumuIcA;amumuyagbhyAm;amumuyagbhiH;amumuIce;amumuyagbhyAm;amumuyagbhyaH;amumuIcaH;amumuyagbhyAm;amumuyagbhyaH;amumuIcaH;amumuIcoH;amumuIcAm;amumuIci;amumuIcoH;amumuyakSu;he amumuyaG;he amumuyaJcau;he amumuyaJcaH"
    },
    {
        "ind": "149004",
        "baseindex": "49.004",
        "word": "adamuyaJc",
        "grp": "49",
        "index_in_grp": "4",
        "end": "cakArAntaH",
        "linga": "P",
        "forms": "adamuyaG;adamuyaJcau;adamuyaJcaH;adamuyaJcam;adamuyaJcau;adamuIcaH;adamuIcA;adamuyagbhyAm;adamuyagbhiH;adamuIce;adamuyagbhyAm;adamuyagbhyaH;adamuIcaH;adamuyagbhyAm;adamuyagbhyaH;adamuIcaH;adamuIcoH;adamuIcAm;adamuIci;adamuIcoH;adamuyakSu;he adamuyaG;he adamuyaJcau;he adamuyaJcaH"
    },
    {
        "ind": "149005",
        "baseindex": "49.005",
        "word": "samyaJc",
        "grp": "49",
        "index_in_grp": "5",
        "end": "cakArAntaH",
        "linga": "P",
        "forms": "samyaG;samyaJcau;samyaJcaH;samyaJcam;samyaJcau;samIcaH;samIcA;samyagbhyAm;samyagbhiH;samIce;samyagbhyAm;samyagbhyaH;samIcaH;samyagbhyAm;samyagbhyaH;samIcaH;samIcoH;samIcAm;samIci;samIcoH;samyakSu;he samyaG;he samyaJcau;he samyaJcaH"
    },
    {
        "ind": "149006",
        "baseindex": "49.006",
        "word": "sadhryaJc",
        "grp": "49",
        "index_in_grp": "6",
        "end": "cakArAntaH",
        "linga": "P",
        "forms": "sadhryaG;sadhryaJcau;sadhryaJcaH;sadhryaJcam;sadhryaJcau;sadhrIcaH;sadhrIcA;sadhryagbhyAm;sadhryagbhiH;sadhrIce;sadhryagbhyAm;sadhryagbhyaH;sadhrIcaH;sadhryagbhyAm;sadhryagbhyaH;sadhrIcaH;sadhrIcoH;sadhrIcAm;sadhrIci;sadhrIcoH;sadhryakSu;he sadhryaG;he sadhryaJcau;he sadhryaJcaH"
    },
    {
        "ind": "149007",
        "baseindex": "49.007",
        "word": "adadryaJc",
        "grp": "49",
        "index_in_grp": "7",
        "end": "cakArAntaH",
        "linga": "P",
        "forms": "adadryaG;adadryaJcau;adadryaJcaH;adadryaJcam;adadryaJcau;adadrIcaH;adadrIcA;adadryagbhyAm;adadryagbhiH;adadrIce;adadryagbhyAm;adadryagbhyaH;adadrIcaH;adadryagbhyAm;adadryagbhyaH;adadrIcaH;adadrIcoH;adadrIcAm;adadrIci;adadrIcoH;adadryakSu;he adadryaG;he adadryaJcau;he adadryaJcaH"
    },
    {
        "ind": "149008",
        "baseindex": "49.008",
        "word": "udaJc",
        "grp": "49",
        "index_in_grp": "8",
        "end": "cakArAntaH",
        "linga": "P",
        "forms": "udaG;udaJcau;udaJcaH;udaJcam;udaJcau;udIcaH;udIcA;udagbhyAm;udagbhiH;udIce;udagbhyAm;udagbhyaH;udIcaH;udagbhyAm;udagbhyaH;udIcaH;udIcoH;udIcAm;udIci;udIcoH;udakSu;he udaG;he udaJcau;he udaJcaH"
    },
    {
        "ind": "149009",
        "baseindex": "49.009",
        "word": "tiryaJc",
        "grp": "49",
        "index_in_grp": "9",
        "end": "cakArAntaH",
        "linga": "P",
        "forms": "tiryaG;tiryaJcau;tiryaJcaH;tiryaJcam;tiryaJcau;tirazcaH;tirazcA;tiryagbhyAm;tiryagbhiH;tirazce;tiryagbhyAm;tiryagbhyaH;tirazcaH;tiryagbhyAm;tiryagbhyaH;tirazcaH;tirazcoH;tirazcAm;tirazci;tirazcoH;tiryakSu;he tiryaG;he tiryaJcau;he tiryaJcaH"
    },
    {
        "ind": "149010",
        "baseindex": "49.010",
        "word": "prAJc",
        "grp": "49",
        "index_in_grp": "10",
        "end": "cakArAntaH",
        "linga": "P",
        "forms": "prAG;prAJcau;prAJcaH;prAJcam;prAJcau;prAJcaH;prAJcA;prAGbhyAm;prAGbhiH;prAJce;prAGbhyAm;prAGbhyaH;prAJcaH;prAGbhyAm;prAGbhyaH;prAJcaH;prAJcoH;prAJcAm;prAJci;prAJcoH;prAGkhaSu-prAGkSu-prAGSu;he prAG;he prAJcau;he prAJcaH"
    },
    {
        "ind": "149011",
        "baseindex": "49.011",
        "word": "kruJc",
        "grp": "49",
        "index_in_grp": "11",
        "end": "cakArAntaH",
        "linga": "P",
        "forms": "kruG;kruJcau;kruJcaH;kruJcam;kruJcau;kruJcaH;kruJcA;kruGbhyAm;kruGbhiH;kruJce;kruGbhyAm;kruGbhyaH;kruJcaH;kruGbhyAm;kruGbhyaH;kruJcaH;kruJcoH;kruJcAm;kruJci;kruJcoH;kruGkhaSu-kruGkSu-kruGSu;he kruG;he kruJcau;he kruJcaH"
    },
    {
        "ind": "149012",
        "baseindex": "49.012",
        "word": "payomuc",
        "grp": "49",
        "index_in_grp": "12",
        "end": "cakArAntaH",
        "linga": "P",
        "forms": "payomuk-payomug;payomucau;payomucaH;payomucam;payomucau;payomucaH;payomucA;payomugbhyAm;payomugbhiH;payomuce;payomugbhyAm;payomugbhyaH;payomucaH;payomugbhyAm;payomugbhyaH;payomucaH;payomucoH;payomucAm;payomuci;payomucoH;payomukSu;he payomuk-payomug;he payomucau;he payomucaH"
    },
    {
        "ind": "149013",
        "baseindex": "49.013",
        "word": "suvRzc",
        "grp": "49",
        "index_in_grp": "13",
        "end": "cakArAntaH",
        "linga": "P",
        "forms": "suvRT-suvRD;suvRzcau;suvRzcaH;suvRzcam;suvRzcau;suvRzcaH;suvRzcA;suvRDbhyAm;suvRDbhiH;suvRzce;suvRDbhyAm;suvRDbhyaH;suvRzcaH;suvRDbhyAm;suvRDbhyaH;suvRzcaH;suvRzcoH;suvRzcAm;suvRzci;suvRzcoH;suvRTtsu-suvRTsu;he suvRT-suvRD;he suvRzcau;he suvRzcaH"
    },
    {
        "ind": "150001",
        "baseindex": "50.001",
        "word": "mahat",
        "grp": "50",
        "index_in_grp": "1",
        "end": "takArAntaH",
        "linga": "P",
        "forms": "mahAn;mahAntau;mahAntaH;mahAntam;mahAntau;mahataH;mahatA;mahadbhyAm;mahadbhiH;mahate;mahadbhyAm;mahadbhyaH;mahataH;mahadbhyAm;mahadbhyaH;mahataH;mahatoH;mahatAm;mahati;mahatoH;mahatsu;he mahan;he mahAntau;he mahAntaH"
    },
    {
        "ind": "150002",
        "baseindex": "50.002",
        "word": "dhImat",
        "grp": "50",
        "index_in_grp": "2",
        "end": "takArAntaH",
        "linga": "P",
        "forms": "dhImAn;dhImantau;dhImantaH;dhImantam;dhImantau;dhImataH;dhImatA;dhImadbhyAm;dhImadbhiH;dhImate;dhImadbhyAm;dhImadbhyaH;dhImataH;dhImadbhyAm;dhImadbhyaH;dhImataH;dhImatoH;dhImatAm;dhImati;dhImatoH;dhImatsu;he dhIman;he dhImantau;he dhImantaH"
    },
    {
        "ind": "150003",
        "baseindex": "50.003",
        "word": "gomat",
        "grp": "50",
        "index_in_grp": "3",
        "end": "takArAntaH",
        "linga": "P",
        "forms": "gomAn;gomantau;gomantaH;gomantam;gomantau;gomataH;gomatA;gomadbhyAm;gomadbhiH;gomate;gomadbhyAm;gomadbhyaH;gomataH;gomadbhyAm;gomadbhyaH;gomataH;gomatoH;gomatAm;gomati;gomatoH;gomatsu;he goman;he gomantau;he gomantaH"
    },
    {
        "ind": "150004",
        "baseindex": "50.004",
        "word": "bhavat",
        "grp": "50",
        "index_in_grp": "4",
        "end": "takArAntaH",
        "linga": "P",
        "forms": "bhavAn;bhavantau;bhavantaH;bhavantam;bhavantau;bhavataH;bhavatA;bhavadbhyAm;bhavadbhiH;bhavate;bhavadbhyAm;bhavadbhyaH;bhavataH;bhavadbhyAm;bhavadbhyaH;bhavataH;bhavatoH;bhavatAm;bhavati;bhavatoH;bhavatsu;he bhavan;he bhavantau;he bhavantaH"
    },
    {
        "ind": "150005",
        "baseindex": "50.005",
        "word": "dadat",
        "grp": "50",
        "index_in_grp": "5",
        "end": "takArAntaH",
        "linga": "P",
        "forms": "dadat-dadad;dadatau;dadataH;dadatam;dadatau;dadataH;dadatA;dadadbhyAm;dadadbhiH;dadate;dadadbhyAm;dadadbhyaH;dadataH;dadadbhyAm;dadadbhyaH;dadataH;dadatoH;dadatAm;dadati;dadatoH;dadatsu;he dadat-dadad;he dadatau;he dadataH"
    },
    {
        "ind": "150006",
        "baseindex": "50.006",
        "word": "jakSat",
        "grp": "50",
        "index_in_grp": "6",
        "end": "takArAntaH",
        "linga": "P",
        "forms": "jakSat-jakSad;jakSatau;jakSataH;jakSatam;jakSatau;jakSataH;jakSatA;jakSadbhyAm;jakSadbhiH;jakSate;jakSadbhyAm;jakSadbhyaH;jakSataH;jakSadbhyAm;jakSadbhyaH;jakSataH;jakSatoH;jakSatAm;jakSati;jakSatoH;jakSatsu;he jakSat-jakSad;he jakSatau;he jakSataH"
    },
    {
        "ind": "150007",
        "baseindex": "50.007",
        "word": "daridrat",
        "grp": "50",
        "index_in_grp": "7",
        "end": "takArAntaH",
        "linga": "P",
        "forms": "daridrat-daridrad;daridratau;daridrataH;daridratam;daridratau;daridrataH;daridratA;daridradbhyAm;daridradbhiH;daridrate;daridradbhyAm;daridradbhyaH;daridrataH;daridradbhyAm;daridradbhyaH;daridrataH;daridratoH;daridratAm;daridrati;daridratoH;daridratsu;he daridrat-daridrad;he daridratau;he daridrataH"
    },
    {
        "ind": "150008",
        "baseindex": "50.008",
        "word": "jAgrat",
        "grp": "50",
        "index_in_grp": "8",
        "end": "takArAntaH",
        "linga": "P",
        "forms": "jAgrat-jAgrad;jAgratau;jAgrataH;jAgratam;jAgratau;jAgrataH;jAgratA;jAgradbhyAm;jAgradbhiH;jAgrate;jAgradbhyAm;jAgradbhyaH;jAgrataH;jAgradbhyAm;jAgradbhyaH;jAgrataH;jAgratoH;jAgratAm;jAgrati;jAgratoH;jAgratsu;he jAgrat-jAgrad;he jAgratau;he jAgrataH"
    },
    {
        "ind": "150009",
        "baseindex": "50.009",
        "word": "zAsat",
        "grp": "50",
        "index_in_grp": "9",
        "end": "takArAntaH",
        "linga": "P",
        "forms": "zAsat-zAsad;zAsatau;zAsataH;zAsatam;zAsatau;zAsataH;zAsatA;zAsadbhyAm;zAsadbhiH;zAsate;zAsadbhyAm;zAsadbhyaH;zAsataH;zAsadbhyAm;zAsadbhyaH;zAsataH;zAsatoH;zAsatAm;zAsati;zAsatoH;zAsatsu;he zAsat-zAsad;he zAsatau;he zAsataH"
    },
    {
        "ind": "150010",
        "baseindex": "50.010",
        "word": "cakAsat",
        "grp": "50",
        "index_in_grp": "10",
        "end": "takArAntaH",
        "linga": "P",
        "forms": "cakAsat-cakAsad;cakAsatau;cakAsataH;cakAsatam;cakAsatau;cakAsataH;cakAsatA;cakAsadbhyAm;cakAsadbhiH;cakAsate;cakAsadbhyAm;cakAsadbhyaH;cakAsataH;cakAsadbhyAm;cakAsadbhyaH;cakAsataH;cakAsatoH;cakAsatAm;cakAsati;cakAsatoH;cakAsatsu;he cakAsat-cakAsad;he cakAsatau;he cakAsataH"
    },
    {
        "ind": "150011",
        "baseindex": "50.011",
        "word": "dIdhyat",
        "grp": "50",
        "index_in_grp": "11",
        "end": "takArAntaH",
        "linga": "P",
        "forms": "dIdhyat-dIdhyad;dIdhyatau;dIdhyataH;dIdhyatam;dIdhyatau;dIdhyataH;dIdhyatA;dIdhyadbhyAm;dIdhyadbhiH;dIdhyate;dIdhyadbhyAm;dIdhyadbhyaH;dIdhyataH;dIdhyadbhyAm;dIdhyadbhyaH;dIdhyataH;dIdhyatoH;dIdhyatAm;dIdhyati;dIdhyatoH;dIdhyatsu;he dIdhyat-dIdhyad;he dIdhyatau;he dIdhyataH"
    },
    {
        "ind": "150012",
        "baseindex": "50.012",
        "word": "vevyat",
        "grp": "50",
        "index_in_grp": "12",
        "end": "takArAntaH",
        "linga": "P",
        "forms": "vevyat-vevyad;vevyatau;vevyataH;vevyatam;vevyatau;vevyataH;vevyatA;vevyadbhyAm;vevyadbhiH;vevyate;vevyadbhyAm;vevyadbhyaH;vevyataH;vevyadbhyAm;vevyadbhyaH;vevyataH;vevyatoH;vevyatAm;vevyati;vevyatoH;vevyatsu;he vevyat-vevyad;he vevyatau;he vevyataH"
    },
    {
        "ind": "151001",
        "baseindex": "51.001",
        "word": "gup",
        "grp": "51",
        "index_in_grp": "1",
        "end": "pakArAntaH",
        "linga": "P",
        "forms": "gup-gub;gupau;gupaH;gupam;gupau;gupaH;gupA;gubbhyAm;gubbhiH;gupe;gubbhyAm;gubbhyaH;gupaH;gubbhyAm;gubbhyaH;gupaH;gupoH;gupAm;gupi;gupoH;gupsu;he gup-b;he gupau;he gupaH"
    },
    {
        "ind": "152001",
        "baseindex": "52.001",
        "word": "tAdRz",
        "grp": "52",
        "index_in_grp": "1",
        "end": "zakArAntaH",
        "linga": "P",
        "forms": "tAdRk-tAdRg;tAdRzau;tAdRzaH;tAdRzam;tAdRzau;tAdRzaH;tAdRzA;tAdRgbhyAm;tAdRgbhiH;tAdRze;tAdRgbhyAm;tAdRgbhyaH;tAdRzaH;tAdRgbhyAm;tAdRgbhyaH;tAdRzaH;tAdRzoH;tAdRzAm;tAdRzi;tAdRzoH;tAdRkSu;he tAdRk-tAdRg;he tAdRzau;he tAdRzaH"
    },
    {
        "ind": "152002",
        "baseindex": "52.002",
        "word": "viz",
        "grp": "52",
        "index_in_grp": "2",
        "end": "zakArAntaH",
        "linga": "P",
        "forms": "viT-viD;vizau;vizaH;vizam;vizau;vizaH;vizA;viDbhyAm;viDbhiH;vize;viDbhyAm;viDbhyaH;vizaH;viDbhyAm;viDbhyaH;vizaH;vizoH;vizAm;vizi;vizoH;viTtsu-viTsu;he viT-viD;he vizau;he vizaH"
    },
    {
        "ind": "152003",
        "baseindex": "52.003",
        "word": "naz",
        "grp": "52",
        "index_in_grp": "3",
        "end": "zakArAntaH",
        "linga": "P",
        "forms": "nak-nag-naT-naD;nazau;nazaH;nazam;nazau;nazaH;nazA;nagbhyAm-naDbhyAm;nagbhiH-naDbhiH;naze;nagbhyAm-naDbhyAm;nagbhyaH-naDbhyaH;nazaH;nagbhyAm-naDbhyAm;nagbhyaH-naDbhyaH;nazaH;nazoH;nazAm;nazi;nazoH;nakSu-naTtsu-naTsu;he nak-nag-naT-naD;he nazau;he nazaH"
    },
    {
        "ind": "152004",
        "baseindex": "52.004",
        "word": "ghRtaspRz",
        "grp": "52",
        "index_in_grp": "4",
        "end": "zakArAntaH",
        "linga": "P",
        "forms": "ghRtaspRk-ghRtaspRg;ghRtaspRzau;ghRtaspRzaH;ghRtaspRzam;ghRtaspRzau;ghRtaspRzaH;ghRtaspRzA;ghRtaspRgbhyAm;ghRtaspRgbhiH;ghRtaspRze;ghRtaspRgbhyAm;ghRtaspRgbhyaH;ghRtaspRzaH;ghRtaspRgbhyAm;ghRtaspRgbhyaH;ghRtaspRzaH;ghRtaspRzoH;ghRtaspRzAm;ghRtaspRzi;ghRtaspRzoH;ghRtaspRkSu;he ghRtaspRk-ghRtaspRg;he ghRtaspRzau;he ghRtaspRzaH"
    },
    {
        "ind": "153001",
        "baseindex": "53.001",
        "word": "doS",
        "grp": "53",
        "index_in_grp": "1",
        "end": "SakArAntaH",
        "linga": "P",
        "forms": "do:;doSau;doSaH;doSam;doSau;doSaH-doSNaH;doSNA-doSA;doSabhyAm-dorbhyAm;doSabhiH-dorbhiH;doSNe-doSe;doSabhyAm-dorbhyAm;doSabhyaH-dorbhyaH;doSaH-doSNaH;doSabhyAm-dorbhyAm;doSabhyaH-dorbhyaH;doSaH-doSNaH;doSoH-doSNoH;doSAm-doSNAm;doSi-doSaNi-doSNi;doSoH-doSNoH;doSasu-doHSu;he do:;he doSau;he doSaH"
    },
    {
        "ind": "153002",
        "baseindex": "53.002",
        "word": "pipaThiS",
        "grp": "53",
        "index_in_grp": "2",
        "end": "SakArAntaH",
        "linga": "P",
        "forms": "pipaThIH;pipaThiSau;pipaThiSaH;pipaThiSam;pipaThiSau;pipaThiSaH;pipaThiSA;pipaThIrbhyAm;pipaThIrbhiH;pipaThiSe;pipaThIrbhyAm;pipaThIrbhyaH;pipaThiSaH;pipaThIrbhyAm;pipaThIrbhyaH;pipaThiSaH;pipaThiSoH;pipaThiSAm;pipaThiSi;pipaThiSoH;pipaThIHSu-pipaThISSu;he pipaThIH;he pipaThiSau;he pipaThiSaH"
    },
    {
        "ind": "153003",
        "baseindex": "53.003",
        "word": "cikIrS",
        "grp": "53",
        "index_in_grp": "3",
        "end": "SakArAntaH",
        "linga": "P",
        "forms": "cikIH;cikIrSau;cikIrSaH;cikIrSam;cikIrSau;cikIrSaH;cikIrSA;cikIrbhyAm;cikIrbhiH;cikIrSe;cikIrbhyAm;cikIrbhyaH;cikIrSaH;cikIrbhyAm;cikIrbhyaH;cikIrSaH;cikIrSoH;cikIrSAm;cikIrSi;cikIrSoH;cikIrSu;he cikIH;he cikIrSau;he cikIrSaH"
    },
    {
        "ind": "153004",
        "baseindex": "53.004",
        "word": "vivikS",
        "grp": "53",
        "index_in_grp": "4",
        "end": "SakArAntaH",
        "linga": "P",
        "forms": "viviT-viviD;vivikSau;vivikSaH;vivikSam;vivikSau;vivikSaH;vivikSA;viviDbhyAm;viviDbhiH;vivikSe;viviDbhyAm;viviDbhyaH;vivikSaH;viviDbhyAm;viviDbhyaH;vivikSaH;vivikSoH;vivikSAm;vivikSi;vivikSoH;viviTtsu-viviTsu;he viviT-viviD;he vivikSau;he vivikSaH"
    },
    {
        "ind": "153005",
        "baseindex": "53.005",
        "word": "dadhRS",
        "grp": "53",
        "index_in_grp": "5",
        "end": "SakArAntaH",
        "linga": "P",
        "forms": "dadhRk-dadhRg;dadhRSau;dadhRSaH;dadhRSam;dadhRSau;dadhRSaH;dadhRSA;dadhRgbhyAm;dadhRgbhiH;dadhRSe;dadhRgbhyAm;dadhRgbhyaH;dadhRSaH;dadhRgbhyAm;dadhRgbhyaH;dadhRSaH;dadhRSoH;dadhRSAm;dadhRSi;dadhRSoH;dadhRkSu;he dadhRk-dadhRg;he dadhRSau;he dadhRSaH"
    },
    {
        "ind": "153006",
        "baseindex": "53.006",
        "word": "ratnamuS",
        "grp": "53",
        "index_in_grp": "6",
        "end": "SakArAntaH",
        "linga": "P",
        "forms": "ratnamuT-ratnamuD;ratnamuSau;ratnamuSaH;ratnamuSam;ratnamuSau;ratnamuSaH;ratnamuSA;ratnamuDbhyAm;ratnamuDbhiH;ratnamuSe;ratnamuDbhyAm;ratnamuDbhyaH;ratnamuSaH;ratnamuDbhyAm;ratnamuDbhyaH;ratnamuSaH;ratnamuSoH;ratnamuSAm;ratnamuSi;ratnamuSoH;ratnamuTtsu-ratnamuTsu;he ratnamuT-ratnamuD;he ratnamuSau;he ratnamuSaH"
    },
    {
        "ind": "154001",
        "baseindex": "54.001",
        "word": "vidvas",
        "grp": "54",
        "index_in_grp": "1",
        "end": "sakArAntaH",
        "linga": "P",
        "forms": "vidvAn;vidvAMsau;vidvAMsaH;vidvAMsam;vidvAMsau;viduSaH;viduSA;vidvadbhyAm;vidvadbhiH;viduSe;vidvadbhyAm;vidvadbhyaH;viduSaH;vidvadbhyAm;vidvadbhyaH;viduSaH;viduSoH;viduSAm;viduSi;viduSoH;vidvatsu;he vidvan;he vidvAMsau;he vidvAMsaH"
    },
    {
        "ind": "154002",
        "baseindex": "54.002",
        "word": "puMs",
        "grp": "54",
        "index_in_grp": "2",
        "end": "sakArAntaH",
        "linga": "P",
        "forms": "pumAn;pumAMsau;pumAMsaH;pumAMsam;pumAMsau;puMsaH;puMsA;puMbhyAm-pumbhyAm;puMbhiH-pumbhiH;puMse;puMbhyAm-pumbhyAm;puMbhyaH-pumbhyaH;puMsaH;puMbhyAm-pumbhyAm;puMbhyaH-pumbhyaH;puMsaH;puMsoH;puMsAm;puMsi;puMsoH;puMsu;he puman;he pumAMsau;he pumAMsaH"
    },
    {
        "ind": "154003",
        "baseindex": "54.003",
        "word": "uzanas",
        "grp": "54",
        "index_in_grp": "3",
        "end": "sakArAntaH",
        "linga": "P",
        "forms": "uzanA;uzanasau;uzanasaH;uzanasam;uzanasau;uzanasaH;uzanasA;uzanobhyAm;uzanobhiH;uzanase;uzanobhyAm;uzanobhyaH;uzanasaH;uzanobhyAm;uzanobhyaH;uzanasaH;uzanasoH;uzanasAm;uzanasi;uzanasoH;uzanassu-uzanaHsu;he uzana-uzanan-uzanaH;he uzanasau;he uzanasaH"
    },
    {
        "ind": "154004",
        "baseindex": "54.004",
        "word": "anehas",
        "grp": "54",
        "index_in_grp": "4",
        "end": "sakArAntaH",
        "linga": "P",
        "forms": "anehAH;anehasau;anehasaH;anehasam;anehasau;anehasaH;anehasA;anehobhyAm;anehobhiH;anehase;anehobhyAm;anehobhyaH;anehasaH;anehobhyAm;anehobhyaH;anehasaH;anehasoH;anehasAm;anehasi;anehasoH;anehassu-anehaHsu;he anehAH;he anehasau;he anehasaH"
    },
    {
        "ind": "154005",
        "baseindex": "54.005",
        "word": "vedhas",
        "grp": "54",
        "index_in_grp": "5",
        "end": "sakArAntaH",
        "linga": "P",
        "forms": "vedhAH;vedhasau;vedhasaH;vedhasam;vedhasau;vedhasaH;vedhasA;vedhobhyAm;vedhobhiH;vedhase;vedhobhyAm;vedhobhyaH;vedhasaH;vedhobhyAm;vedhobhyaH;vedhasaH;vedhasoH;vedhasAm;vedhasi;vedhasoH;vedhassu-vedhaHsu;he vedhaH;he vedhasau;he vedhasaH"
    },
    {
        "ind": "154006",
        "baseindex": "54.006",
        "word": "suvas",
        "grp": "54",
        "index_in_grp": "6",
        "end": "sakArAntaH",
        "linga": "P",
        "forms": "suvaH;suvasau;suvasaH;suvasam;suvasau;suvasaH;suvasA;suvobhyAm;suvobhiH;suvase;suvobhyAm;suvobhyaH;suvasaH;suvobhyAm;suvobhyaH;suvasaH;suvasoH;suvasAm;suvasi;suvasoH;suvassu-suvaHsu;he suvaH;he suvasau;he suvasaH"
    },
    {
        "ind": "154007",
        "baseindex": "54.007",
        "word": "adas",
        "grp": "54",
        "index_in_grp": "7",
        "end": "sakArAntaH",
        "linga": "P",
        "forms": "asau;amU;amI;amum;amU;amUn;amunA;amUbhyAm;amIbhiH;amuSmai;amUbhyAm;amIbhyaH;amuSmAt-amuSmAd;amUbhyAm;amIbhyaH;amuSya;amuyoH;amISAm;amuSmin;amuyoH;amISu;-;-;-"
    },
    {
        "ind": "155001",
        "baseindex": "55.001",
        "word": "upAnah",
        "grp": "55",
        "index_in_grp": "1",
        "end": "hakArAntaH",
        "linga": "S",
        "forms": "upAnat-upAnad;upAnahau;upAnahaH;upAnaham;upAnahau;upAnahaH;upAnahA;upAnadbhyAm;upAnadbhiH;upAnahe;upAnadbhyAm;upAnadbhyaH;upAnahaH;upAnadbhyAm;upAnadbhyaH;upAnahaH;upAnahoH;upAnahAm;upAnahi;upAnahoH;upAnatsu;he upAnat-upAnad;he upAnahau;he upAnahaH"
    },
    {
        "ind": "155002",
        "baseindex": "55.002",
        "word": "uSNih",
        "grp": "55",
        "index_in_grp": "2",
        "end": "hakArAntaH",
        "linga": "S",
        "forms": "uSNik-uSNig;uSNihau;uSNihaH;uSNiham;uSNihau;uSNihaH;uSNihA;uSNigbhyAm;uSNigbhiH;uSNihe;uSNigbhyAm;uSNigbhyaH;uSNihaH;uSNigbhyAm;uSNigbhyaH;uSNihaH;uSNihoH;uSNihAm;uSNihi;uSNihoH;uSNikSu;he uSNik-uSNig;he uSNihau;he uSNihaH"
    },
    {
        "ind": "156001",
        "baseindex": "56.001",
        "word": "div",
        "grp": "56",
        "index_in_grp": "1",
        "end": "vakArAntaH",
        "linga": "S",
        "forms": "dyauH;divau;divaH;divam;divau;divaH;divA;dyubhyAm;dyubhiH;dive;dyubhyAm;dyubhyaH;divaH;dyubhyAm;dyubhyaH;divaH;divoH;divAm;divi;divoH;dyuSu;he dyauH;he divau;he divaH"
    },
    {
        "ind": "157001",
        "baseindex": "57.001",
        "word": "gir",
        "grp": "57",
        "index_in_grp": "1",
        "end": "rephAntaH",
        "linga": "S",
        "forms": "gIH;girau;giraH;giram;girau;giraH;girA;gIrbhyAm;gIrbhiH;gire;gIrbhyAm;gIrbhyaH;giraH;gIrbhyAm;gIrbhyaH;giraH;giroH;girAm;giri;giroH;gIrSu;he gIH;he girau;he giraH"
    },
    {
        "ind": "157002",
        "baseindex": "57.002",
        "word": "catur",
        "grp": "57",
        "index_in_grp": "2",
        "end": "rephAntaH",
        "linga": "S",
        "forms": "-;-;catasraH;-;-;catasraH;-;-;catasRbhiH;-;-;catasRbhyaH;-;-;catasRbhyaH;-;-;catasRNAm;-;-;catasRSu;-;;he catasraH"
    },
    {
        "ind": "158001",
        "baseindex": "58.001",
        "word": "kim",
        "grp": "58",
        "index_in_grp": "1",
        "end": "makArAntaH",
        "linga": "S",
        "forms": "kA;ke;kAH;kAm;ke;kAH;kayA;kAbhyAm;kAbhiH;kasyai;kAbhyAm;kAbhyaH;kasyAH;kAbhyAm;kAbhyaH;kasyAH;kayoH;kAsAm;kasyAm;kayoH;kAsu;-;-;-"
    },
    {
        "ind": "158002",
        "baseindex": "58.002",
        "word": "idam",
        "grp": "58",
        "index_in_grp": "2",
        "end": "makArAntaH",
        "linga": "S",
        "forms": "iyam;ime;imAH;imAm-enAm;ime-ene;imAH-enAH;anayA-enayA;AbhyAm;AbhiH;asyai;AbhyAm;AbhyaH;asyAH;AbhyAm;AbhyaH;asyAH;anayoH-enayoH;AsAm;asyAm;anayoH-enayoH;Asu;-;-;-"
    },
    {
        "ind": "159001",
        "baseindex": "59.001",
        "word": "sraj",
        "grp": "59",
        "index_in_grp": "1",
        "end": "jakArAntaH",
        "linga": "S",
        "forms": "srak-srag;srajau;srajaH;srajam;srajau;srajaH;srajA;sragbhyAm;sragbhiH;sraje;sragbhyAm;sragbhyaH;srajaH;sragbhyAm;sragbhyaH;srajaH;srajoH;srajAm;sraji;srajoH;srakSu;he srak-srag;he srajau;he srajaH"
    },
    {
        "ind": "160001",
        "baseindex": "60.001",
        "word": "tyad",
        "grp": "60",
        "index_in_grp": "1",
        "end": "dakArAntaH",
        "linga": "S",
        "forms": "syA;tye;tyAH;tyAm;tye;tyAH;tyayA;tyAbhyAm;tyAbhiH;tyasyai;tyAbhyAm;tyAbhyaH;tyasyAH;tyAbhyAm;tyAbhyaH;tyasyAH;tyayoH;tyAsAm;tyasyAm;tyayoH;tyAsu;-;-;-"
    },
    {
        "ind": "160002",
        "baseindex": "60.002",
        "word": "tad",
        "grp": "60",
        "index_in_grp": "2",
        "end": "dakArAntaH",
        "linga": "S",
        "forms": "sA;te;tAH;tAm;te;tAH;tayA;tAbhyAm;tAbhiH;tasyai;tAbhyAm;tAbhyaH;tasyAH;tAbhyAm;tAbhyaH;tasyAH;tayoH;tAsAm;tasyAm;tayoH;tAsu;-;-;-"
    },
    {
        "ind": "160003",
        "baseindex": "60.003",
        "word": "etad",
        "grp": "60",
        "index_in_grp": "3",
        "end": "dakArAntaH",
        "linga": "S",
        "forms": "eSA;ete;etAH;etAm-enAm;ete-ene;etAH-enAH;etayA-enayA;etAbhyAm;etAbhiH;etasyai;etAbhyAm;etAbhyaH;etasyAH;etAbhyAm;etAbhyaH;etasyAH;etayoH-enayoH;etAsAm;etasyAm;etayoH-enayoH;etAsu;-;-;-"
    },
    {
        "ind": "161001",
        "baseindex": "61.001",
        "word": "vAc",
        "grp": "61",
        "index_in_grp": "1",
        "end": "cakArAntaH",
        "linga": "S",
        "forms": "vAk-vAg;vAcau;vAcaH;vAcam;vAcau;vAcaH;vAcA;vAgbhyAm;vAgbhiH;vAce;vAgbhyAm;vAgbhyaH;vAcaH;vAgbhyAm;vAgbhyaH;vAcaH;vAcoH;vAcAm;vAci;vAcoH;vAkSu;he vAk-vAg;he vAcau;he vAcaH"
    },
    {
        "ind": "162001",
        "baseindex": "62.001",
        "word": "diz",
        "grp": "62",
        "index_in_grp": "1",
        "end": "zakArAntaH",
        "linga": "S",
        "forms": "dik-dig;dizau;dizaH;dizam;dizau;dizaH;dizA;digbhyAm;digbhiH;dize;digbhyAm;digbhyaH;dizaH;digbhyAm;digbhyaH;dizaH;dizoH;dizAm;dizi;dizoH;dikSu;he dik-dig;he dizau;he dizaH"
    },
    {
        "ind": "162002",
        "baseindex": "62.002",
        "word": "dRz",
        "grp": "62",
        "index_in_grp": "2",
        "end": "zakArAntaH",
        "linga": "S",
        "forms": "dRk-dRg;dRzau;dRzaH;dRzam;dRzau;dRzaH;dRzA;dRgbhyAm;dRgbhiH;dRze;dRgbhyAm;dRgbhyaH;dRzaH;dRgbhyAm;dRgbhyaH;dRzaH;dRzoH;dRzAm;dRzi;dRzoH;dRkSu;he dRk-dRg;he dRzau;he dRzaH"
    },
    {
        "ind": "163001",
        "baseindex": "63.001",
        "word": "tviS",
        "grp": "63",
        "index_in_grp": "1",
        "end": "SakArAntaH",
        "linga": "S",
        "forms": "tviT-tviD;tviSau;tviSaH;tviSam;tviSau;tviSaH;tviSA;tviDbhyAm;tviDbhiH;tviSe;tviDbhyAm;tviDbhyaH;tviSaH;tviDbhyAm;tviDbhyaH;tviSaH;tviSoH;tviSAm;tviSi;tviSoH;tviTtsu-tviTsu;he tviT-tviD;he tviSau;he tviSaH"
    },
    {
        "ind": "163002",
        "baseindex": "63.002",
        "word": "sajuS",
        "grp": "63",
        "index_in_grp": "2",
        "end": "SakArAntaH",
        "linga": "S",
        "forms": "sajUH;sajuSau;sajuSaH;sajuSam;sajuSau;sajuSaH;sajuSA;sajUrbhyAm;sajUrbhiH;sajuSe;sajUrbhyAm;sajUrbhyaH;sajuSaH;sajUrbhyAm;sajUrbhyaH;sajuSaH;sajuSoH;sajUSAm;sajuSi;sajuSoH;sajUSSu-sajUHSu;he sajUH;he sajuSau;he sajuSaH"
    },
    {
        "ind": "163003",
        "baseindex": "63.003",
        "word": "prAvRS",
        "grp": "63",
        "index_in_grp": "3",
        "end": "SakArAntaH",
        "linga": "S",
        "forms": "prAvRT-prAvRD;prAvRSau;prAvRSaH;prAvRSam;prAvRSau;prAvRSaH;prAvRSA;prAvRDbhyAm;prAvRDbhiH;prAvRSe;prAvRDbhyAm;prAvRDbhyaH;prAvRSaH;prAvRDbhyAm;prAvRDbhyaH;prAvRSaH;prAvRSoH;prAvRSAm;prAvRSi;prAvRSoH;prAvRTsu;he prAvRT-prAvRD;he prAvRSau;he prAvRSaH"
    },
    {
        "ind": "163004",
        "baseindex": "63.004",
        "word": "AziS",
        "grp": "63",
        "index_in_grp": "4",
        "end": "SakArAntaH",
        "linga": "S",
        "forms": "AzIH;AziSau;AziSaH;AziSam;AziSau;AziSaH;AziSA;AzIrbhyAm;AzIrbhiH;AziSe;AzIrbhyAm;AzIrbhyaH;AziSaH;AzIrbhyAm;AzIrbhyaH;AziSaH;AziSoH;AziSAm;AziSi;AziSoH;AzISSu-AzIHsu;he AzIH;he AziSau;he AziSaH"
    },
    {
        "ind": "164001",
        "baseindex": "64.001",
        "word": "adas",
        "grp": "64",
        "index_in_grp": "1",
        "end": "sakArAntaH",
        "linga": "S",
        "forms": "asau;amU;amUH;amUm;amU;amUH;amuyA;amUbhyAm;amUbhiH;amuyai;amUbhyAm;amUbhyaH;amuyAH;amUbhyAm;amUbhyaH;amuyAH;amuyoH;amUSAm;amuSyAm;amuyoH;amUSu;-;-;-"
    },
    {
        "ind": "165001",
        "baseindex": "65.001",
        "word": "yoSit",
        "grp": "65",
        "index_in_grp": "1",
        "end": "takArAntaH",
        "linga": "S",
        "forms": "yoSit;yoSitau;yoSitaH;yoSitam;yoSitau;yoSitaH;yoSitA;yoSidbhyAm;yoSidbhiH;yoSite;yoSidbhyAm;yoSidbhyaH;yoSitaH;yoSidbhyAm;yoSidbhyaH;yoSitaH;yoSitoH;yoSitAm;yoSiti;yoSitoH;yoSitsu;he yoSit;he yoSitau;he yoSitaH"
    },
    {
        "ind": "166001",
        "baseindex": "66.001",
        "word": "Apad",
        "grp": "66",
        "index_in_grp": "1",
        "end": "dakArAntaH",
        "linga": "S",
        "forms": "Apad-Apat;Apadau;ApadaH;Apadam;Apadau;ApadaH;ApadA;ApadbhyAm;ApadbhiH;Apade;ApadbhyAm;ApadbhyaH;ApadaH;ApadbhyAm;ApadbhyaH;ApadaH;ApadoH;ApadAm;Apadi;ApadoH;Apatsu;he Apad-Apat;he Apadau;he ApadaH"
    },
    {
        "ind": "167001",
        "baseindex": "67.001",
        "word": "kSudh",
        "grp": "67",
        "index_in_grp": "1",
        "end": "dhakArAntaH",
        "linga": "S",
        "forms": "kSut-kSud;kSudhau;kSudhaH;kSudham;kSudhau;kSudhaH;kSudhA;kSudbhyAm;kSudbhiH;kSudhe;kSudbhyAm;kSudbhyaH;kSudhaH;kSudbhyAm;kSudbhyaH;kSudhaH;kSudhoH;kSudhAm;kSudhi;kSudhoH;kSutsu;he kSut-kSud;he kSudhau;he kSudhaH"
    },
    {
        "ind": "168001",
        "baseindex": "68.001",
        "word": "sIman",
        "grp": "68",
        "index_in_grp": "1",
        "end": "nakArAntaH",
        "linga": "S",
        "forms": "sImA;sImAnau;sImAnaH;sImAnam;sImAnau;sImnaH;sImnA;sImabhyAm;sImabhiH;sImne;sImabhyAm;sImabhyaH;sImnaH;sImabhyAm;sImabhyaH;sImnaH;sImnoH;sImnAm;sImni-sImani;sImnoH;sImasu;he sIman;he sImAnau;he sImAnaH"
    },
    {
        "ind": "169001",
        "baseindex": "69.001",
        "word": "kakubh",
        "grp": "69",
        "index_in_grp": "1",
        "end": "bhakArAntaH",
        "linga": "S",
        "forms": "kakup-kakub;kakubhau;kakubhaH;kakubham;kakubhau;kakubhaH;kakubhA;kakubbhyAm;kakubbhiH;kakubhe;kakubbhyAm;kakubbhyaH;kakubhaH;kakubbhyAm;kakubbhyaH;kakubhaH;kakubhoH;kakubhAm;kakubhi;kakubhoH;kakubsu;he kakup-kakub;he kakubhau;he kakubhaH"
    },
    {
        "ind": "170001",
        "baseindex": "70.001",
        "word": "svanaDuh",
        "grp": "70",
        "index_in_grp": "1",
        "end": "hakArAntaH",
        "linga": "N",
        "forms": "svanaDut-svanaDud;svanaDuhI;svanaDvAMhi;svanaDut-svanaDud;svanaDuhI;svanaDvAMhi;svanaDuhA;svanaDudbhyAm;svanaDudbhiH;svanaDuhe;svanaDudbhyAm;svanaDudbhyaH;svanaDuhaH;svanaDudbhyAm;svanaDudbhyaH;svanaDuhaH;svanaDuhoH;svanaDuhAm;svanaDuhi;svanaDuhoH;svanaDutsu;he svanaDut-svanaDud;he svanaDuhI;he svanaDvAMhi"
    },
    {
        "ind": "171001",
        "baseindex": "71.001",
        "word": "vimaladiv",
        "grp": "71",
        "index_in_grp": "1",
        "end": "vakArAntaH",
        "linga": "N",
        "forms": "vimaladyu;vimaladivI;vimaladivi;vimaladyu;vimaladivI;vimaladivi;vimaladivA;vimaladyubhyAm;vimaladyubhiH;vimaladive;vimaladyubhyAm;vimaladyubhyaH;vimaladivaH;vimaladyubhyAm;vimaladyubhyaH;vimaladivaH;vimaladivoH;vimaladivAm;vimaladivi;vimaladivoH;vimaladyuSu;he vimaladyu;he vimaladivI;he vimaladivi"
    },
    {
        "ind": "172001",
        "baseindex": "72.001",
        "word": "vAr",
        "grp": "72",
        "index_in_grp": "1",
        "end": "rephAntaH",
        "linga": "N",
        "forms": "vAH;vArI;vAri;vAH;vArI;vAri;vArA;vArbhyAm;vArbhiH;vAre;vArbhyAm;vArbhyaH;vAraH;vArbhyAm;vArbhyaH;vAraH;vAroH;vArAm;vAri;vAroH;vArSu;he vAH;he vArI;he vAri"
    },
    {
        "ind": "172002",
        "baseindex": "72.002",
        "word": "catur",
        "grp": "72",
        "index_in_grp": "2",
        "end": "rephAntaH",
        "linga": "N",
        "forms": "-;-;catvAri;-;-;catvAri;-;-;caturbhiH;-;-;caturbhyaH;-;-;caturbhyaH;-;-;caturNAm;-;-;caturSu;-;-;he catvAri"
    },
    {
        "ind": "173001",
        "baseindex": "73.001",
        "word": "kim",
        "grp": "73",
        "index_in_grp": "1",
        "end": "makArAntaH",
        "linga": "N",
        "forms": "kim;ke;kAni;kim;ke;kAni;kena;kAbhyAm;kaiH;kasme;kAbhyAm;kebhyaH;kasmAt-kasmAd;kAbhyAm;kebhyaH;kasya;kayoH;keSAm;kasmin;kayoH;keSu;-;-;-"
    },
    {
        "ind": "173002",
        "baseindex": "73.002",
        "word": "idam",
        "grp": "73",
        "index_in_grp": "2",
        "end": "makArAntaH",
        "linga": "N",
        "forms": "idam;ime;imAni;idam-enat-enad;ime-ene;imAni-etAni;anena-enena;AbhyAm;ebhiH;asmai;AbhyAm;ebhyaH;asmAt-asmAd;AbhyAm;ebhyaH;asya;anayoH-enayoH;eSAm;asmin;anayoH-enayoH;eSu;-;-;-"
    },
    {
        "ind": "174001",
        "baseindex": "74.001",
        "word": "brahman",
        "grp": "74",
        "index_in_grp": "1",
        "end": "nakArAntaH",
        "linga": "N",
        "forms": "brahma;brahmaNI;brahmANi;brahma;brahmaNI;brahmANi;brahmaNA;brahmabhyAm;brahmabhiH;brahmaNe;brahmabhyAm;brahmabhyaH;brahmaNaH;brahmabhyAm;brahmabhyaH;brahmaNaH;brahmaNoH;brahmaNAm;brahmaNi;brahmaNoH;brahmasu;he brahma-brahman;he brahmaNI;he brahmANi"
    },
    {
        "ind": "174002",
        "baseindex": "74.002",
        "word": "ahan",
        "grp": "74",
        "index_in_grp": "2",
        "end": "nakArAntaH",
        "linga": "N",
        "forms": "ahaH;ahanI-ahnI;ahAni;ahaH;ahanI-ahnI;ahAni;ahnA;ahobhyAm;ahobhiH;ahne;ahobhyAm;ahobhyaH;ahnaH;ahobhyAm;ahobhyaH;ahnaH;ahnoH;ahnAm;ahani-ahni;ahnoH;ahaHsu-ahassu;he ahaH-ahan;he ahanI-ahnI;he ahAni"
    },
    {
        "ind": "174003",
        "baseindex": "74.003",
        "word": "nAman",
        "grp": "74",
        "index_in_grp": "3",
        "end": "nakArAntaH",
        "linga": "N",
        "forms": "nAma;nAmanI-nAmnI;nAmAni;nAma;nAmanI-nAmnI;nAmAni;nAmnA;nAmabhyAm;nAmabhiH;nAmne;nAmabhyAm;nAmabhyaH;nAmnaH;nAmabhyAm;nAmabhyaH;nAmnaH;nAmnoH;nAmnAm;nAmni;nAmnoH;nAmasu;he nAma-nAman;he nAmanI-nAmnI;he nAmAni"
    },
    {
        "ind": "174004",
        "baseindex": "74.004",
        "word": "daNDin",
        "grp": "74",
        "index_in_grp": "4",
        "end": "nakArAntaH",
        "linga": "N",
        "forms": "daNDi;daNDinI;daNDIni;daNDi;daNDinI;daNDIni;daNDinA;daNDibhyAm;daNDibhiH;daNDine;daNDibhyAm;daNDibhyaH;daNDinaH;daNDibhyAm;daNDibhyaH;daNDinaH;daNDinoH;daNDinAm;daNDini;daNDinoH;daNDiSu;he daNDin;he daNDinI;he daNDIni"
    },
    {
        "ind": "174005",
        "baseindex": "74.005",
        "word": "daNDin",
        "grp": "74",
        "index_in_grp": "5",
        "end": "nakArAntaH",
        "linga": "N",
        "forms": "daNDi;daNDinI;daNDIni;daNDi;daNDinI;daNDIni;daNDinA;daNDibhyAm;daNDibhiH;daNDine;daNDibhyAm;daNDibhyaH;daNDinaH;daNDibhyAm;daNDibhyaH;daNDinaH;daNDinoH;daNDinAm;daNDini;daNDinoH;daNDiSu;he daNDin;he daNDinI;he daNDIni"
    },
    {
        "ind": "174006",
        "baseindex": "74.006",
        "word": "manohArin",
        "grp": "74",
        "index_in_grp": "6",
        "end": "nakArAntaH",
        "linga": "N",
        "forms": "manohAri;manohAriNI;manohArINi;manohAri;manohAriNI;manohArINi;manohAriNA;manohAribhyAm;manohAribhiH;manohAriNe;manohAribhyAm;manohAribhyaH;manohAriNaH;manohAribhyAm;manohAribhyaH;manohAriNaH;manohAriNoH;manohAriNAm;manohAriNi;manohAriNoH;manohAriSu;he manohArin;he manohAriNI;he manohArINi"
    },
    {
        "ind": "174007",
        "baseindex": "74.007",
        "word": "varman",
        "grp": "74",
        "index_in_grp": "7",
        "end": "nakArAntaH",
        "linga": "N",
        "forms": "varma;varmaNI;varmANi;varma;varmaNI;varmANi;varmaNA;varmabhyAm;varmabhiH;varmaNe;varmabhyAm;varmabhyaH;varmaNaH;varmabhyAm;varmabhyaH;varmaNaH;varmaNoH;varmaNAm;varmaNi;varmaNoH;varmasu;he varman;he varmaNI;he varmANi"
    },
    {
        "ind": "174008",
        "baseindex": "74.008",
        "word": "supathin",
        "grp": "74",
        "index_in_grp": "8",
        "end": "nakArAntaH",
        "linga": "N",
        "forms": "supathi;supathI;supanthAni;supathi;supathI;supanthAni;supathA;supathibhyAm;supathibhiH;supathe;supathibhyAm;supathibhyaH;supathaH;supathibhyAm;supathibhyaH;supathaH;supathoH;supathAm;supathi;supathoH;supathiSu;he supathin he supathi;he supathI;he supanthAni"
    },
    {
        "ind": "175001",
        "baseindex": "75.001",
        "word": "Urj",
        "grp": "75",
        "index_in_grp": "1",
        "end": "jakArAntaH",
        "linga": "N",
        "forms": "Urk-Urg;UrjI;Urnji;Urk-Urg;UrjI;Urnji;UrjA;UrgbhyAm;UrgbhiH;Urje;UrgbhyAm;UrgbhyaH;UrjaH;UrgbhyAm;UrgbhyaH;UrjaH;UrjoH;UrjAm;Urji;UrjoH;UrkSu;he Urk-Urg;he UrjI;he Urnji"
    },
    {
        "ind": "175002",
        "baseindex": "75.002",
        "word": "asRj",
        "grp": "75",
        "index_in_grp": "2",
        "end": "jakArAntaH",
        "linga": "N",
        "forms": "asRk-asRg;asRjI;asRJji;asRk-asRg;asRjI;asRJji-asAni;asRjA-asnA;asRgbhyAm-asabhyAm;asRgbhiH-asabhiH;asRje-asne;asRgbhyAm-asabhyAm;asRgbhyaH-asabhyaH;asRjaH-asnaH;asRgbhyAm-asabhyAm;asRgbhyaH-asabhyaH;asRjaH-asnaH;asRjoH-asnoH;asRjAm-asnAm;asRji-asni-asani;asRjoH-asnoH;asRkSu-asasu;he asRk-asRg;he asRjI;he asRJji"
    },
    {
        "ind": "176001",
        "baseindex": "76.001",
        "word": "tad",
        "grp": "76",
        "index_in_grp": "1",
        "end": "dakArAntaH",
        "linga": "N",
        "forms": "tat-tad;te;tAni;tat-tad;te;tAni;tena;tAbhyAm;taiH;tasmai;tAbhyAm;tebhyaH;tasmAt-tasmAd;tAbhyAm;tebhyaH;tasya;tayoH;teSAm;tasmin;tayoH;teSu;-;-;-"
    },
    {
        "ind": "176002",
        "baseindex": "76.002",
        "word": "yad",
        "grp": "76",
        "index_in_grp": "2",
        "end": "dakArAntaH",
        "linga": "N",
        "forms": "yat-yad;ye;yAni;yat-yad;ye;yAni;yena;yAbhyAm;yaiH;yasmai;yAbhyAm;yebhyaH;yasmAt-yasmAd;yAbhyAm;yebhyaH;yasya;yayoH;yeSAm;yasmin;yayoH;yeSu;-;-;-"
    },
    {
        "ind": "176003",
        "baseindex": "76.003",
        "word": "etad",
        "grp": "76",
        "index_in_grp": "3",
        "end": "dakArAntaH",
        "linga": "N",
        "forms": "etat-etad;ete;etAni;etat-etad-enat-etad;ete-ene;etAni-enAni;etena-enena;etAbhyAm;etaiH;etasmai;etAbhyAm;etebhyaH;etasmAt-etasmAd;etAbhyAm;etebhyaH;etasya;etayoH-enayoH;eteSAm;etasmin;etayoH-enayoH;eteSu;-;-;-"
    },
    {
        "ind": "177001",
        "baseindex": "77.001",
        "word": "yakRt",
        "grp": "77",
        "index_in_grp": "1",
        "end": "takArAntaH",
        "linga": "N",
        "forms": "yakRt-yakRd;yakRtI;yakRnti;yakRt-yakRd;yakRtI-yakAni;yakRnti;yakRtA-yaknA;yakRdbhyAm-yakabhyAm;yakRdbhiH-yakabhiH;yakRte-yakne;yakRdbhyAm-yakabhyAm;yakRdbhyaH-yakabhyaH;yakRtaH-yaknaH;yakRdbhyAm-yakabhyAm;yakRdbhyaH-yakabhyaH;yakRtaH-yaknaH;yakRtoH-yakanoH;yakRdAm-yakanAm;yakRti-yakni;yakRtoH-yakanoH;yakRtsu-yakasu;he yakRt-yakRd;he yakRtI;he yakRnti"
    },
    {
        "ind": "177002",
        "baseindex": "77.002",
        "word": "zakRt",
        "grp": "77",
        "index_in_grp": "2",
        "end": "takArAntaH",
        "linga": "N",
        "forms": "zakRt-zakRd;zakRtI;zakRnti-zakAni;zakRt-zakRd;zakRtI;zakRnti-zakAni;zakRtA-zaknA;zakRdbhyAm-zakabhyAm;zakRdbhiH-zakabhiH;zakRte-zakne;zakRdbhyAm-zakabhyAm;zakRdbhyaH-zakabhyaH;zakRtaH-zaknaH;zakRdbhyAm-zakabhyAm;zakRdbhyaH-zakabhyaH;zakRtaH-zaknaH;zakRtoH-zakanoH;zakRdAm-zakanAm;zakRti-zakni;zakRtoH-zakanoH;zakRtsu-zakasu;he zakRt-zakRd;he zakRtI;he zakRnti"
    },
    {
        "ind": "177003",
        "baseindex": "77.003",
        "word": "dadat",
        "grp": "77",
        "index_in_grp": "3",
        "end": "takArAntaH",
        "linga": "N",
        "forms": "dadat-dadad;dadatI;dadati-dadanti;dadat-dadad-dadat;dadatI;dadati-dadanti;dadatA;dadadbhyAm;dadadbhiH;dadate;dadadbhyAm;dadadbhyaH;dadataH;dadadbhyAm;dadadbhyaH;dadataH;dadatoH;dadatAm;dadati;dadatoH;dadatsu;he dadat-dadad;he dadatI;he dadanti"
    },
    {
        "ind": "177004",
        "baseindex": "77.004",
        "word": "jagat",
        "grp": "77",
        "index_in_grp": "4",
        "end": "takArAntaH",
        "linga": "N",
        "forms": "jagat-jagad;jagatI;jaganti;jagat-jagad;jagatI;jaganti;jagatA;jagadbhyAm;jagadbhiH;jagate;jagadbhyAm;jagadbhyaH;jagataH;jagadbhyAm;jagadbhyaH;jagataH;jagatoH;jagatAm;jagati;jagatoH;jagatsu;he jagat-jagad;he jagatI;he jaganti"
    },
    {
        "ind": "177005",
        "baseindex": "77.005",
        "word": "tudat",
        "grp": "77",
        "index_in_grp": "5",
        "end": "takArAntaH",
        "linga": "N",
        "forms": "tudat-tudad;tudatI-tudantI;tudanti;tudat-tudad;tudatI-tudantI;tudanti;tudatA;tudadbhyAm;tudadbhiH;tudate;tudadbhyAm;tudadbhyaH;tudataH;tudadbhyAm;tudadbhyaH;tudataH;tudatoH;tudatAm;tudati;tudatoH;tudatsu;he tudat-tudad;he tudatI-tudantI;he tudanti"
    },
    {
        "ind": "177006",
        "baseindex": "77.006",
        "word": "pacat",
        "grp": "77",
        "index_in_grp": "6",
        "end": "takArAntaH",
        "linga": "N",
        "forms": "pacat-pacad;pacantI;pacanti;pacat-pacad;pacantI;pacanti;pacatA;pacadbhyAm;pacadbhiH;pacate;pacadbhyAm;pacadbhyaH;pacataH;pacadbhyAm;pacadbhyaH;pacataH;pacatoH;pacatAm;pacati;pacatoH;pacatsu;he pacat-pacad;he pacantI;he pacanti"
    },
    {
        "ind": "177007",
        "baseindex": "77.007",
        "word": "dIvyat",
        "grp": "77",
        "index_in_grp": "7",
        "end": "takArAntaH",
        "linga": "N",
        "forms": "dIvyat-dIvyad;dIvyantI;dIvyanti;dIvyat-dIvyad;dIvyantI;dIvyanti;dIvyatA;dIvyadbhyAm;dIvyadbhiH;dIvyate;dIvyadbhyAm;dIvyadbhyaH;dIvyataH;dIvyadbhyAm;dIvyadbhyaH;dIvyataH;dIvyatoH;dIvyatAm;dIvyati;dIvyatoH;dIvyatsu;he dIvyat-dIvyad;he dIvyantI;he dIvyanti"
    },
    {
        "ind": "178001",
        "baseindex": "78.001",
        "word": "svap",
        "grp": "78",
        "index_in_grp": "1",
        "end": "pakArAntaH",
        "linga": "N",
        "forms": "svap-svab;svapI;svAmpi-svampi;svap-svab;svapI;svAmpi-svampi;svapA;svadbhyAm;svadbhiH;svape;svadbhyAm;svadbhyaH;svapaH;svadbhyAm;svadbhyaH;svapaH;svapoH;svapAm;svapi;svapoH;svaptsu;he svap-svab;he svapI;he svAmpi-svampi"
    },
    {
        "ind": "179001",
        "baseindex": "79.001",
        "word": "dhanuS",
        "grp": "79",
        "index_in_grp": "1",
        "end": "SakArAntaH",
        "linga": "N",
        "forms": "dhanuH;dhanuSI;dhanUMSi;dhanuH;dhanuSI;dhanUMSi;dhanuSA;dhanurbhyAm;dhanurbhiH;dhanuSe;dhanurbhyAm;dhanurbhyaH;dhanuSaH;dhanurbhyAm;dhanurbhyaH;dhanuSaH;dhanuSoH;dhanuSAm;dhanuSi;dhanuSoH;dhanuSSu-dhanuHSu;he dhanuH;he dhanuSI;he dhanUMSi"
    },
    {
        "ind": "179002",
        "baseindex": "79.002",
        "word": "haviS",
        "grp": "79",
        "index_in_grp": "2",
        "end": "SakArAntaH",
        "linga": "N",
        "forms": "haviH;haviSI;havIMSi;haviH;haviSI;havIMSi;haviSA;havirbhyAm;havirbhiH;haviSe;havirbhyAm;havirbhyaH;haviSaH;havirbhyAm;havirbhyaH;haviSaH;haviSoH;haviSAm;haviSi;haviSoH;haviSSu-haviHSu;he haviH;he haviSI;he havIMSi"
    },
    {
        "ind": "179003",
        "baseindex": "79.003",
        "word": "pipaThiS",
        "grp": "79",
        "index_in_grp": "3",
        "end": "SakArAntaH",
        "linga": "N",
        "forms": "pipaThIH;pipaThiSI;pipaThiSi;pipaThIH;pipaThiSI;pipaThiSi;pipaThiSA;pipaThIrbhyAm;pipaThIrbhiH;pipaThiSe;pipaThIrbhyAm;pipaThIrbhyaH;pipaThiSaH;pipaThIrbhyAm;pipaThIrbhyaH;pipaThiSaH;pipaThiSoH;pipaThiSAm;pipaThiSi;pipaThiSoH;pipaThIHSu-pipaThISSu;he pipaThIH;he pipaThiSI;he pipaThiSi"
    },
    {
        "ind": "180001",
        "baseindex": "80.001",
        "word": "payas",
        "grp": "80",
        "index_in_grp": "1",
        "end": "sakArAntaH",
        "linga": "N",
        "forms": "payaH;payasI;payAMsi;payaH;payasI;payAMsi;payasA;payobhyAm;payobhiH;payase;payobhyAm;payobhyaH;payasaH;payobhyAm;payobhyaH;payasaH;payasoH;payasAm;payasi;payasoH;payassu,payaHsu;he payaH;he payasI;he payAMsi"
    },
    {
        "ind": "180002",
        "baseindex": "80.002",
        "word": "supums",
        "grp": "80",
        "index_in_grp": "2",
        "end": "sakArAntaH",
        "linga": "N",
        "forms": "supum;supuMsI;supumAMsi;supum;supuMsI;supumAMsi;supuMsA;supumbhyAm;supumbhiH;supuMse;supumbhyAm;supumbhyaH;supuMsaH;supumbhyAm;supumbhyaH;supuMsaH;supuMsoH;supuMsAm;supuMsi;supuMsoH;supuMsu;he supum;he supuMsI;he supumAMsi"
    },
    {
        "ind": "180003",
        "baseindex": "80.003",
        "word": "adas",
        "grp": "80",
        "index_in_grp": "3",
        "end": "sakArAntaH",
        "linga": "N",
        "forms": "adaH;amU;amUni;adaH;amU;amUni;amunA;amUbhyAm;amIbhiH;amuSmai;amUbhyAm;amIbhyaH;amuSmAt-amuSmAd;amUbhyAm;amIbhyaH;amuSya;amuyoH;amISAm;amuSmin;amuyoH;amISu;-;-;-"
    }
]

export const SPECIAL = [
    {
        "ind": "101001",
        "baseindex": "01.001",
        "word": "a",
        "grp": "1",
        "index_in_grp": "1",
        "end": "akArAntaH",
        "linga": "P",
        "forms": "aH;au;AH;am;au;An;ena;AbhyAm;aiH;Aya;AbhyAm;ebhyaH;At-Ad;AbhyAm;ebhyaH;asya;ayoH;AnAm;e;ayoH;eSu;he a;he au;he AH"
    },
    {
        "ind": "105001",
        "baseindex": "05.001",
        "word": "u",
        "grp": "5",
        "index_in_grp": "1",
        "end": "ukArAntaH ",
        "linga": "P",
        "forms": "uH;U;avaH;um;U;Un;unA;ubhyAm;ubhiH;uve;ubhyAm;ubhyaH;oH;ubhyAm;ubhyaH;oH;voH;UnAm;au;voH;uSu;he o;he U;he avaH"
    }
]
