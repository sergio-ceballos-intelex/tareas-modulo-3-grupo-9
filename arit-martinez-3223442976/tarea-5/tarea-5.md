# ***3. logica proposicional***

## ***problema 1***.

    1.true || true || false && true || false && true && true || false

true || true || false || false && true && true || false

true || true || false || false || false

true || false || false || false

true || false || false

true || false

**Respuesta: true**

## ***problema 2***.
    2.true && (false || false && (true && (true || false && true))) || false && (true || false)

true && (false || false && (true && (true || false))) || false && (true || false)

true && (false || false && (true && true)) || false && (true || false)

true && (false || false && true) || false && (true || false)

true && (false || false) || false && (true || false)

true && false || false && (true || false)

true && false || false && true

false || false && true

false || false

**Respuesta: false**

## ***problema 3***.
    3.!(!true && (false || false && !!!true || (true && !false))) || false && true

!(!true && (false || false && !!!true || (true && true))) || false && true

!(!true && (false || false && !!!true || true)) || false && true

!(!true && (false || false && false || true)) || false && true

!(false && (false || false && false || true)) || false && true

!(false && (false || false || true)) || false && true

!(false && (false || false || true)) || false

!(false && (false || true)) || false

!(false && true) || false

!false || false

true || false

**Respuesta: true**