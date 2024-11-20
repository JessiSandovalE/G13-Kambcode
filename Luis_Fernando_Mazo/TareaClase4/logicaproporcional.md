# Logica proporcional
## Ejercicio 1
### true || true || false && true || false && true && true || false

1. true || true => true (OR devuelve true si alguno de los operandos es true)
2. true || false && true = true (AND tiene prioridad sobre OR, pero false && true es false, entonces se evalúa como true || false = true)
3. true || false && true && true = true (similar al paso anterior, false && true && true es false, entonces se evalúa como true || false = true)
4. true || false = true 
- **El primer ajercicio arroja true**

## Ejercicio 2

### true && (false || false && (true && (true || false && true))) || false && (true || false)

- Desglosemos la expresión paso a paso:
1. false || false && (true && (true || false && true))
- true || false && true => true
- false && (true && true) => false
- false || false => false
2. true && false || false && (true || false)
- true && false => false
- false && (true || false) => false
- false || false => false
- **El segundo ajercicio arroja false**

## Ejercicio 2

### !(!true && (false || false && !!!true || (true && !false))) || false && true

- Desglosemos la expresión, primero los parentesis mas adentro.
    - true && !false => true
    - false && !!!true || (true) => true
    - false || (true) => true
    - !true && (true) => false
    - !false || false && true => true

- **El tercer ajercicio arroja true**