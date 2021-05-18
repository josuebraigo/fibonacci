# Fibonacci

##Instalación

Para este algoritmo utilizamos React como librería de Frontend para realizar el algoritmo, para correr el proyecto, necesita correr los siguientes comandos

```bash
git clone https://github.com/josuebraigo/fibonacci.git
```

Después, entramos a la carpeta del proyecto y corremos el siguiente comando

```bash
npm install
```

## Descripción

El programa funciona con un input que permite escribir un número, en el cual, en el segundo input, nos regresará el número que corresponde a la posición dentro de la secuencia de Fibonacci

La forma en la que funciona el código es la siguiente:

```javascript
let numbers = [0, 1];

for(let i = 2; i < e.target.value; i++) {
    numbers[i] = numbers[i - 2] + numbers[i - 1];
}
```

Inicializamos un arreglo con 2 números, 0 y 1, que corresponde a los primeros números de la secuencia de Fibonacci. Después, vamos aumentando el arreglo con los números que corresponden a la secuencia hasta llegar a la posición señalada en el input. Una vez llegamos, terminamos el arreglo y retornamos la última posición


Creado por Josué Castillo.
