//EJERCICIO 1

if(true || true || false && true || false && true && true || false){
    console.log('is true')
}else{
    console.log('is false')
}

//* -->  Solución paso a paso  <--  *//
//*  Esta sentencia es true por que si alguno de los valores es true, toda la sentencia es true - *//
//En este caso tenemos dos true.
true || true || false && true || false && true && true || false

true || true ||      false    ||          false        || false

true

// ------------------------------------------------------------------------------------------------ //

// EJERCICIO 2

if(true && (false || false && (true && (true || false && true))) || false && (true || false)){
    console.log('is true')
}else{
    console.log('is false')
}

//* -->  Solución paso a paso  <--  *//
//*  Esta sentencia es false por que es necesario que las condiciones después del && sean true - *//
//En este caso tenemos un true y un false.

true && (false || false && (true && (true || false && true))) || false && (true || false)

true && (false || false && (true && (        true         ))) || false && (    true     )

true && (false || false && (             true              )) ||          false 

true && (false ||                   false                   ) ||          false

true && (                       false                       ) ||          false

true &&                                   false 

false


// EJERCICIO 3

if(!(!true && (false || false && !!!true || (true && !false))) || false && true){
    console.log('is true')
}else{
    console.log('is false')
}


//* -->  Solución paso a paso  <--  *//
//*  Esta sentencia es true por que el resultado final es una negación de false, lo que equivale a true

!(!true && (false || false && !!!true || (true && !false))) || false && true

!(!true && (false ||        false     ||       true      )) ||     false

!(!true && (                        true                 )) ||     false

!(!true &&                               true                           )

!(                                 false                                )

true
