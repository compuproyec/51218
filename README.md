# Ejemplos de Archivos de Entrada - Bucles `para`

Este repositorio incluye ejemplos de código con estructuras de control tipo `para`, usados para probar el analizador sintáctico. Se muestra tanto entradas correctas como incorrectas para evaluar el comportamiento del sistema ante diferentes casos.

## ## Instalacion

Clona este repositorio: https://github.com/compuproyec/51218.git 
cd 51218

## Archivos incluidos

## `input_correcto_1.txt`

```txt
para i desde 1 hasta 3 hacer {
  imprimir("Hola desde el bucle");
}
```

**Explicación:**
- Declara un bucle que recorre `i` desde 1 hasta 3.
- En cada iteración, imprime `"Hola desde el bucle"`.
- Sintaxis completa y correcta.

---

## `input_correcto_2.txt`

```txt
para x desde 2 hasta 4 hacer {
  imprimir("Mensaje dentro del bucle");
  salir;
  imprimir("Este mensaje no se mostrará");
}
```

**Explicación:**
- Bucle `para` que recorre `x` de 2 a 4.
- Imprime un mensaje y luego ejecuta `salir;`, que simula romper el bucle.
- La segunda impresión nunca se ejecuta por estar después de `salir;`.
- Toda la sintaxis es válida.

---

## `input_incorrecto_1.txt`

```txt
para i desde hasta 5 hacer {
  imprimir("Falta número de inicio");
}
```

**Error:**
- Falta el número de inicio después de `desde`.
- Sintaxis incompleta en la declaración del bucle.

---

## `input_incorrecto_2.txt`

```txt
para j desde 1 hasta 3 hacer {
  imprimir("Falta punto y coma")
}
```

**Error:**
- La instrucción `imprimir` no termina en punto y coma.
- Esto genera un error de sintaxis en el análisis.

---

## Cómo usar

1. Copia uno de los archivos como `input.txt`.
2. Ejecuta el analizador con:

```bash
npm start
```

Se mostrará si el archivo es válido o no, junto con detalles del análisis.
