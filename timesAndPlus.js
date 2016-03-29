// make the following code work

// three(times(five())) // 15
// five(plus(three())) // 8
function three( cb ) {
    if ( !cb ) return 3;

    return cb( 3 );
}

function five( cb ) {
    if ( !cb ) return 5;

    return cb( 5 );
}

function times( numOne ) {
    return function( numTwo ) {
        return numOne * numTwo;
    }
}

function plus( numOne ) {
    return function( numTwo ) {
        return numOne + numTwo;
    }
}