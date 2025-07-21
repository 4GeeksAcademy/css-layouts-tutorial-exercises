# `06` Center content

En la mayoría de los sitios web, es una buena práctica envolver todo el contenido principal dentro de un contenedor. Este contenedor suele tener un ancho fijo o limitado, y se centra horizontalmente para mejorar la legibilidad y el diseño.

En este ejercicio, aprenderás cómo centrar una caja de contenido de forma horizontal usando CSS con la propiedad `margin:auto`.


### ¿Cómo funciona `margin: auto`?

Cuando un elemento tiene un ancho definido (`width: 400px`) y le aplicas `margin: auto`, el navegador reparte el espacio horizontal restante **equitativamente a ambos lados** del elemento. Esto tiene como efecto visual que el elemento quede centrado en el contenedor (por ejemplo, el `body`).

```css
.myDiv {
  width: 400px;
  margin: 0 auto;
}
```


## 📝 Instrucciones:


1. Crea un div con la clase `myDiv`.
2. Aplica los siguientes estilos con CSS:
    - Ancho (`width`) de `400px`.
    - Color de fondo (`background`) gris.

3. Centra horizontalmente el div dentro del body usando `margin: auto`.


## 💻 Resultado esperado:

![Centrar contenido](../../.learn/assets/XX6daZ3.png?raw=true)
