# `09.1` Before and After

Este ejercicio te ayudará a practicar el uso de pseudoelementos CSS `::before` y `::after`, que permiten agregar contenido decorativo a los elementos HTML sin modificar el HTML directamente. Son útiles para crear detalles como flechas, etiquetas o elementos visuales extra.

En este caso, ya se ha aplicado un pseudoelemento `::before` sobre un encabezado `<h1>` con el texto `"Hello World"`, generando una flecha triangular que apunta a la izquierda.

Sin embargo, el código aún está incompleto. Tu tarea es agregar una segunda flecha al lado derecho del texto utilizando `::after`.


## 📝 Instrucciones:

1. Usa el pseudoelemento `::after` sobre el `<h1>` existente.
2. La flecha debe apuntar **a la derecha** del texto `"Hello World"`.
3. La flecha debe estar construida exclusivamente con CSS (por ejemplo, usando `border-left`).
4. Asegúrate de que la flecha `::after` esté alineada visualmente con la flecha `::before`.

## 💻 Resultado esperado:

![Before and After](../../.learn/assets/BKz8ozg.png?raw=true)


## 💡 Pista:

Puedes construir flechas en CSS usando bordes. Para una flecha que apunta a la derecha, prueba con algo como:

```css
border-left: 10px solid black;
border-top: 5px solid transparent;
border-bottom: 5px solid transparent;
```

