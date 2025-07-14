# `10` Static Layout

En este ejercicio trabajarás con posicionamiento y distribución estática usando `flexbox` y otras propiedades básicas de CSS. El objetivo es construir un diseño de página simple pero correctamente alineado, donde los elementos principales se distribuyen con márgenes y anchos específicos.

El HTML ya está estructurado con las siguientes clases y elementos:

- `.wrapper` (contenedor general)
- `.secondWrapper` (contenedor de `nav` y `section`)
- `<header>`
- `<nav>`
- `<section>`


## 📝 Instrucciones:

1. Aplica `display: flex` sobre el contenedor `.secondWrapper` para que sus elementos hijos se dispongan en línea (horizontalmente).
2. El elemento `<section>` debe ocupar aproximadamente el `80%` del ancho de `.secondWrapper`.
3. El `<nav>` debe ubicarse a la izquierda del `<section>`.
4. Asegúrate de que haya un espacio de `10px`:
   - Entre `<nav>` y `<section>`.
   - Entre `<section>` y el borde derecho del contenedor.
5. El diseño debe mantenerse estable, sin usar `position: absolute` o `float`.

## 💡 Pistas: 

- No modifiques el archivo HTML.
- Usa propiedades como `gap`, `margin`, `padding`, `width`, `flex`, etc.
- Si usas `gap`, asegúrate de que sea aplicado en el contenedor adecuado.
- Puedes usar colores de fondo temporales para visualizar los bloques mientras trabajas.
- Este ejercicio no tiene pruebas, compara tu resultado con la imagen dada.

## 💻 Resultado esperado:

![Static Layout](../../.learn/assets/0B62fyP.png?raw=true)
