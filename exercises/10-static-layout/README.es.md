# `10` Static Layout

En este ejercicio practicarás cómo distribuir elementos horizontalmente dentro de un contenedor usando **Flexbox** y otras propiedades fundamentales de CSS.

El objetivo es construir una estructura web básica compuesta por un encabezado y dos bloques principales alineados en una misma fila: un menú lateral de navegación y una sección de contenido.

El archivo HTML ya viene preparado y **no debe ser modificado**. Los elementos que vas a estilizar son:

- `.wrapper`: contenedor principal de toda la página.
- `<header>`: aparece en la parte superior.
- `.secondWrapper`: contiene los bloques `<nav>` y `<section>` y será el foco principal del layout.


## 📝 Instrucciones:

1. Aplica `display: flex` al contenedor `.secondWrapper` para que `<nav>` y `<section>` se alineen horizontalmente.
2. Establece que el `<section>` tenga un ancho de aproximadamente `80%` del contenedor `.secondWrapper`.
3. Asegúrate de que `<nav>` se muestre a la **izquierda** del `<section>`.
4. Deja un **espacio de `10px`**:
   - Entre `<nav>` y `<section>`.
   - Entre `<section>` y el borde derecho de `.secondWrapper`.
5. **No utilices** `position: absolute` ni `float`.

6. Asegúrate de que el `<header>` ocupe todo el ancho de la página y esté por encima de los bloques principales.

### 💡 Pistas

- No modifiques el archivo HTML.
- Puedes usar `gap: 10px` si lo aplicas correctamente sobre `.secondWrapper`.
- Si decides usar `margin-right` o `padding`, asegúrate de que la suma de anchos no rompa el layout.
- Aplica colores de fondo temporales para visualizar la estructura mientras trabajas (luego los puedes quitar).
- Usa `box-sizing: border-box` si necesitas controlar el comportamiento del ancho y padding.




## 💻 Resultado esperado:

![Static Layout](../../.learn/assets/0B62fyP.png?raw=true)
