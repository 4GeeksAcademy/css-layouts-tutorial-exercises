# `09` Beautify

Este ejercicio está basado en un caso real de uno de nuestros estudiantes. La idea original era crear un diseño limpio con dos columnas: una con bloques grandes, y otra con bloques más pequeños organizados verticalmente.

Sin embargo, el código original **está parcialmente roto**. El HTML y el CSS tienen errores que impiden que el layout se vea correctamente.

Tu objetivo será **arreglar el HTML y aplicar estilos con Flexbox** para lograr el siguiente diseño.


![Diseño de dos columnas con seis bloques rectangulares distribuidos usando Flexbox. La columna izquierda contiene dos bloques grandes apilados verticalmente: una caja roja con el texto "The Menu" en la parte superior y una caja azul con el texto "Second Content" debajo. La columna derecha contiene cuatro bloques más pequeños apilados verticalmente: una caja azul con el texto "The Content", una caja amarilla con el texto "The Other Stuff", una caja roja con el texto "Second Content" y una caja negra con el texto "The Extra Stuff". Cada bloque tiene bordes redondeados y texto centrado en negrita.](../../.learn/assets/image-layout-beauty.png?raw=true)


## 📝 Instrucciones:

1. Todo el contenido debe estar dentro de un contenedor `<div class="wrapper">`.
2. Dentro de `.wrapper`, debes tener dos columnas (`<div class="left-column">` y `<div class="right-column">`).
3. Crea 6 bloques con los siguientes `id`: `div1` a `div6`.
4. Coloca el contenido textual de cada uno dentro de una etiqueta `<strong>`, siguiendo esta distribución:

| ID     | Texto a mostrar       | Columna         | Posición |
|--------|------------------------|------------------|----------|
| div1   | The Menu               | izquierda        | arriba   |
| div2   | Second Content         | izquierda        | abajo    |
| div3   | The Content            | derecha          | primero  |
| div4   | The Other Stuff        | derecha          | segundo  |
| div5   | Second Content         | derecha          | tercero  |
| div6   | The Extra Stuff        | derecha          | cuarto   |



### 💡 Pistas

- Usa `display: flex` en `.wrapper` para crear el layout de columnas.
- Usa `flex-direction: column` en `.left-column` y `.right-column`.
- Puedes usar `gap` para separar los bloques.
- Asegúrate de que los textos estén centrados usando `text-align`, `display: flex`, o `line-height`.


## ⚠️ Importante:

No elimines ni modifiques los elementos del `<head>` como `<meta>`, `<title>` o `<link>`.

