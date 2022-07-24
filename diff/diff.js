const array1 = ["kita", "bisa", "dot", "com"],
    array2 = ["kita", "dot", "bisa", "donasi", "com", "yuk"];

function getMatch(a, b) {
    const matches = [];

    for ( let i = 0; i < a.length; i++ ) {
        for ( let e = 0; e < b.length; e++ ) {
            if ( a[i] === b[e] ) matches.push( a[i] );
        }
    }
    return matches;
}

console.log(getMatch(array1, array2));
