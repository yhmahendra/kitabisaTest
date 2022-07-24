var array1 = ["cat", "bat", "sum", "fun", "run"],
    array2 = ["bat", "cat", "dog", "sun", "hut", "gut"];

function getMatch(a, b) {
    var matches = [];

    for ( var i = 0; i < a.length; i++ ) {
        for ( var e = 0; e < b.length; e++ ) {
            if ( a[i] === b[e] ) matches.push( a[i] );
        }
    }
    return matches;
}

console.log(getMatch(array1, array2));
